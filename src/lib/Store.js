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
		this.value = value;
		this.comparer = comparer;
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
	return this.value;
};

Store.prototype.setState = function(newValue, callback, ){

	const _setState = ()=>{
		const toBeOldValue = this.value;
		let didStateChanged = false;
		if(this.comparer){
			didStateChanged = this.comparer(toBeOldValue, newValue);
		}else{
			didStateChanged = isChanged(toBeOldValue, newValue);
		}
		if (didStateChanged) {
			Store.stackDebug && console.log("Store: setState: ", toBeOldValue, newValue , this);
			this.value = newValue;
			const shouldTrigger = this.shouldListenersExecute(toBeOldValue, newValue);
			shouldTrigger && this.triggerListeners();
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


Store.prototype.shouldListenersExecute = function(oldValue, newValue){
	return true;
};



Store.prototype.getDiff = function(value){

	const currentValue = this.getState();
	const comparisonValue =  compare(value, currentValue);
	const prevState = this.asJson(value);
	Store.stackDebug && console.log("Store: getDiff: ", value, currentValue , this);
	let currentState;
	let isChanged;
	if(comparisonValue === 0){
		// when no change returns the ID
		currentState = this.id;
		isChanged = true;

	} else {
		// when there is change returns a JSOn object
		// object which as Class Name as `store`
		// value
		currentState = this.asJson(currentValue);
		isChanged = false;
	}

	return {
		prev: prevState,
		current: currentState,
		diff:isChanged
	};
};

Store.prototype.applyDiff = function(diff, callback){
	Store.stackDebug && console.log("Store: applyDiff: ", diff , this);
	this.setState(diff.value, callback);
};

Store.stackDebug = false;

