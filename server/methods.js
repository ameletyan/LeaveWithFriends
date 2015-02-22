if(Meteor.isServer){
  Meteor.publish('vacationPlan', function(id){
    check(id, String);
    return VacationPlans.find({_id: id});
  });
  Meteor.methods({
    saveVacationPlan: function(config){
      check(config, Object);
      return VacationPlans.insert(config);
    },
    vacationPlanz : function(){
      return VacationPlans.find().fetch();
    }
  });
}