VacationPlans = new Mongo.Collection("vacationPlans");

var Schemas = {};

Schemas.VacationPlan = new SimpleSchema({
    name:{
        type: String,
        label: 'Name of Vacation',
        optional: true
    },
    startDate: {
        type: Date,
        label: 'Start Date',
        optional: true
    },
    endDate: {
        type: Date,
        label: 'End Date',
        optional: true
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
VacationPlan = function (config) {
    this._id = config.id;
    this._name = config.name;
    this._startDate = config.startDate || undefined;
    this._endDate = config.endDate || undefined; 
    this._location = config.location || {};
    this._users = config.users;
    this._events = config.events;
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
    save: function(callback){
        // remember the context since in callback it is changed
        var me = this;
        var vp = {
            name: this.name, 
            startDate: this.startDate,
            endDate: this.endDate,
            location: this.location,
            users: this.users,
            events: this.events
        };

        VacationPlans.insert(vp, function(error, result) {
            me._id = result;
            callback(result);
        });
    }
};