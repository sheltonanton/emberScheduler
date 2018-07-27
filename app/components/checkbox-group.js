import Component from '@ember/component';

export default Component.extend({
    lists:[{
        name:"name1",
        checked:"false",
        visible:"false"
    },{
        name:"name2",
        checked:"false",
        visible:"false"
    },{
        name:"name3",
        checked:"false",
        visible:"false"
    }],
    value1:null,
    inputListener:function(){
        let v = this.get("value1");
        let arr = this.get("lists").map(this.get("mapList"),this);
        this.set("lists",arr);
        console.log(this.get("lists"));
    }.observes("value1"),
    mapList(vals){
        console.log(vals);
        let val = vals.name;
        if(val.includes(this.get("value1"))){
           Ember.set(vals,"visible",true);
        }else{
            Ember.set(vals,"visible",false);
        }
        return vals;
    }
});