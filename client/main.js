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
Meteor.subscribe('berichten');