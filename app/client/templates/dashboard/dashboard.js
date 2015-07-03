Template.Dashboard.events({});

/*****************************************************************************/
/* Home: Helpers */
/*****************************************************************************/
Template.Dashboard.helpers({
    'today': function () {
        var now = moment().format('YYYYMMDD');
        return now;
    },
    'showCameras': function () {
        var now = moment().format('YYYYMMDD');
        if (Session.get('callback')) {
            showCameras = Session.get('callback').split('./');
            for (cams in showCameras) {
                if (showCameras[cams]) {
                    showCameras[cams] = Session.get('cam') + '/' + showCameras[cams].trim() + '/' + now;
                }
            }
            Session.set('pickupCams', showCameras);
            return showCameras;
        }
    },
    'getPhotoList': function () {
    },
    'getLatestPhoto': function () {
        return Session.get('pickupCams');
    }

});

/*****************************************************************************/
/* Home: Lifecycle Hooks */
/*****************************************************************************/
Template.Dashboard.created = function () {
};

Template.Dashboard.rendered = function () {
    /*Meteor.call('folder', function (error, results) {
     Session.set('listText', results.content)
     });*/

};

Template.Dashboard.destroyed = function () {
};
