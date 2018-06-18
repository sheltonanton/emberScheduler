import Route from '@ember/routing/route';
import {hash} from 'rsvp';
import cardModel from '../model-data/model-a';

export default Route.extend({
    model(){
        // this.get("store").pushPayload(cardModel);
        let ar = this.get("store").findRecord("dashboard",1);
        return ar;
    },
    actions:{
        addCard(){
            if(this.controller.get("card_id")){}else{this.controller.set("card_id",0);}
            this.controller.incrementProperty("card_id");
            let value1 = this.controller.get("value1");
            let value2 = this.controller.get("value2");
            let card_mid = "created"+this.controller.get("card_id");
            let card_model = {id: card_mid,name: value1,size: value2, dashBoardId: 1};
            //creating the record   //DOM is not being updated //used for creating the record, check if it can be accessed by store
            //and 
            //adding the created record to the store
            
            //only creating the record
            this.get("store").createRecord("card",card_model);
            //creating and updating into the primary model
            // this.get("store").peekRecord("dashboard",1).get("cards").addObject(this.get("store").createRecord("card",card_model));
            //pushing the record into the store //DOM is being updated
            card_model = {id: this.controller.get("card_id"),name: value1,size: value2, dashBoardId: 1};    
            this.get("store").pushPayload({cards:card_model});
        },
        findCard(){
            this.get("store").findAll("card");
        },
        findCreatedRecord(){
            let temp = this.get("store").peekRecord("card","created1");
            console.log(temp.get("name"));
            this.get("store").peekRecord("dashboard",1).get("cards").addObject(temp);
        },
        relateCreatedRecord(){
            let temp = this.get("store").peekRecord("card","created1");
            console.log(temp.get("name"));
            let ref = temp.belongsTo("dashBoardId");
            ref.load().then(function(value){
                console.log("Related: "+value);
            });
        },
        addCreatedRecord(){
            
        },
        deleteRecord(param){
            this.get("store").deleteRecord(this.get("store").peekRecord("card",param));
        },
        permanentDelete(param){
            this.get("store").peekRecord("card",param).save().then(function(response){
                console.log("Resolved");
            },function(reason){
                console.log(reason);
            }).catch(function(error){
                console.log("Exception caught");
                console.log(error);
            });
        },
        refClicked(){
            console.log("Reference Clicked");
        },
        destroyAction(param){
            this.get("store").peekRecord("card",param).destroyRecord();
        },
        persistDashboard(){
            this.get("store").peekRecord("dashboard",1).save();
        }
    }
});
