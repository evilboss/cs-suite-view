/**
 * Created by gilbertor on 6/30/15.
 */

if (Meteor.isServer) {
    var future = Npm.require("fibers/future");
    Meteor.methods({
        folder: function () {
            this.unblock();
            result = HTTP.call("GET", "http://toolbox.cloudstaff.com/~ctv-tech/crk04-ctv-003/20150624/list.txt");
            return result;

        },
        changeLocation: function (locationName) {
            if(locationName==='cctv') locationName ='gilbertor';
            try{
                result = HTTP.call('GET', 'http://toolbox.cloudstaff.com/~'+locationName+'/list.txt');
                return result.content;
            }catch(e){
                console.log(e);
                return e.message;
            }
        }
    });
}
