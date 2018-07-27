import Route from '@ember/routing/route';
import radioData from '../model-data/radioData';
import formHandler from '../mixins/formHandler';

export default Route.extend(formHandler,{
    model:function(){
          this.get("store").pushPayload(radioData);
          return this.get("store").peekRecord("radio-group","radio-group-1");
    },
    actions:{
        //for verifying whether the adapter namespace could be dynamically changed or not
        clickedButton:function(id){
            switch(id){
                case 1:{
                    let tem = this.get("store").adapterFor("total");
                    Ember.set(tem,"namespace","api/v1");
                    this.get("store").findAll("total");
                    break;
                }
                case 2:{
                    let tem = this.get("store").adapterFor("total");
                    Ember.set(tem,"namespace","api/v2");
                    this.get("store").findAll("total");
                    break;
                }
                case 3:{
                    let tem = this.get("store").adapterFor("total");
                    Ember.set(tem,"namespace","api/v3");
                    this.get("store").findAll("total");
                    break;
                }
            }
        }
    }
});
