Router.configure({
  // the default layout
  layoutTemplate: 'KantoorTemplate'
});

Router.route('/kantoor', function () {
  this.render('Kantoor');
});

Router.route('/', {
	template: 'home',
	onBeforeAction: function () {
		GoogleMaps.load();
		this.next();
	}
  }
);

Router.route('/wijzigkantoor', function () {
  this.render('wijzigkantoor');
});

Router.route('/detail/:_id', function () {
  this.render('detail');
});

Router.route('/agenda', {
    onAfterAction: function () {
      this.render('AgendaFooter', {to: 'footer'});
      this.next();
    }
  }
);
