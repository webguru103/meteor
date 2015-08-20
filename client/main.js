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



Template.home.helpers({
    selectedKantoor: function() {
        return Kantoren.findOne({ _id: Session.get("selectedKantoor")});
    }
});

Template.berichtenOverzicht.helpers({
    alleBerichten: function(){ return Berichten.find()}
});


Template.wijzigkantoor.helpers({
  alleKantoren: function(){
     return Kantoren.find()
  }
});

Template.wijzigkantoor.events = {
    'change #kantoor': function(event) {
        Session.set("selectedKantoor", event.currentTarget.value);
    }
}


Meteor.subscribe('berichten');
Meteor.subscribe('kantoren');
