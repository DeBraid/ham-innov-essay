Template.footer.helpers({
	isHomePage: function  () {
		return Session.get('currentRouteIsHome');
	}
});