import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    var url = 'http://congress.api.sunlightfoundation.com/legislators/locate?&apikey=120aae8128344cd997a334cf42aa9403&zip=' + params.zip;
    return Ember.$.getJSON(url).then(function(responseJSON) {
      return responseJSON.results;
    });
  }
});
