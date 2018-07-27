import DS from 'ember-data';

export default DS.RESTSerializer.extend(DS.EmbeddedRecordsMixin,{
    attrs:{
        embedded:"always"
    },
    normalizeResponse(store,modelClass,payload,id,requestType){
        payload={menuitems:payload};
        return this._super(store,modelClass,payload,id,requestType);
    }
});
