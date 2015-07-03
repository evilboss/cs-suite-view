Template.MasterLayout.helpers({});

Template.MasterLayout.events({
    'click [data-action=logout]': function (event) {
        event.preventDefault();
        AccountsTemplates.logout();
    }

});
Template.MasterLayout.rendered = function () {
    this.$(".dropdown-button").dropdown({
        belowOrigin: true // Displays dropdown below the button
    });
    this.$(".button-collapse").sideNav();

};

Meteor.startup(function () {
    AutoForm.setDefaultTemplate('materialize');


});
