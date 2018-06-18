import Component from '@ember/component';

export default Component.extend({
   actions:{
       modifySchedule:function(){
           console.log("create inner");
           this.sendAction("action");
       }
   }
});
