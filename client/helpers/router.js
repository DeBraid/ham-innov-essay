// Config

Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
});

// Routes

Router.map(function() {
  this.route('homepage', {
    path: '/'
  });

  this.route('contact');
});

// Filters

var filters = {
  myFilter: function () {
    // do something
  }
}

Router.onBeforeAction(filters.myFilter, {only: ['items']});