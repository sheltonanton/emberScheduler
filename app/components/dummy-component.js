import Component from '@ember/component';

export default Component.extend({
    actions:{
        sendForm:function(){
            console.log("Sent");
            let model = this.get("model");
            Ember.toggleProperty(model,"getString");
        }
    }
});
