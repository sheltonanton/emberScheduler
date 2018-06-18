import DS from 'ember-data';

export default DS.RESTAdapter.extend({
    // host:'https://my-json-server.typicode.com',
    // namespace: 'sheltonanton/rest'
    host:"http://localhost:3000",
    namespace: '',
    serialize(snapshot,options){
        console.log("Inside application adapter");
        console.log(snapshot);
        console.log(options);
        let ar = this._super(snapshot,options);
        console.log(ar);
        return ar;
    }
    // headers:{
    //     apiKey: "AIzaSyBaauf-Xl12XYx9dOHdLgvwPT6eDWDFVg4",
    //     authDomain: "tutorial-9bd16.firebaseapp.com",
    //     databaseURL: "https://tutorial-9bd16.firebaseio.com",
    //     projectId: "tutorial-9bd16",
    //     storageBucket: "tutorial-9bd16.appspot.com",
    //     messagingSenderId: "160058072840"
    // }
});
