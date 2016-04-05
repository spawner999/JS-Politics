import Ember from 'ember';

export function subcommittesYes(params) {
  var subs = params[0];

  if(subs.length > 0) {
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-fire"></span>');
  }
}
export default Ember.Helper.helper(subcommittesYes);
