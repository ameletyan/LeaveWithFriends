if(Meteor.isServer){
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