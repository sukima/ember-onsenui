import Ember from 'ember';

const { Controller, inject: { service } } = Ember;

export default Controller.extend({
  menu: service(),

  actions: {
    goBack() {
      window.history.back();
    }
  }
});
