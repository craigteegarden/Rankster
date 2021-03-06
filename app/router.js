import Ember from 'ember';

var Router = Ember.Router.extend({
  location: RanksterENV.locationType
});

Router.map(function() {

  this.resource('players', { path: '/players' }, function() {
    this.route('edit');
    this.route('add');
  });

  this.route('match');

});

export default Router;
