Meteor.publish('berichten', function(){
    return Berichten.find();
})
