import Ember from 'ember';

export default Ember.Component.extend({
  isSelected: false,
  actions: {
    showForm(){
      this.get('isSelected')? this.set('isSelected', false) : this.set('isSelected', true);
    },
    submitForm(){
      var params = {
        zip: this.get('zipcode')
      };
      this.sendAction('sendZip', params);
    }
  }
});
