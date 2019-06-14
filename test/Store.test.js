import {expect} from 'chai';
import Store from './../src/lib/Store'

let store;
describe ('API', ()=>{

	describe('shouldExecuteFunctions', ()=>{
		it('should return true as default', ()=>{
			store = new Store(5);
			const flag = store.shouldExecuteFunctions();
			expect(flag).equal(true);
		});
	});
	describe('getState', ()=>{
		it('should return current state', ()=>{
			store = new Store(5);
			const state = store.getState();
			expect(state).equal(5);
		});
		it('should return current value as null of there is no default value in constructor', ()=>{
			store = new Store();
			const state = store.getState();
			expect(state).equal(null);
		});
	});
	describe('asJson', ()=>{
		it('should return undefined values for value, classDefnames, displayName if flagged as delete', ()=>{
			store = new Store(5);
			const state = store.asJson(undefined, true);
			expect(state.classDefName).equal(undefined);
			expect(state.displayName).equal(undefined);
			expect(state.value).equal(undefined);
		});
		it('should return only value, if onlyValue flagged set as true', ()=>{
			store = new Store(5);
			const state = store.asJson(undefined, false, true);
			expect(state).equal(5);
		});
		it('should return as json Object for ', ()=>{
			store = new Store(5);
			const state = store.asJson();
			expect(state.classDefName).equal("Store");
			expect(state.displayName).equal(undefined);
			expect(state.value).equal(5);
		});
	});
	describe('setState', ()=>{
		it('should return 1 when state is changed', ()=>{
			store = new Store(5);
			const isStateChanged = store.setState(7);
			expect(isStateChanged).equal(1);
		});
		it('should return 0 when state is not changed', ()=>{
			store = new Store(5);
			const isStateChanged = store.setState(5);
			expect(isStateChanged).equal(0);
		});
	});
	describe('calculateDiff', ()=>{
		it('should use compare function if provided', (done)=>{
			store = new Store(5, "Variable", "x", function(value1, value2){
				expect(value1).equal(3);
				expect(value2).equal(5);
				return true;
			});
			const isChanged = store.calculateDiff(3, true);
			expect(isChanged).equal(true);
			done();
		});
		it('should return false when there is no difference, and when we enable onlyComparison', ()=>{
			store = new Store(5);
			const isChanged = store.calculateDiff(5, true);
			expect(isChanged).equal(false);
		});
		it('should return true when there is no difference, and when we enable onlyComparison', ()=>{
			store = new Store(5);
			const isChanged = store.calculateDiff(7, true);
			expect(isChanged).equal(true);
		});
		it('should return id as json there is no difference', ()=>{
			store = new Store(5);
			const id = store.id;
			let diffValue = store.calculateDiff(5);
			diffValue = JSON.stringify(diffValue);
			const expectedJson = JSON.stringify({
				forward:id,
				backward:id
			});
			expect(diffValue).equal(expectedJson);
		});
		it('should return current value as forward, comparer as backward value in json there is  difference', ()=>{
			store = new Store(5);
			const id = store.id;
			let diffValue = store.calculateDiff(3);
			diffValue = JSON.stringify(diffValue);
			const expectedJson = JSON.stringify({
				forward:{
					id:id,
					classDefName:"Store",
					value:5
				},
				backward:{
					id:id,
					classDefName:"Store",
					value:3
				}
			});
			expect(diffValue).equal(expectedJson);
		});
	});
	describe('getDiff', ()=>{
		it('should return id as json there is no difference', ()=>{
			store = new Store(5);
			const id = store.id;
			let diffValue = store.getDiff(5);
			diffValue = JSON.stringify(diffValue);
			const expectedJson = JSON.stringify({
				forward:id,
				backward:id
			});
			expect(diffValue).equal(expectedJson);
		});
		it('should return current value as forward, comparer as backward value in json there is  difference', ()=>{
			store = new Store(5);
			const id = store.id;
			let diffValue = store.calculateDiff(3);
			diffValue = JSON.stringify(diffValue);
			const expectedJson = JSON.stringify({
				forward:{
					id:id,
					classDefName:"Store",
					value:5
				},
				backward:{
					id:id,
					classDefName:"Store",
					value:3
				}
			});
			expect(diffValue).equal(expectedJson);
		});
	});
	describe('applyDiff', ()=>{
		it('should change state', (done)=>{
			store = new Store(5);
			const diff = {
				id:"id",
				classDefName:"Store",
				value:3
			}
			expect(store.getState()).equal(5)
			const isStateChanged = store.applyDiff(diff,()=>{
				expect(store.getState()).equal(3)
				done();
			});
		});
		it('should throw error when we send non diff object', (done)=>{
			store = new Store(5);
			expect(store.getState()).equal(5)
			try {
				store.applyDiff(3);
			} catch(error){
				expect(error.message).equal("Diff needs to have classDefName and value properties");
				done();
			}
		});

	});
});