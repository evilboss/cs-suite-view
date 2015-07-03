/*****************************************************************************/
/* CameraChange: Event Handlers */
/*****************************************************************************/
Template.CameraChange.events({
    'click li .camera-location': function (e, t) {
        e.preventDefault();
        Session.set('cam', this.valueOf());
        console.log(this.valueOf());
        var result = Meteor.apply('changeLocation',[this.valueOf()], true,function(e,r){
            if(r){
                Session.set('callback',r);
            }

        });

    }

});

/*****************************************************************************/
/* CameraChange: Helpers */
/*****************************************************************************/
Template.CameraChange.helpers({
    'cameralist': function () {
        cameras = ['cctv', 'ctv-house', 'ctv-tech']
        return cameras;
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
