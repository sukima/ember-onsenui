import Ember from 'ember';
import ons from 'ember-onsenui';

const { Controller } = Ember;

export default Controller.extend({
  actions: {
    alertMe() {
      ons.notification.alert('It works!');
    }
  }
});
