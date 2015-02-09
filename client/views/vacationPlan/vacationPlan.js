Template.vacationPlan.helpers({
    properties: function () {
        Meteor.call('vacationPlanz', function(error, data) {
            Session.set('vps', data);
        });
        return Session.get('vps');
    }
});