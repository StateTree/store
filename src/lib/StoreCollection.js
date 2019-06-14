import Store from './Store';
import {arrayToObject, combineArray} from './helpers';

export default class StoreCollection extends Store{
	constructor(state,displayName, objectName, classDefName){
		classDefName = classDefName ? classDefName : 'StoreCollection';
		super(null, displayName, objectName, null, classDefName);
		this.children = {};
		this._value = state ? (state.value === undefined ? {} : state.value) : {};
		this.triggerWaitCount = 0;
	}

	shouldListenersExecute(){
		if(this.triggerWaitCount === 0 || this.triggerWaitCount === 1){
			this.triggerWaitCount === 1 && this.triggerWaitCount--;
			return true;
		} else {
			this.triggerWaitCount = this.triggerWaitCount - 1;
			return false;
		}

	}

}

StoreCollection.prototype.getState = function(onlyValue){
	return this.getChildren(true, onlyValue);
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
						if(typeof newChildState === 'string'){ // no change
							childId = newChildState; // id of UnchangedChild
							childValues[childId] = this._value[childId];
						} else {
							const{id, classDefName, value, displayName} = newChildState;
							if(classDefName === undefined) { // delete Operation
								this.remove(id);
							}  else { // update Operation or Addition
								this.requestStore(id, value, classDefName, displayName);
								childValues[id] = value;
							}

						}
						const idStillExist = (currentChildIds && currentChildIds.indexOf(childId) > -1)
						if(idStillExist){ // remove them
							currentChildIds.splice(childId,1);
						}
					}
				}
			}
			// todo: will this line of Codes ever reach as we handle remove above
			/*if(currentChildIds){
				// remove all old Ids
				currentChildIds.map((oldId)=>{
					this.remove(oldId);
				});
			}*/
			this._value = childValues;
		};
		//set state function is the one which triggers all the listeners attached to it
		// if listeners execution are going on, this will execute once they are done
		// else set state is executed immediately
		this.executeWhenIdle(_setState, ()=>{
			callback && callback();
		});
	}

	return Number(this.triggerWaitCount > 0);
};


StoreCollection.prototype.getChildIds = function(asCopy){
	const ids =  Object.keys(this.children);
	return asCopy ? ids.slice() : ids;
};

StoreCollection.prototype.getChildren = function(asJson, onlyValue){
	const children = [];
	const childKeys = Object.keys(this.children);
	for(let i = 0; i < childKeys.length; i++){
		const childKey = childKeys[i];
		const storeObject = this.children[childKey];
		children.push(asJson ? storeObject.asJson(undefined, undefined, onlyValue):storeObject);
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
			storeObject = new Store(state, displayName, id, null, classDefName);
		} else if(classDefName === 'StoreCollection') {
			storeObject = new StoreCollection(state, displayName, id, classDefName);
		}

		storeObject.setConnector(this.trigger.bind(this));
		storeObject.linkParentId(this.id);
		const newStoreObjId = storeObject.id;
		this.children[newStoreObjId] = storeObject;
		this._value[newStoreObjId] = storeObject.getValue();
		returnValue = storeObject;
		this.trigger();
	};

	this.executeWhenIdle(_requestStore, ()=>{
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
			trigger && this.trigger();
		}

		if(!trigger){
			_remove.call(this);
		};

		this.executeWhenIdle(_remove)
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
			this.trigger();
		}

		this.executeWhenIdle(_removeAll)
	}
};

// onlyComparison mode, our Diff is Log diff
// in false mode our diff is state object
StoreCollection.prototype.calculateDiff = function(value, onlyComparison = false){
	const valueAsObj = arrayToObject(value, 'id');

	const childrenKeys = Object.keys(this.children);
	const stateLen = value ? value.length : NaN;
	const currentStateLen = childrenKeys ? childrenKeys.length : 0;
	let isChanged = stateLen !== currentStateLen ;
	let childUpdateCount = 0;

	let childrenForwardDiffs = [];
	let childrenBackwardDiffs = [];

	for(let i = 0; i < currentStateLen; i++){
		const key = childrenKeys[i];
		const currentStoreObject = this.children[key];
		const childState = valueAsObj ? valueAsObj[currentStoreObject.id]: undefined;
		delete valueAsObj[currentStoreObject.id]; // need to do this to identify all deleted child

		if(childState  ){ // existing child update
			if(typeof childState !== 'string'){ // no change this happens in diff mode , which onlyComparison
				const childValue = childState ? childState.value : undefined;
				if(onlyComparison){
					const isChildUpdated = currentStoreObject.calculateDiff.call(currentStoreObject, childValue, onlyComparison);
					if(isChildUpdated){
						childUpdateCount = childUpdateCount + 1
					}
				}else{
					const diffValue = currentStoreObject.getDiff.call(currentStoreObject, childValue);
					if(typeof diffValue !== 'string'){
						isChanged = true;
					}
					const {forward, backward } = diffValue;
					childrenForwardDiffs.push(forward);
					childrenBackwardDiffs.push(backward);

				}
			}
		}
		else {
			if(onlyComparison){
				childUpdateCount = childUpdateCount + 1;
			} else {
				childrenForwardDiffs.push(currentStoreObject.asJson());
				childrenBackwardDiffs.push(currentStoreObject.asJson(undefined, true))
			}

		}
	}

	const remainingChildKeys = valueAsObj ? Object.keys(valueAsObj) : null;
	const remianingChildCount = remainingChildKeys ? remainingChildKeys.length : 0;
	if(remianingChildCount){
		if(onlyComparison){
			childUpdateCount =  remianingChildCount + childUpdateCount;
		} else {
			for(let i = 0; i < remianingChildCount; i++){
				const remainingChildKey = remainingChildKeys[i];
				const remainingChild = valueAsObj[remainingChildKey];
				const deletedChildForwardDiff = {};
				deletedChildForwardDiff.id = remainingChild.id;
				deletedChildForwardDiff['classDefName'] = undefined;
				deletedChildForwardDiff['displayName'] = undefined;
				deletedChildForwardDiff['value'] = undefined;

				childrenForwardDiffs.push(deletedChildForwardDiff);
				childrenBackwardDiffs.push(remainingChild)
			}
		}

	}

	if(onlyComparison){
		return childUpdateCount;
	}


	if(isChanged){
		return {
			forward:this.asJson(childrenForwardDiffs),
			backward:this.asJson(childrenBackwardDiffs)
		};
	} else {
		return {
			forward:this.id,
			backward:this.id
		};
	}
};

StoreCollection.prototype.combineDiff = function(array1, array2, idName){

	return combineArray(array1, array2, idName, (array1AsObj, array2Child, keyName)=>{
		const childId = typeof array2Child === 'string' ? array2Child : array2Child[keyName];
		return !array1AsObj[childId];
	})

}
// when we call apply diff, connect to next set of functions are not called
StoreCollection.prototype.applyDiff = function(value, callback){
	this.unLinkConnector();
	this.setState(value, ()=>{
		this.linkConnector();
		callback()
	});
};
