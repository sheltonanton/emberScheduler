import Component from '@ember/component';

export default Component.extend({
    actions:{
        buttonClicked:function(){
            this.sendAction("buttonClicked");
        }
    }
});
