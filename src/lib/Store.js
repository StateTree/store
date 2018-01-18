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
	constructor( value, displayName, objectName){
		super(objectName);
		this.displayName = displayName;
		this.value = value;
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

Store.prototype.setState = function(newValue, callback, trigger = true){

	const _setState = ()=>{
		const valueChange = isChanged(this.value, newValue);
		if (valueChange) {
			const shouldChange = this.shouldChangeValue();
			if(shouldChange){
				this.valueWillChange();
				this.setValue(newValue);
				trigger && this.triggerListeners();
			}
		}
	};

	//set state function is the one which triggers all the listeners attached to it
	// if listeners execution are going on, this will execute once they are done
	// else set state is executed immediately
	this.executeTriggerer(this,_setState, ()=>{
		this.valueDidChange();
		callback && callback();
	});
};

Store.prototype.setValue = function(newValue){
	this.value = newValue;
};

Store.prototype.valueWillChange = function(){

};

Store.prototype.valueDidChange = function(){

};

Store.prototype.shouldChangeValue = function(oldValue, newValue){
	return true;
};



Store.prototype.getDiff = function(value){
	const currentValue = this.getState();
	const comparisonValue =  compare(value, currentValue);
	const prevState = this.asJson(value);

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
	this.setState(diff.value, callback);
};

