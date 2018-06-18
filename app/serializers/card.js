import DS from 'ember-data';

export default DS.RESTSerializer.extend(DS.EmbeddedRecordsMixin,{
    attrs:{
        dashBoardId:{
            deserialize: 'records'
        }
    },
    normalizeResponse(store,primaryModelClass,payload,id,requestType){
        console.log("Inside normalizeResponse card.js");
        console.log("Payload: ");
        console.log(payload);
        if(payload.id){
            payload={cards:payload};
        }else{
            payload.id = 1003;
            payload = {cards:payload};
        }
        let ar = this._super(store,primaryModelClass,payload,id,requestType);
        return ar;
    },
    normalize(primaryModelClass, resourceHash) {
        console.log("Inside normalize card.js");
        return this._super(...arguments);
    }
});
