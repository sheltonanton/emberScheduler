import { JSONAPISerializer } from 'ember-cli-mirage';

export default JSONAPISerializer.extend({
    normalizeResponse(store,primaryModelClass,payload,id,requestType){
        console.log("Inside the mirage");
        console.log(payload);
        return this._super(store,primaryModelClass,payload,id,requestType);
    }
});
