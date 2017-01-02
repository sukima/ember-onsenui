import Ember from 'ember';
import ons from 'ember-onsenui';

const { Controller, get, inject: { service } } = Ember;

export default Controller.extend({
  menu: service(),

  actions: {
    loginExample() {
      let username = get(this, 'fakeUsername');
      let password = get(this, 'fakePassword');

      if (username === 'bob' && password === 'secret') {
        ons.notification.alert('Congratulations!');
      } else {
        ons.notification.alert('Incorrect username or password.');
      }
    }
  }
});
