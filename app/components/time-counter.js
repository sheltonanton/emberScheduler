import Component from '@ember/component';

export default Component.extend({
    actions:{
        action:function(){
            this.sendAction("action");
        }
    }
});
