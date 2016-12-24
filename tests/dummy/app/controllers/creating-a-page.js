import Ember from 'ember';
import ons from 'ember-onsenui';

const { Controller, inject: { service } } = Ember;

export default Controller.extend({
  menu: service(),

  demoTitle: 'My app',

  actions: {
    alertMe() {
      ons.notification.alert('It works!');
    }
  }
});
