import Component from '@ember/component';
import {computed} from '@ember/object';

export default Component.extend({
    displayEdit:false,
    actions:{
        editModel(id){
            this.sendAction("action",id);
        }
    },
    mouseEnter:function(){
        this.set("displayEdit",true);
    },
    mouseLeave:function(){
        this.set("displayEdit",false);
    }
});
