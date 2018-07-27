import DS from 'ember-data';

export default DS.RESTAdapter.extend({
    // host:'https://my-json-server.typicode.com',
    // namespace: 'sheltonanton/rest'
    host:"http://localhost:3000",
    namespace: ""
    // headers:{
    //     apiKey: "AIzaSyBaauf-Xl12XYx9dOHdLgvwPT6eDWDFVg4",
    //     authDomain: "tutorial-9bd16.firebaseapp.com",
    //     databaseURL: "https://tutorial-9bd16.firebaseio.com",
    //     projectId: "tutorial-9bd16",
    //     storageBucket: "tutorial-9bd16.appspot.com",
    //     messagingSenderId: "160058072840"
    // }
});
//http://localhost:3000/schedule