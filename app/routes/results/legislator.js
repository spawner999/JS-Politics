import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    var committeeUrl = 'http://congress.api.sunlightfoundation.com/committees?&apikey=120aae8128344cd997a334cf42aa9403&member_ids=' + params.bioguide_id;
    var billUrl = 'http://congress.api.sunlightfoundation.com/bills?&apikey=120aae8128344cd997a334cf42aa9403&sponsor_id=' + params.bioguide_id;
    var committeeRequest = function(){
      return Ember.$.getJSON(committeeUrl).then(function(responseJSON) {
        return responseJSON.results;
      });
    };
    var billRequest = function(){
      return Ember.$.getJSON(billUrl).then(function(responseJSON) {
        return responseJSON.results;
      });
    };
    return Ember.RSVP.hash({
      legislator: this.modelFor('results').filter(function(result){
        return result.bioguide_id === params.bioguide_id;
      }),
      committees: committeeRequest(),
      bills: billRequest()
    });
}
});
