import Ember from 'ember';

export default Ember.Component.extend({
  isSelected: false,
  actions: {
    showForm(){
      this.get('isSelected')? this.set('isSelected', false) : this.set('isSelected', true);
    },
    submitForm(){
      var params = {
        query: this.get('query')
      };
      this.sendAction('sendCommittee', params);
    }
  }
});
