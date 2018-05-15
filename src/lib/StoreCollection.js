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
		let value;
		if(state){
			value = state.value === undefined ? null : state.value
		}
		value && (this._value = value);
		this.triggerWaitCount = 0;
	}

	shouldListenersExecute(){
		if(this.triggerWaitCount === 0){
			return true;
		} else {
			this.triggerWaitCount--
		}

	}

}

StoreCollection.prototype.getState = function(){
	return this.getChildren(true);
};

StoreCollection.prototype.setState = function(newValue){
	let childValues = {};
	const currentChildIds = this.getChildIds(true);
	let numberOfChildUpdated = 0;
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
					const objOrBooleanAsNum = this.requestStore(childId, value, classDefName, displayName);
					numberOfChildUpdated = numberOfChildUpdated + Number(typeof objOrBooleanAsNum === "object" || objOrBooleanAsNum);
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
			this.remove(oldId, false);
		});
	}

	this._value = childValues;
	this.triggerWaitCount = numberOfChildUpdated;
	return Number(numberOfChildUpdated > 0);
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
StoreCollection.prototype.requestStore = function(id, state, classDefName, displayName){
	let storeObject = this.children(id);
	if(storeObject){
		return storeObject.setState(state);
	}

	if(classDefName === 'Store'){
		storeObject = new Store(state, displayName, id);
	} else if(classDefName === 'StoreCollection') {
		storeObject = new StoreCollection(state, displayName, id);
	}

	storeObject.setConnector(this.triggerListeners.bind(this));
	storeObject.linkParentId(this.id);
	this.children[storeObject.id] = storeObject;


	this.triggerListeners();
	return storeObject;
};

StoreCollection.prototype.remove = function(id,trigger = true){
	const storeObject = this.children[id];
	storeObject.removeConnector();
	trigger && this.triggerListeners();
};

StoreCollection.prototype.removeAll = function(){
	const childKeys = Object.keys(this.children);
	for(let i = 0; i < childKeys.length; i++){
		const childKey = childKeys[i];
		this.remove(childKey, false);
	}
	childKeys.length > 0 && this.triggerListeners();
};

// when we call apply diff, connect to next set of functions are not called
StoreCollection.prototype.applyDiff = function(value, callback){
	this.unLinkConnector();
	this.setState(value, ()=>{
		this.linkConnector();
		callback()
	});
};

StoreCollection.prototype.getDiff = function(value){
	const stateIdMap = arrayToObjectOfChildIds(value);

	const childKeys = Object.keys(this.children);
	const stateLength = value ? value.length : NaN;
	const currentStateLength = childKeys ? childKeys.length : 0;
	let didAnyChildStateChanged = stateLength !== currentStateLength ;

	let diffStatesOfChildren = undefined;
	for(let i = 0; i < currentStateLength; i++){
		const childKey = childKeys[i];
		const storeObject = this.children[childKey];
		const childState = stateIdMap ? stateIdMap[storeObject.id]: undefined;
		const valueOfChild = childState ? childState.value : undefined;

		const diffValue = storeObject.getDiff.call(storeObject, valueOfChild);
		if(typeof diffValue !== 'string'){
			didAnyChildStateChanged = true;
		}
		!diffStatesOfChildren && (diffStatesOfChildren = [])
		diffStatesOfChildren.push(diffValue);
	}

	const diffState = didAnyChildStateChanged ? this.asJson(diffStatesOfChildren) : this.id;

	return diffState;
};
