if(Meteor.isClient) {
  Template.home.helpers({
    cities: function(query, callback){
      
    },
    opened: function(e) {
      console.log("dropdown is opened");
    },
    closed: function(e) {
      console.log("dropdown is closed");
    },
    selected: function(e, suggestion, dataset) {
      console.log("selected: " + suggestion.id);
    },
    autocompleted: function(e, suggestion, dataset) {
      console.log("autocompleted: " + suggestion.id);
    }
  });

  Template.home.events({
    "submit form": function (event) {
      event.preventDefault();
      var config = {};
      config.startDate = new Date(event.target[0].value);
      config.endDate = new Date(event.target[1].value);
      config.location = event.target[2].value;
      Meteor.call('saveVacationPlan', config, function(error, data){
        Router.go('/' + data);
      });
    }
  });

  Template.home.rendered = function () {
    $('#inputStart').datepicker({
        clearBtn: true,
        todayHighlight: true
    });
    Meteor.typeahead.inject();
  };

}







