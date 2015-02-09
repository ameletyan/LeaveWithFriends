if(Meteor.isServer){
  Meteor.methods({
    saveVacationPlan: function(config){
      check(config, Object);
      var vp = new VacationPlan(config);
      vp.save(function(id){
      });
    },
    vacationPlanz : function(){
    	return VacationPlans.find().fetch();
    }
  });
}