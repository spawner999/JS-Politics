import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('results', {path: '/results/:zip'}, function() {
    this.route('legislator', {path: '/legislator/:last_name/:first_name'});
  });
});

export default Router;
