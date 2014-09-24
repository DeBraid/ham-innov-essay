/* ---------------------------------------------------- +/

## Main ##

/+ ---------------------------------------------------- */

Meteor.methods({
  goToByScroll: function ( id ) {
    
    $('html,body').animate({
        scrollTop: $(id).offset().top
      },'slow');

  }
});

Template.homepage.events({
  'click #leftCol a': function ( e , t ) {
    e.preventDefault();     
    
    var targetDiv = $(e.target).attr('href'),
        offset = 250;

    window.location.hash = targetDiv;

    $($(e.target).attr('href'))[0].scrollIntoView();
    scrollBy(500, offset);

    Meteor.call('goToByScroll', targetDiv);
  }
});