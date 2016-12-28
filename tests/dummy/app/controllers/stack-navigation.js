import Ember from 'ember';

const {
  Controller, getOwner, computed,
  computed: { reads, equal },
  inject: { service }
} = Ember;

export default Controller.extend({
  menu: service(), 

  currentRouteName: reads('mainRoute.currentRouteName'),

  hideBackButton: equal('currentRouteName', 'stack-navigation.index'),

  mainRoute: computed({
    get() {
      return getOwner(this).lookup('router:main');
    }
  }),

  actions: {
    goBack() {
      window.history.back();
    }
  }
});
