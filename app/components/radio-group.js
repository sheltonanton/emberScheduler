import Component from '@ember/component';

export default Component.extend({
    actions:{
        radioClicked:function(id){
            this.sendAction("radioClicked",id);
        }
    }
});
