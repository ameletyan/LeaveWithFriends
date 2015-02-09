// Home Route
Router.route('/', function () {
  this.render('home');
  SEO.set({ title: 'Home - ' + Meteor.App.NAME });
});

Router.map(function(){
	this.route('home')
	this.route('vacationPlan', {
		path: '/:id',
		data: function(){
			var id = this.params.id;
			return VacationPlans.findOne(id);
		}
	});
});
