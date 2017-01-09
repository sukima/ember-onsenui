import Ember from 'ember';
import ons from 'ember-onsenui';

const { Controller, get, computed, inject: { service } } = Ember;

export default Controller.extend({
  menu: service(),

  checkBoxList: computed('{appleBox,bananaBox}', {
    get() {
      return Ember.A([
        get(this, 'appleBox') ? 'Apple': null,
        get(this, 'bananaBox') ? 'Banana' : null
      ]).compact().join(', ');
    }
  }),

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
