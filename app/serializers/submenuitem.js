import DS from 'ember-data';

export default DS.RESTSerializer.extend({
    normalizeResponse(store,modelClass,payload,id,requestType){
        payload={submenuitems:payload};
        return this._super(store,modelClass,payload,id,requestType);
    }
});
