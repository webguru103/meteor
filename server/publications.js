Meteor.publish('berichten', function(){
    return Berichten.find();
})
Meteor.publish('kantoren', function() {
    return Kantoren.find();
})
