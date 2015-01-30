Template.home.helpers({
  cities: function(query, callback){
    $.getJSON('http://gd.geobytes.com/GetCityDetails?callback=?&fqcn=' + query, 
      function(data){
        console.log(data);
    });
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
    Router.go('vacationPlan');
  }
});

Template.home.rendered = function () {
  $('#inputStart').datepicker({
      clearBtn: true,
      todayHighlight: true
  });
  Meteor.typeahead.inject();
};
