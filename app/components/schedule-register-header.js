import Component from '@ember/component';
import {computed} from '@ember/object';

export default Component.extend({
    display:true,
    actions:{
        createSchedule:function(){
            this.sendAction('create');
        },
        modifySchedule:function(){
            this.sendAction('modify');
        }
    },
    isCreate:computed("display",function(){
        return this.get("display");
    }),
    isModify:computed("display",function(){
        return !(this.get("display"));
    })
});
