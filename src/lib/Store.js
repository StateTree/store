import { compare} from 'diff';
import StoreID from './StoreID';


function isChanged(oldVal, newVal){
	const comparisonValue =  compare(oldVal, newVal);
	if(comparisonValue === 0) {
		return false;
	} else {
		return true;
	}
}

export default class Store extends StoreID{
	constructor( value, displayName, objectName, comparer){
		super(objectName);
		this.displayName = displayName;
		//initial value can't be undefined, it has to be null or given value
		const val = value === undefined ? null : value;
		this.setValue(val, true);
		this.comparer = comparer;
		this.asJson = this.asJson.bind(this);
	}

	asJson(value){
		value = value === undefined ? this.getState() : value;
		const json = super.asJson();
		json['classDefName'] = 'Store';
		json['displayName'] = this.displayName;
		json['value'] = value;
		return json;
	};
}

Store.prototype.getState = function(){
	return this._value;
};

Store.prototype.setState = function(newValue, callback){

	const _setState = ()=>{
		const toBeOldValue = this._value;
		let didStateChanged = false;
		if(this.comparer){
			didStateChanged = this.comparer(toBeOldValue, newValue);
		}else{
			didStateChanged = isChanged(toBeOldValue, newValue);
		}
		if (didStateChanged) {
			Store.stackDebug && console.log("Store: setState: ", toBeOldValue, newValue , this);
			this.setValue(newValue);
			this.triggerListeners();
		}
	};

	//set state function is the one which triggers all the listeners attached to it
	// if listeners execution are going on, this will execute once they are done
	// else set state is executed immediately
	this.executeTriggerer(this,_setState, ()=>{
		Store.stackDebug && console.log("Store: _setStateCallback: " , this);
		callback && callback();
	});
};

Store.prototype.setValue = function(newValue, isInitializing = false){
	this._value = newValue;
};

Store.prototype.shouldListenersExecute = function(oldValue, newValue){
	return true;
};

Store.prototype.getDiff = function(value){

	const currentValue = this.getState();
	let isDifferent = false;
	if(this.comparer){
		isDifferent = this.comparer(value, currentValue);
	}else{
		isDifferent = isChanged(value, currentValue);
	}
	Store.stackDebug && console.log("Store: getDiff: ", value, currentValue , this);
	let currentDiff,prevDiff;
	if(isDifferent){
		// when there is change returns a JSOn object
		// object which as Class Name as `store`
		// value
		currentDiff = this.asJson(currentValue);
		prevDiff = undefined
	} else {
		// when no change returns the ID
		currentDiff = this.id;
		prevDiff = this.asJson(currentValue);
	}

	return {
		previous: prevDiff,
		value: currentDiff
	};
};

Store.prototype.applyDiff = function(stateAsJson, callback){
	Store.stackDebug && console.log("Store: applyDiff: ", stateAsJson , this);
	this.setState(stateAsJson.value, callback);
};

Store.stackDebug = false;

