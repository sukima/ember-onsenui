import Ember from 'ember';
import ons from 'ember-onsenui';

const { Controller } = Ember;

export default Controller.extend({
  demoTitle: 'My app',

  actions: {
    alertMe() {
      ons.notification.alert('It works!');
    }
  }
});
