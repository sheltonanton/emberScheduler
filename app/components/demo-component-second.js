import Component from '@ember/component';

export default Component.extend({
    updateCard:Ember.computed("card",function(){
            console.log("Computed");
    })
});
