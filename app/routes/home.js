import Route from '@ember/routing/route';
import {hash} from 'rsvp';

export default Route.extend({
    model(){
        return this.store.findAll("schedule");
    },
    actions:{
        editModel(model){
            this.replaceWith("/register?id="+model);
        },
        updateRecords(){
            let model = this.store.peekAll("schedule");
            model.forEach(function(item,index,enumerable){
                $.ajax({
                    url:"http://localhost:3000/schedules/"+item.id,
                    type:"PUT",
                    data:item.toJSON()
                });
            });
            model = this.store.peekAll("detail");
            model.forEach(function(item,index,enumerable){
                $.ajax({
                    url:"http://localhost:3000/details/"+item.id,
                    type:"PUT",
                    data:item.toJSON()
                })
            });
        }
    }
});