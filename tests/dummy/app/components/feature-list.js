import Ember from 'ember';

const { Component, get, isPresent } = Ember;

export default Component.extend({
  classNames: ['feature-list'],

  actions: {
    linkToRoute(routeName) {
      if (isPresent(routeName)) {
        get(this, 'linkToRoute')(routeName);
      }
    }
  }
});
