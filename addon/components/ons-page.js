import Ember from 'ember';
import layout from '../templates/components/ons-page';

const { Component, get, K } = Ember;

export default Component.extend({
  layout,
  tagName: 'ons-page',
  attributeBindings: ['modifier'],

  didInsertElement() {
    this._super(...arguments);
    let el = get(this, 'element');
    el.onInfiniteScroll = get(this, 'onInfiniteScroll') || K;
    el.onDeviceBackButton = get(this, 'onDeviceBackButton') || K;
  },

  willRemoveElement() {
    this._super(...arguments);
    let el = get(this, 'element');
    el.onInfiniteScroll = K;
    el.onDeviceBackButton = K;
  }
});
