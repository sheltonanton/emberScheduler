import Component from '@ember/component';

export default Component.extend({
    isExpanded:false,
    actions:{
        toggle(){
            this.toggleProperty("isExpanded");
        },
        updateDisplayField(){
            let v1 = this.get("schedulerStartTime");
            let arr1 = v1.split(":");
            let hhs = parseInt(arr1[0]);
            let mms = parseInt(arr1[1]);
            let v2 = this.get("timeInterval");
            let temp = parseInt(v2);
            let rhh,rmm,days;
            rmm = temp + mms;
            rhh = hhs + (parseInt(rmm/60));
            days = parseInt(rhh/24);
            rhh = rhh%24;
            rmm = rmm%60;
            if(v1.length==0||v2.length==0) {
                this.set("displayField","");
                return;
            }
            if(days==0){
                this.set("displayField",((rhh)+":"+(rmm)));
            }else{
                this.set("displayField",((rhh)+":"+(rmm))+" + "+days+" days");
            }
        }
    }
});
