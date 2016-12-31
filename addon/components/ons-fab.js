import Ember from 'ember';
import layout from '../templates/components/ons-fab';

const { Component, get, observer, String: { w } } = Ember;

export default Component.extend({
  layout,
  tagName: 'ons-fab',
  attributeBindings: w('modifier ripple position disabled'),
  visible: true,

  updateElementVisibility: observer('visible', function () {
    let el = get(this, 'element');
    let shouldBeVisible = get(this, 'visible');
    let isCurrentlyVisible = get(el, 'visible');
    if (shouldBeVisible && !isCurrentlyVisible) {
      el.show();
    } else if (!shouldBeVisible && isCurrentlyVisible) {
      el.hide();
    }
  }),

  didInsertElement() {
    this._super(...arguments);
    this.updateElementVisibility();
  }
});
