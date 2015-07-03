

HomeController = RouteController.extend({
  layoutTemplate: 'MasterLayout',
      //messages is name of collection on client side

  subscriptions: function() {


  },

  action: function() {
    this.render('Home');
  }
});
