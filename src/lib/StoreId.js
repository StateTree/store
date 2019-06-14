import Functions from '@statetree/functions';

export default class StoreID extends Functions{
	constructor(id){
		super();
		if(id === undefined || id === null){
			this.id =  Math.random().toString(36).substr(2, 9);
		} else{
			this.id = id;
		}
		this.parentId = null;
		this.linkedIds = null;

		this.linkParentId = this.linkParentId.bind(this);
		this.unLinkParentId = this.unLinkParentId.bind(this);
		this.linkId = this.linkId.bind(this);
		this.unLinkId = this.unLinkId.bind(this);
		this.asJson = this.asJson.bind(this);
	}

	linkParentId(id){
		this.parentId = id;
	};

	unLinkParentId(){
		this.parentId = null;
	};

	linkId(id){
		if(!this.linkedIds){
			this.linkedIds = []
		}

		if(this.linkedIds.indexOf(id) > -1){
			this.linkedIds.push(id)
		}
	};


	unLinkId(id){

	};

	//todo: parentId: this.parentId, linkedIds: this.linkedIds
	asJson(){
		return {
			id: this.id
		};
	};
}





