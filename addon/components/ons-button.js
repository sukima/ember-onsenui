import Ember from 'ember';
import layout from '../templates/components/ons-button';

const { Component, String: { w } } = Ember;

export default Component.extend({
  layout,
  tagName: 'ons-button',
  attributeBindings: w('modifier ripple disabled')
});
