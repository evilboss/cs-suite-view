/*****************************************************************************/
/* Home: Event Handlers */
/*****************************************************************************/
Template.Home.events({});

/*****************************************************************************/
/* Home: Helpers */
/*****************************************************************************/
Template.Home.helpers({
    listText : function(){
        if(Session.get('listText')){
            var lt = Session.get('listText').split('./');
            lt = lt.slice(1,6);
            return lt;
        }

    }
});

/*****************************************************************************/
/* Home: Lifecycle Hooks */
/*****************************************************************************/
Template.Home.created = function () {
};

Template.Home.rendered = function () {
    Meteor.call('folder', function (error, results) {
        Session.set('listText', results.content)
    });



};

Template.Home.destroyed = function () {
};
