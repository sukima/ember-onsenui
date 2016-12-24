import Ember from 'ember';

const { Controller, set, inject: { service } } = Ember;

export default Controller.extend({
  menu: service(),

  actions: {
    transitionRoute(routeName) {
      set(this, 'menu.collapsed', true);
      this.transitionToRoute(routeName);
    }
  }
});
