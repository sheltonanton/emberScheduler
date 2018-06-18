import Component from '@ember/component';
import {computed} from '@ember/object';

export default Component.extend({
    actions:{
        createSchedule:function(){
            console.log("modify");
            this.sendAction('action');
        }
    },
    data:null,
    scheduleService:computed(function(){
        return Ember.getOwner(this).lookup("service:schedule-service");
    }),
    init(){
        this._super(...arguments);
        let service = this.get("scheduleService");
        console.log("init");
    },
    didReceiveAttrs:function(){
        this._super(...arguments);
        
        console.log("didReceiveAttrs");

    },
    willRender:function(){
        this._super(...arguments);
        
        console.log("willRender");

    },
    didInsertElement:function(){
        this._super(...arguments);
        
        console.log("didInsertElement");

    },
    didRender:function(){
        this._super(...arguments);
        
        console.log("didRender");

    },
    didUpdateAttrs:function(){
        this._super(...arguments);
        
        console.log("didUpdateAttrs");

    },
    willUpdate:function(){
        this._super(...arguments);
        
        console.log("willUpdate");

    },
    didUpdate:function(){
        this._super(...arguments);
        
        console.log("didUpdate");

    },
    willDestroyElement:function(){
        this._super(...arguments);
        
        console.log("willDestroyElement");

    },
    willClearRender:function(){
        this._super(...arguments);
        
        console.log("willClearRender");

    },
    didDestroyElement:function(){
        this._super(...arguments);
        
        console.log("didDestroyElement");

    }
    // scheduleService:Ember.computed(Ember.getOwner(this).lookup("service:schedule-service"),function(){
    //     console.log("Entered schedule service");
    // })

});
