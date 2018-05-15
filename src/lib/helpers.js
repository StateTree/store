import { compare} from 'diff';


export function isChanged(oldVal, newVal){
	const comparisonValue =  compare(oldVal, newVal);
	if(comparisonValue === 0) {
		return false;
	} else {
		return true;
	}
}