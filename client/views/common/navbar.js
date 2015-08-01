Template.navbar.events({
	'click #navbar-home-icon': function () {
		console.log('navbar clicky navbar-home-icon');
		Meteor.call('homeScrollUp');
	}
})