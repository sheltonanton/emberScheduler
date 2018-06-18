import Route from '@ember/routing/route';
import EmberObject from '@ember/object';

export default Route.extend({
    routeModel:EmberObject.create(),
    queryParams:{
        id:{
            refreshModel:true
        }
    },
    model(params){
        console.log(params);
        if(params.id===undefined){
            console.log("params undefined");
        }else{
            console.log(params.id);
            return this.store.findRecord("schedule",params.id);
        }
     },
    //  afterModel(model,transition){
    //     if(model===undefined) return;
    //     model.eachAttribute(function(name,meta){
    //         this.routeModel.set(name,model.get(name));
    //     },this);
    //  },
     actions:{
         registerSchedule:function(){
            this.get('store').pushPayloads({
                schedules:[{
                    title:this.controller.get("value1"),
                    time:this.controller.get("value2"),
                    text:this.controller.get("value3"),
                    description: this.controller.get("value4")
                }]
            });
         },
         createSchedule:function(){
             console.log("Register route create");
             this.controller.set("display",true);
         },
         modifySchedule:function(){
            console.log("Register route modify");             
            this.controller.set("display",false);           
        },
        uploadData:function(param){
            let detail = param;
            let type = detail.type;
            delete detail.type;
            let pr = this.store.createRecord("detail",detail);
            let record=this.store.createRecord("schedule",{
                det:type,
                details:pr
            });
        }
     }
});
