import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('results', {path: '/results/:zip'}, function() {
    this.route('legislator', {path: '/legislator/:bioguide_id'});
  });
  this.route('search', {path: 'search/:query'},function(){
    this.route('committee', {path: '/committee/:committee_id'});    
  });
});

export default Router;
