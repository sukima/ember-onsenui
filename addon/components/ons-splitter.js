import Ember from 'ember';
import layout from '../templates/components/ons-splitter';

const { Component, get, K } = Ember;

export default Component.extend({
  layout,
  tagName: 'ons-splitter',

  didInsertElement() {
    this._super(...arguments);
    let el = get(this, 'element');
    el.onDeviceBackButton = get(this, 'onDeviceBackButton') || K;
  },

  willRemoveElement() {
    this._super(...arguments);
    let el = get(this, 'element');
    el.onDeviceBackButton = K;
  }
});
