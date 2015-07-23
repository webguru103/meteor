Router.configure({
  // the default layout
  layoutTemplate: 'KantoorTemplate'
});

Router.route('/', function () {
  this.render('Kantoor');
});

Router.route('/agenda', {
    onAfterAction: function () {
      this.render('AgendaFooter', {to: 'footer'});
      this.next();
    }
  }
);
