import DS from 'ember-data';

export default DS.RESTSerializer.extend({
    normalizeResponse(store, primaryModelClass, payload, id, requestType){
        console.log(payload);
        let varying = payload.varying;
        console.log(primaryModelClass);
        primaryModelClass.related = DS.belongsTo(varying);
        payload={primaries:payload};
        let ar =  this._super(store,primaryModelClass, payload,id,requestType);
        console.log(ar);
        return ar;
    }
});
