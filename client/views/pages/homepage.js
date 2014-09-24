Template.homepage.helpers({
  section: function () {
    return [
      { title : 'Test Title', id : 'bazington', paragraphs: [{paragraph: "p1 sample text"}, {paragraph: "p2 another text"}, {paragraph: "more p3 action"}] },
      { title : 'Test Title', id : 'bazington', paragraphs: [{paragraph: "p1 sample text"}, {paragraph: "p2 another text"}, {paragraph: "more p3 action"}] },
      { title : 'Test Title', id : 'bazington', paragraphs: [{paragraph: "p1 sample text"}, {paragraph: "p2 another text"}, {paragraph: "more p3 action"}] }
      
    ]
  }
});

Template.homepage.rendered = function () {
  /* activate sidebar */
  $('#sidebar').affix({
    offset: {
      top: 435
    }
  });

  /* activate scrollspy menu */
  var $body   = $(document.body);
  var navHeight = $('.navbar').outerHeight(true)*1.5;
  

  console.log('navHeight: -- ', navHeight);

  $body.scrollspy({
    target: '#leftCol',
    offset: navHeight
  });

};