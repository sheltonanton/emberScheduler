import DS from 'ember-data';

export default DS.RESTSerializer.extend({
    normalizeResponse(store, primaryModelClass, payload, id, requestType){
        console.log(payload);
        payload={secondaries:payload};
        console.log(primaryModelClass);
        return this._super(store,primaryModelClass, payload,id,requestType);
    }
});

