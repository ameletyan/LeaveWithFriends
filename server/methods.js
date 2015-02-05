if(Meteor.isServer){
  Meteor.methods({
    saveVacationPlan: function(config){
      check(config, Object);
      console.log(config);
    }
  });
}