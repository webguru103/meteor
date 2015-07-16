Meteor.startup(function () {

  Kantoren.remove();

  Kantoren.insert({
        naam : 'Hoofdkantoor'
    });

 });
