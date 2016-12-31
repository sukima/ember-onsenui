import Ember from 'ember';
import ons from 'ember-onsenui';

const { Controller, inject: { service } } = Ember;

export default Controller.extend({
  menu: service(),

  fabIsVisible: true,

  actions: {
    showSuccessDialog() {
      ons.notification.alert('Success!');
    }
  }
});
