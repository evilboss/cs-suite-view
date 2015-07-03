/**
 * Created by gilbertor on 6/30/15.
 */
if (Meteor.isServer) {
    Meteor.methods({
        folder: function () {
            this.unblock();
            result = HTTP.call("GET", "http://toolbox.cloudstaff.com/~ctv-tech/crk04-ctv-003/20150624/list.txt");
            return result;

        },
        logCommand:function(){
            Commands.insert({data:'aw'});
            return Commands.find().fetch();
        }
    });
}
