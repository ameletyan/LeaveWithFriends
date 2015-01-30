
var Schemas = {};

Schemas.User = new SimpleSchema({
    username:{
        type: String,
        label: 'Name of User'
    },
    password: {
        type: String,
        label: 'Password'
    },
    emails: {
        type: [String],
        label: 'Array of the emails this user has.'
    },
    vacationPlans: {
        type: [String],
        label: 'Array of vacation plan references.'
    }
});

Meteor.users.attachSchema(Schemas.User);

User = function(options){ 
    this.username = options.username;
    this.password = options.password;
    this.emails = options.emails;
    this.vacationPlans = this.vacationPlans;
};

User.prototype = {
    save: function(){
        var user = {
            username: this.username,
            password: this.password,
            emails: this.emails,
            vacationPlans: this.vacationPlans
        };
        var me = this;
        Meteor.users.insert(user, function(error, result) {
            me._id = result;
        });
    }
}