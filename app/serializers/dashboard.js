import DS from 'ember-data';

export default DS.RESTSerializer.extend(DS.EmbeddedRecordsMixin,{
    attrs:{
        cards:{embedded:'always'}
    },
    normalizeResponse(store,primaryModelClass,payload,id,requestType){
        payload={dashboards:payload};
        let ar = this._super(store,primaryModelClass,payload,id,requestType);
        return ar;
    }
});