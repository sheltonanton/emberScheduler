import Component from '@ember/component';

export default Component.extend({
    actions:{
        createSchedule:function(){
            console.log("modify inner");
            this.sendAction("action");
        }
    }
});
