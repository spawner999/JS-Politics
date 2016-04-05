import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    var url = 'http://congress.api.sunlightfoundation.com/committees?parent_committee_id=' + params.committee_id + '&apikey=120aae8128344cd997a334cf42aa9403';
var subsRequest = function(){
  return Ember.$.getJSON(url).then(function(responseJSON) {
    return responseJSON.results;
  });
};
    return Ember.RSVP.hash({
      committee: this.modelFor('search').filter(function(result){
        return result.committee_id === params.committee_id;
      }),
      subs: subsRequest()
    });
  }
});
