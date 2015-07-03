Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound'
});

Router.route('/', {
  name: 'home',
  controller: 'HomeController',
  action: 'action',
  where: 'client'
});

Router.route('/dashboard', {
  name: 'dashboard',
  controller: 'HomeController',
  action: 'dashboard',
  where: 'client'
});

Router.route('/items/new', {
  name: 'items.new'
});

Router.plugin('ensureSignedIn', {
  only: ['dashboard']
});


Router.route('camera', {
  name: 'camera',
  controller: 'CameraController',
  action: 'action',
  where: 'client'
});