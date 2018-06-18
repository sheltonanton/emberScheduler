import Component from '@ember/component';
import {computed} from "@ember/object";


export default Component.extend({
    // scheduleService: inject.service("scheduleService"), //need to clarify
    scheduleService : Ember.computed(function(){
        return Ember.getOwner(this).lookup("service:schedule-service");
    }),
    actions:{
        uploadData: function(){
            let service = this.get("scheduleService");
            //uploading into the service for modifying the data
            service.name = this.get("value1");
            service.type = this.get("value2");
            service.time = this.get("value3");
            service.text = this.get("value4");
            service.description = this.get("value5");
            //storing in the store
            //creating the detail
            let detail = {
                    type:this.get("value2"),
                    name:this.get("value1"),
                    time:this.get("value3"),
                    text: this.get("value4"),
                    description: this.get("value5")
            }
            //creating the relationship and the primary data
            // .createRecord('schedule',{
            //         det: this.get("value2"),
            //         details: detail
            // });
            console.log(this.get("scheduleService"));
            this.sendAction("dataHandleAction",detail);
        },
        modifySchedule:function(){
            console.log("create");
            this.sendAction('action');
        }
    }
});
