Template.postSubmit.events({
    'submit form': function(event) {
        event.defaultPrevented;
        var bericht = {
            gebruiker: $(event.target).find('[name=gebruiker]').val(),
            bericht: $(event.target).find('[name=bericht]').val()
        }
        Berichten.insert(bericht);
    }
});



Template.berichtenOverzicht.helpers({
    alleBerichten: function(){return Berichten.find()}
});


Template.Kantoor.helpers({
  alleKantoren: function(){
     return Kantoren.find()
  }
});



Meteor.subscribe('berichten');
Meteor.subscribe('kantoren');
