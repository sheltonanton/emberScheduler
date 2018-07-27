import Component from '@ember/component';
import templateCompiler from ''

export default Component.extend({
    action:"update",
    actions:{
        confirm:function(){
            let mode = this.get("model");
            mode.formData.group = "Nothing";
            this.sendAction("action");
            this.set("template",Ember.Handlebars.compile("<button>New Button</button>"));
            this.rerender();
        }
    }
});
