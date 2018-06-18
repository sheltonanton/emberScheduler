export default function() {

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `/api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.3.x/shorthands/
  */
  this.namespace = "api";
  this.get("/schedules",function(){
    return {
      data:[{
        type:"schedules",
        id:1,
        attributes:{
          det:"shelton",
          title: "Scheduled card",
          name: "Card A",
          time: "3:30 AM",
          text: "You have an appoinment",
          description: "The schedule card for an appoinment"
        }
      }]
    }
  });
  // this.get("/schedules",function(){
  //   return {
  //     data:[{
  //       id: "10",
  //       type:"schedules",
  //       attributes: {
  //           title: "scheduledcard",
  //           name: "Card A",
  //           time: "3:30 AM",
  //           text: "You have an appoinment",
  //           description: "The schedule card for an appoinment"
  //     }
  //   },{
  //         id: "20",
  //         type: "schedules",
  //         attributes: {
  //           name: "Wake UP",
  //           title: "remaindercard",
  //           time: "5:50 AM",
  //           text: "Wake up you lazy",
  //           description: "The remainder card for an appoinment"
  //     }
  //   }]
  //   }
  // });
  // this.get("/schedules",function(){
  //   return {
  //         schedules:[
  //           {
  //               id:"10",
  //               name: "Card A",
  //               title: "Remainder Card",
  //               time: "5:50 AM",
  //               text: "Wake up you lazy",
  //               description: "The remainder card for an appoinment"
  //           },{
  //               id:"11",
  //               name: "Card B",
  //               title: "Scheduled Card",
  //               time: "7:00 pM",
  //               text: "You have an appoinment",
  //               description: "The scheduled card for an appoinment"
  //           }
  //         ]
  //   }
  // });
}
