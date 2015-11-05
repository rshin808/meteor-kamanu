/**
 * Configure Iron Router.
 * See: http://iron-meteor.github.io/iron-router/
 */


Router.configure({
  layoutTemplate: 'Layout',
  waitOn: function() { return Meteor.subscribe("Stuff"); },
  loadingTemplate: 'Loading'
});

Router.route('/', {
  name: 'Home'
});

Router.route('/Pueo', {
  name: 'Pueo'
});

Router.route('/About', {
  name: 'About'
});

Router.route('/Aukahi', {
  name: 'Aukahi'
});

Router.route('/Kamanu', {
  name: 'Kamanu'
});


Router.route('/add', {
  name: 'AddStuff'
});


Router.route('/stuff/:_id', {
  name: 'EditStuff',
  data: function() { return Stuff.findOne(this.params._id); }
});
