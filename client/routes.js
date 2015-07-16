Router.configure({
  // the default layout
  layoutTemplate: 'KantoorTemplate'
});

Router.route('/', function () {
  this.layout('KantoorTemplate');
  this.render('Kantoor');
});

Router.route('/agenda', function () {
  this.layout('AgendaTemplate');
  this.render('Agenda');
  this.render('AgendaFooter', {to: 'footer'});
});
