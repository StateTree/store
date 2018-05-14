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

function calculateDiff(value, onlyComparison = false){
	const currentValue = this._value;
	let changed = false;
	if(this.comparer){
		changed = this.comparer(value, currentValue);
	}else{
		changed = isChanged(value, currentValue);
	}
	Store.stackDebug && console.log("Store: getDiff: ", value, currentValue , this);
	if(onlyComparison){
		return changed;
	}

	return changed ? this.asJson(currentValue) : this.id;
}


/*
* 1. getValue, return the wrapped value inside this object
* 2. setValue sets the value(probably shouldn't be exposed)
* 3. getState does exactly what getValue does (duplication)
* 4. setState set the value if there is a change to oldValue and inAddition triggers all dataChange listeners
* 5. getDiff return the value in JSON Strucuture with metadata Information about this object*/
export default class Store extends StoreID{
	constructor(value, displayName, objectName, comparer){
		super(objectName);
		this.diff = calculateDiff(value);
		//initial value can't be undefined, it has to be null or given value
		this._value = value === undefined ? null : value;
		this.displayName = displayName;
		this.comparer = comparer;

		this.asJson = this.asJson.bind(this);
	}

	asJson(value){
		value = value === undefined ? this.getState() : value;
		const json = super.asJson();
		json['classDefName'] = this.constructor.name;
		json['displayName'] = this.displayName;
		json['value'] = value;
		return json;
	};
}

Store.prototype.setValue = function(newValue){
	this._value = newValue;
};


Store.prototype.getState = function(){
	return this._value;
};

Store.prototype.setState = function(newValue, callback){
	const didStateChanged = calculateDiff.call(this,newValue, true);
	const _setState = ()=>{
		this.setValue(newValue);
		this.triggerListeners();
	};

	if(didStateChanged){
		//set state function is the one which triggers all the listeners attached to it
		// if listeners execution are going on, this will execute once they are done
		// else set state is executed immediately
		this.executeTriggerer(this,_setState, ()=>{
			Store.stackDebug && console.log("Store: _setStateCallback: " , this);
			callback && callback();
		});
	}

	return Number(didStateChanged);
};

Store.prototype.shouldListenersExecute = function(oldValue, newValue){
	return true;
};

// Diff returns the Diff Value as JSON
Store.prototype.getDiff = function(value){
	return calculateDiff.call(this,value)
};

Store.prototype.applyDiff = function(stateAsJson, callback){
	Store.stackDebug && console.log("Store: applyDiff: ", stateAsJson , this);
	if(typeof stateAsJson !== 'string'){
		this.setState(stateAsJson.value, callback);
	}
};

Store.stackDebug = false;

