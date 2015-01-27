VacationPlans = new Mongo.Collection("vacationPlans");


var Schemas = {};

Schemas.VacationPlan = new SimpleSchema({
    name:{
        type: String,
        label: 'Name of Vacation'
    },
    startDate: {
        type: Date,
        label: 'Start Date'
    },
    endDate: {
        type: Date,
        label: 'End Date'
    },
    location: {
        type: Object,
        label: 'Location of the vacation',
        optional: true
    },
    users: {
        type: [String],
        label: 'Users',
        optional: true
    }
});

VacationPlans.attachSchema(Schemas.VacationPlan);