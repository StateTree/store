import {getDiffCount} from '@statetree/diff';
import SimpleStore from './SimpleStore';

export default class StoreObject extends SimpleStore{
	constructor(state,displayName, objectName, classDefName){
		classDefName = classDefName ? classDefName : 'StoreObject';
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

StoreObject.prototype.getState = function(onlyValue){
	return this.getChildren(true, onlyValue);
};

StoreObject.prototype.setState = function(newValue, callback, diffCount){
	this.triggerWaitCount = (diffCount === undefined) ? getDiffCount(this.children,newValue): diffCount;
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


StoreObject.prototype.getChildIds = function(asCopy){
	const ids =  Object.keys(this.children);
	return asCopy ? ids.slice() : ids;
};

StoreObject.prototype.getChildren = function(asJson, onlyValue){
	const children = {};
	const childKeys = Object.keys(this.children);
	for(let i = 0; i < childKeys.length; i++){
		const childKey = childKeys[i];
		const storeObject = this.children[childKey];
		children[childKey] = (asJson ? storeObject.asJson(undefined, undefined, onlyValue):storeObject);
	}
	return children;
};


//to-do think of ui point of view and the change the way they are instantiated here
StoreObject.prototype.requestStore = function(id, state, classDefName, displayName, newStoreCallback){
	let storeObject = this.children[id];
	if(storeObject){
		return storeObject.setState(state);
	}

	let returnValue;
	const _requestStore = ()=>{
		if(classDefName === 'SimpleStore'){
			storeObject = new SimpleStore(state, displayName, id, null, classDefName);
		} else if(classDefName === 'StoreObject') {
			storeObject = new StoreObject(state, displayName, id, classDefName);
		}

		storeObject.setConnector(this.trigger.bind(this));
		//storeObject.linkParentId(this.id);
		const newStoreObjId = storeObject.id;
		this.children[newStoreObjId] = storeObject;
		returnValue = storeObject;
		this.trigger();
	};

	this.executeWhenIdle(_requestStore, ()=>{
		newStoreCallback && newStoreCallback(returnValue);
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
		}

		this.executeWhenIdle(_removeAll)
	}
};


// when we call apply diff, connect to next set of functions are not called
StoreObject.prototype.applyDiff = function(value, callback, diffCount){
	this.unLinkConnector();
	this.setState(value,()=>{
		this.linkConnector();
		callback()
	}, diffCount);
};
