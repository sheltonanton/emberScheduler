import Route from '@ember/routing/route';
import formHandler from '../mixins/formHandler';
import handlingData from '../model-data/formData';

export default Route.extend(formHandler,{
    model(){
        let model={};
        model= handlingData;
        console.log(model);
        return model;
    }
});
