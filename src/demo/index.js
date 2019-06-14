import Store from './../lib';
import {StoreCollection} from './../lib';

const store = new Store(5,' Number');

store.addFunction(()=>{
	console.log("Immediate");
});

store.addFunction(()=>{
	console.log("Later");
}, true);

store.setState(7, ()=>{
	console.log("Set State Callbac k");
});

