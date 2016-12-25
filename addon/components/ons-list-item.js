import Ember from 'ember';
import layout from '../templates/components/ons-list-item';

const { Component, String: { w } } = Ember;

export default Component.extend({
  layout,
  tagName: 'ons-list-item',
  attributeBindings: w(`
    modifier
    lockOnDrag:lock-on-drag
    tappable
    tapBackgroundColor:tap-background-color
  `.trim())
});
