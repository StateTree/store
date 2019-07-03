import SimpleStore from './SimpleStore';

export default class StoreObject extends SimpleStore{
	constructor(state,displayName, objectName, classDefName){
		classDefName = classDefName ? classDefName : 'StoreObject';
		super(null, displayName, objectName, null, classDefName);
		this.children = {};
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

StoreObject.prototype.getValue = function(){
	return this.getChildren(true);
};

StoreObject.prototype.getState = function(){
	return this.getChildren();
};

StoreObject.prototype.setState = function(stateAsJson, callback, diffCount){

	const _setState = ()=>{
		let changeCount = 0;
		const newValue = stateAsJson.value;
		const newKeys = Object.keys(newValue);
		for (let i = 0; i < newKeys.length; i++) {
			const newKey = newKeys[i];
			const newChildState = newValue[newKey];

			if (newChildState){
				if(newChildState === 'delete') { // deletion
					this.remove(newKey);
					changeCount = changeCount + 1;
				} else if (this.children[newKey]){ // update
					const existingStoreObj = this.children[newKey];
					changeCount = changeCount + existingStoreObj.setState(newChildState);
				} else { // addition
					changeCount = changeCount + 1;
					const {id, classDefName, value, displayName} = newChildState;
					this.requestStore(id, value, classDefName, displayName);
				}
			}
		}
		return changeCount
	};

	//set state function is the one which triggers all the listeners attached to it
	// if listeners execution are going on, this will execute once they are done
	// else set state is executed immediately
	this.executeAsyncWhenIdle(_setState).onDone((count)=>{
		this.triggerWaitCount = count;
		callback && callback();
	});
};


StoreObject.prototype.getChildren = function(onlyValue = false){
	const children = {};
	const childKeys = Object.keys(this.children);
	for(let i = 0; i < childKeys.length; i++){
		const childKey = childKeys[i];
		const storeObject = this.children[childKey];
		children[childKey] = onlyValue ? storeObject.getValue() : storeObject.getState();
	}
	return children;
};


//to-do think of ui point of view and the change the way they are instantiated here
StoreObject.prototype.requestStore = function(id, state, classDefName, displayName, newStoreCallback){
	let storeObject = this.children[id];
	if(storeObject){
		storeObject.setState({
			value:state,
			classDefName: classDefName,
			displayName: displayName,
			objectName: id
		});
		return storeObject;
	}

	const _requestStore = ()=>{
		if(classDefName === 'SimpleStore'){
			storeObject = new SimpleStore(state, displayName, id, null, classDefName);
		} else if(classDefName === 'StoreObject') {
			storeObject = new StoreObject(state, displayName, id, classDefName);
		}

		storeObject.setConnector(this.trigger.bind(this));
		const newStoreObjId = storeObject.id;
		this.children[newStoreObjId] = storeObject;
		this.trigger();
	};

	this.executeWhenIdle(_requestStore, ()=>{
		newStoreCallback && newStoreCallback(storeObject);
	});
};

StoreObject.prototype.remove = function(id,trigger = true){
	const storeObject = this.children[id];
	if(storeObject){
		const _remove = ()=>{
			storeObject.removeConnector();
			delete this.children[id];
			trigger && this.trigger();
		}

		if(!trigger){
			_remove.call(this);
		};

		this.executeWhenIdle(_remove)
	}

};

StoreObject.prototype.removeAll = function(){
	const childKeys = Object.keys(this.children);
	if(childKeys.length > 0){
		const _removeAll = ()=>{
			for(let i = 0; i < childKeys.length; i++){
				const childKey = childKeys[i];
				this.remove(childKey, false);
			}
			this.trigger();
		};

		this.executeWhenIdle(_removeAll)
	}
};


// when we call apply diff, connect to next set of functions are not called
StoreObject.prototype.applyDiff = function(stateAsJson, callback, diffCount){
	this.unLinkConnector();
	this.setState(stateAsJson,()=>{
		this.linkConnector();
		callback()
	}, diffCount);
};
