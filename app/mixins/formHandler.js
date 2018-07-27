import Ember from 'ember';

export default Ember.Mixin.create({
    obj:null,
    actions:{
        updateForm:function(){
            console.log("Form updated");
            this.set("obj",false);
            console.log(this.get("obj"));
        }
    }
})