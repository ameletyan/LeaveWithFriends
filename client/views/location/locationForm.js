var state = [{startDate: '', endDate: '', location: ''}];
Session.set('state', state);
Session.set('x', 0);
if(Meteor.isClient){
  Template.locationForm.helpers({
    state: function(){
      return _.map(Session.get('state'), function(value, index){
        return {location: value, key: index + 1}
      });
    },
    x: function(){
      return Session.get('x');
    }
  })
  Template.locationForm.events({
    "click .add": function (event) {
      event.preventDefault();
      console.log(event);
      var trip = {}
      // trip.startDate = event.currentTarget.form[0].value;
      // trip.endDate = event.currentTarget.form[1].value;
      // trip.location = event.currentTarget.form[2].value; 
      state.unshift(trip);

      Session.set('state', state);
      Session.set('x', Session.get('x') + 1);
    }
  });
}