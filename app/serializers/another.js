import DS from 'ember-data';

export default DS.RESTSerializer.extend({
    normalizeResponse(store, primaryModelClass, payload, id, requestType){
        console.log(payload);
        payload={anothers:payload};
        return this._super(store,primaryModelClass, payload,id,requestType);
    }
});
