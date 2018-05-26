import Store from './Store';

function arrayToObjectOfChildIds(childPrevStates){
	let prevStateIdMap = null;
	if(childPrevStates){
		prevStateIdMap = {};
		let i, id, childPrevState;
		for(i = 0; i < childPrevStates.length; i++){
			childPrevState = childPrevStates[i];
			if(childPrevState){
				if(typeof childPrevState === 'string'){
					id = childPrevState;
				} else {
					id = childPrevState['id'];
				}
				prevStateIdMap[id] = childPrevState;
			}
		}
	}
	return prevStateIdMap;
}

export default class StoreCollection extends Store{
	constructor(state,displayName, objectName){
		super(null, displayName, objectName);
		this.children = {};
		this._value = state ? (state.value === undefined ? {} : state.value) : {};
		this.triggerWaitCount = 0;
	}

	shouldListenersExecute(){
		if(this.triggerWaitCount === 0 || this.triggerWaitCount === 1){
			this.triggerWaitCount === 1 && this.triggerWaitCount--;
			return true;
		} else {
			this.triggerWaitCount = this.triggerWaitCount - 1
			return false;
		}

	}

}

StoreCollection.prototype.getState = function(){
	return this.getChildren(true);
};

StoreCollection.prototype.setState = function(newValue, callback){
	this.triggerWaitCount = this.calculateDiff(newValue, true);
	if(this.triggerWaitCount > 0){
		const _setState = ()=>{
			let childValues = {};
			const currentChildIds = this.getChildIds(true);
			if(newValue){
				for (let i = 0; i < newValue.length; i++) {
					const newChildState = newValue[i];
					if(newChildState){
						let childId;
						if(typeof newChildState === 'string'){
							childId = newChildState; // id of UnchangedChild
							childValues[childId] = this._value[childId];
						} else {
							const{id, classDefName, value, displayName} = newChildState;
							childId = id; // id of changedChild
							this.requestStore(childId, value, classDefName, displayName);
							childValues[id] = value;
						}
						const idStillExist = (currentChildIds && currentChildIds.indexOf(childId) > -1)
						if(idStillExist){ // remove them
							currentChildIds.splice(childId,1);
						}
					}
				}
			}
			if(currentChildIds){
				// remove all old Ids
				currentChildIds.map((oldId)=>{
					this.remove(oldId);
				});
			}
			this._value = childValues;
		};
		//set state function is the one which triggers all the listeners attached to it
		// if listeners execution are going on, this will execute once they are done
		// else set state is executed immediately
		this.executeTriggerer(this,_setState, ()=>{
			callback && callback();
		});
	}

	return Number(this.triggerWaitCount > 0);
};


StoreCollection.prototype.getChildIds = function(asCopy){
	const ids =  Object.keys(this.children);
	return asCopy ? ids.slice() : ids;
};

StoreCollection.prototype.getChildren = function(asJson){
	const children = [];
	const childKeys = Object.keys(this.children);
	for(let i = 0; i < childKeys.length; i++){
		const childKey = childKeys[i];
		const storeObject = this.children[childKey];
		children.push(asJson?storeObject.asJson():storeObject);
	}
	return children;
};


//to-do think of ui point of view and the change the way they are instantiated here
StoreCollection.prototype.requestStore = function(id, state, classDefName, displayName, newStoreCallback){
	let storeObject = this.children[id];
	if(storeObject){
		return storeObject.setState(state);
	}

	let returnValue;
	const _requestStore = ()=>{
		if(classDefName === 'Store'){
			storeObject = new Store(state, displayName, id);
		} else if(classDefName === 'StoreCollection') {
			storeObject = new StoreCollection(state, displayName, id);
		}

		storeObject.setConnector(this.triggerListeners.bind(this));
		storeObject.linkParentId(this.id);
		const newStoreObjId = storeObject.id;
		this.children[newStoreObjId] = storeObject;
		this._value[newStoreObjId] = storeObject.getValue();
		returnValue = storeObject;
		this.triggerListeners();
	};

	this.executeTriggerer(this,_requestStore, ()=>{
		newStoreCallback && newStoreCallback(returnValue);
	});
};

StoreCollection.prototype.remove = function(id,trigger = true){
	const storeObject = this.children[id];
	if(storeObject){
		const _remove = ()=>{
			storeObject.removeConnector();
			delete this.children[id];
			delete this._value[id];
			trigger && this.triggerListeners();
		}

		if(!trigger){
			_remove.call(this);
		};

		this.executeTriggerer(this,_remove)
	}

};

StoreCollection.prototype.removeAll = function(){
	const childKeys = Object.keys(this.children);
	if(childKeys.length > 0){
		const _removeAll = ()=>{
			for(let i = 0; i < childKeys.length; i++){
				const childKey = childKeys[i];
				this.remove(childKey, false);
			}
			this.triggerListeners();
		}

		this.executeTriggerer(this,_removeAll)
	}
};

StoreCollection.prototype.calculateDiff = function(value, onlyComparison = false, asforwardBackward = false){
	const stateIdMap = arrayToObjectOfChildIds(value);

	const childKeys = Object.keys(this.children);
	const stateLength = value ? value.length : NaN;
	const currentStateLength = childKeys ? childKeys.length : 0;
	let didAnyChildStateChanged = stateLength !== currentStateLength ;


	let numberOfChildrenUpdated = 0;
	const delta = stateLength - currentStateLength;
	//since we are running for loop based on current state length , deletion will be identified
	// hence we have to take addition into consideration.
	let numberOfChildAddition = delta > 0 ? delta : 0;

	let diffStatesOfChildren = undefined;
	for(let i = 0; i < currentStateLength; i++){
		const childKey = childKeys[i];
		const storeObject = this.children[childKey];
		const newStateOfChild = stateIdMap ? stateIdMap[storeObject.id]: undefined;
		if(typeof newStateOfChild !== 'string'){ // if string then there is no change
			const newValueChild = newStateOfChild ? newStateOfChild.value : undefined;

			if(onlyComparison){
				const childUpdated = storeObject.calculateDiff.call(storeObject, newValueChild, true);
				if(childUpdated){
					numberOfChildrenUpdated = numberOfChildrenUpdated + 1
				}
			}else{
				const diffValue = storeObject.getDiff.call(storeObject, newValueChild);
				if(typeof diffValue !== 'string'){
					didAnyChildStateChanged = true;
				}
				!diffStatesOfChildren && (diffStatesOfChildren = []);
				diffStatesOfChildren.push(diffValue);
			}
		}
	}

	if(onlyComparison){
		return numberOfChildAddition + numberOfChildrenUpdated;
	}

	if(didAnyChildStateChanged){
		return asforwardBackward ? {
			forward:this.asJson(diffStatesOfChildren),
			backward:this.asJson(value)
		} : this.asJson(diffStatesOfChildren)
	} else {
		return asforwardBackward ? {
			forward:this.id,
			backward:this.id
		} : this.id;
	}
};

// when we call apply diff, connect to next set of functions are not called
StoreCollection.prototype.applyDiff = function(value, callback){
	this.unLinkConnector();
	this.setState(value, ()=>{
		this.linkConnector();
		callback()
	});
};
