/**
 * Meteor.publish('items', function (param1, param2) {
 *  this.ready();
 * });
 */

    Meteor.publish( "messagesSub", function(){
        var self = this;
        self.added ( "messages", "madeUpId1", { m: "This is not from a database"} ); //messages is the collection that will be published to
        self.ready();
    });
