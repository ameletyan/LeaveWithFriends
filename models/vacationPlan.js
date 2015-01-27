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
    },
    events: {
        type: Object,
        label: 'Events',
        optional: true
    }
});

VacationPlans.attachSchema(Schemas.VacationPlan);

// A Tutorial class that takes a document in its constructor
VacationPlan = function (id, name, startDate, endDate, location, users, events) {
    this._id = id;
    this._name = name;
    this._startDate = startDate;
    this._endDate = endDate;
    this._location = location;
    this._users = users;
    this._events = events;
};
 
VacationPlan.prototype = {
    get id() {
        return this._id;
    },
    get startDate() {
        return this._startDate;
    },
    get endDate() {
        return this._endDate;
    },
    get name() {
        return this._name;
    },
    get location(){
        return this._location;
    },
    get users(){
        return this._users;
    },
    get events(){
        return this._events;
    },
    save: function(){
        // remember the context since in callback it is changed
        var me = this;
        var vp = {
            name: this.name, 
            startDate: this.startDate,
            endDate: this.endDate,
            users: this.users,
            location: this.location,
            users: this.users,
            events: this.events
        };
        
        VacationPlans.insert(vp, function(error, result) {
            me._id = result;
        });
    }
};