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
	constructor( value, displayName, objectName, listenersExecutedNotifier, frameListenersExecutedNotifier){
		super(objectName,listenersExecutedNotifier, frameListenersExecutedNotifier);
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

Store.prototype.setState = function(newValue, trigger = true){

	const _setState = ()=>{
		const valueChange = isChanged(this.value, newValue);
		if (valueChange) {
			this.value = newValue;
			trigger && this.triggerListeners();
		}
	};
	//set state function is the one which triggers all the listeners attached to it
	// if listeners execution are going on, this will execute once they are done
	// else set state is executed immediately
	this.executeTriggerer(this,_setState);
};


Store.prototype.getDiff = function(value){
	const currentValue = this.getState();
	const comparisonValue =  compare(value, currentValue);
	const prevState = this.asJson(value);

	let currentState;
	if(comparisonValue === 0){
		// when no change returns the ID
		currentState = this.id;
	} else {
		// when there is change returns a JSOn object
		// object which as Class Name as `store`
		// value
		currentState = this.asJson(currentValue);
	}

	return {
		prev: prevState,
		current: currentState
	};
};

