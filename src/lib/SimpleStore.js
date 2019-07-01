import StoreID from './StoreID';
import {isChanged} from "./helpers";

function didChange(currentValue, value, compareFn){
  if(compareFn){
    return compareFn(value, currentValue);
  }else{
    return isChanged(value, currentValue);
  }
}

/*
* 1. getValue, return the wrapped value inside this object
* 3. getState does exactly what getValue does (duplication)
* 4. setState set the value if there is a change to oldValue and inAddition triggers all dataChange listeners
* 5. getDiff return the value in JSON Strucuture with metadata Information about this object*/
export default class SimpleStore extends StoreID{
  constructor(value, displayName, objectName, comparer, classDefName){
    super(objectName);
    //initial value can't be undefined, it has to be null or given value
    this._value = value === undefined ? null : value;
    this.displayName = displayName;
    this.classDefName = classDefName ? classDefName : 'SimpleStore';
    this.comparer = comparer;

    this.asJson = this.asJson.bind(this);
  }

  asJson(){
    const json = super.asJson();
    json['classDefName'] =  this.classDefName;
    json['displayName'] = this.displayName;
    json['value'] = this.getValue();
    return json;
  };
}


SimpleStore.prototype.getValue = function(){
  return this._value;
};


SimpleStore.prototype.getState = function(){
  return this.asJson();
};

SimpleStore.prototype.setState = function(stateAsJson, callback){
  const newValue = stateAsJson.value;
  const didStateChanged = didChange(this._value, newValue, this.comparer);

  if(didStateChanged){
    const _setState = ()=>{
      this._value = newValue;
      this.trigger();
    };
    //set state function is the one which triggers all the listeners attached to it
    // if listeners execution are going on, this will execute once they are done
    // else set state is executed immediately
    this.executeWhenIdle(_setState, callback);
  }

  return Number(didStateChanged);
};

SimpleStore.prototype.shouldListenersExecute = function(oldValue, newValue){
  return true;
};

SimpleStore.prototype.applyDiff = function(stateAsJson, callback){
  this.setState(stateAsJson, callback);
};


