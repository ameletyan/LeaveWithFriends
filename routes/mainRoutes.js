// Home Route
Router.route('/', function () {
  this.render('home');
  SEO.set({ title: 'Home - ' + Meteor.App.NAME });
});

Router.route('/:_id', {
	name: 'vacationPlan',
	data: function () {
		return VacationPlans.findOne({_id: this.params._id});
	},
	subscriptions: function(){
		this.subscribe('vacationPlan', this.params._id)
	}	
})
