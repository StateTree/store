import { compare} from 'diff';


export function isChanged(oldVal, newVal){
	const comparisonValue =  compare(oldVal, newVal);
	if(comparisonValue === 0) {
		return false;
	} else {
		return true;
	}
}


export function arrayToObject(array , idName){
	let object = null;
	if(array){
		object = {};
		let index, id, child;
		for(index = 0; index < array.length; index++){
			child = array[index];
			if(child){
				if(typeof child === 'string'){
					id = child;
				} else {
					id = child[idName];
				}
				object[id] = child;
			}
		}
	}
	return object;
}

export function combineArray(array1, array2, idName, shouldCombineFn){
	const array1AsObj = arrayToObject(array1, idName);

	let array2child;
	for(let i = 0; i < array2.length; i++){
		array2child = array2[i];
		if(shouldCombineFn(array1AsObj, array2child, idName)){
			array1.push(array2child)
		}
	}
	return array1;
}