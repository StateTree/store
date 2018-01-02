import Store from './../lib';

const store = new Store(5,'Number 5');
store.addListener(window, ()=>{
	console.log("Immediate")
});

store.addListener(window, ()=>{
	console.log("Later")
}, true);

store.setState(7, ()=>{
	console.log("Set State Callback")
});

