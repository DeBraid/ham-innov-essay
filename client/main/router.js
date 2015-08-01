Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
    notFoundTemplate: 'notFound',
});

Router.map(function () {
    this.route('homepage', {
        path: '/'
    });
    this.route('contact');
});

var filters = {
    getCurrentRoute: function getCurrentRoute () {
        var route = Router.current().route.name;
        var status = (route == 'homepage') ? true : false;
        return Session.set('currentRouteIsHome', status);
    }
}

Router.onBeforeAction(filters.getCurrentRoute);