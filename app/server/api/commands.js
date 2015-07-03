Meteor.publish("Commands", function () {
    return Commands.find();
});