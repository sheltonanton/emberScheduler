import Component from '@ember/component';

export default Component.extend({
    actions:{
        updateRecord(){
            console.log("Clicked");
            this.set("card","Card updated");
        }
    }
});
