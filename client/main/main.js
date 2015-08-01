Meteor.methods({
    goToByScroll: function (id) {
        $('html,body').animate({
            scrollTop: $(id).offset().top
        }, 'slow');
    },
    homeScrollUp: function () {
        document.body.scrollTop = document.documentElement.scrollTop = 0;
    }
});

Template.homepage.events({
    'click #leftCol a': function (e, t) {
        e.preventDefault();
        var targetDiv = $(e.target).attr('href'),
            offset = 80;
        window.location.hash = targetDiv;

        scrollBy(500, offset);
        Meteor.call('goToByScroll', targetDiv);
    }
});