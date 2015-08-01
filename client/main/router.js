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
        console.log('route:', route);

        if (route == 'homepage') {
            console.log('currentRouteIsHome true');
            return Session.set('currentRouteIsHome', true);
        } else {
            console.log('currentRouteIsHome false');
            return Session.set('currentRouteIsHome', false);
        }
    }
}

Router.onBeforeAction(filters.getCurrentRoute)