import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.modelFor('results').filter(function(result){
      return result.last_name === params.last_name && result.first_name === params.first_name;
    });
  }
});
