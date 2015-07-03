/*****************************************************************************/
/* CameraChange: Event Handlers */
/*****************************************************************************/

Meteor.subscribe("Commands");
Template.CameraChange.events({
    'click li .camera-location': function (e, t) {
        e.preventDefault();
        Session.set('cam', this.valueOf);
        console.log(this.valueOf());
    },
    'click #showSession': function (e) {
        e.preventDefault();
        Meteor.call('logCommand',function (result, error) {
            console.log(result);
        });
    }
});

/*****************************************************************************/
/* CameraChange: Helpers */
/*****************************************************************************/
Template.CameraChange.helpers({
    'cameralist': function () {
        cameras = ['cctv', 'ctv-afs', 'ctv-house', 'ctv-if', 'ctv-tech']
        return cameras;
    },
    'message': function () {
        console.log(Commands.findOne({}));
        return Commands.findOne({});
    }

});

/*****************************************************************************/
/* CameraChange: Lifecycle Hooks */
/*****************************************************************************/
Template.CameraChange.created = function () {

};

Template.CameraChange.rendered = function () {
    this.$(".dropdown-button").dropdown({
        belowOrigin: true // Displays dropdown below the button
    });
};

Template.CameraChange.destroyed = function () {
};
