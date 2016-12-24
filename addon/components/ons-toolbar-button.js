import Ember from 'ember';
import layout from '../templates/components/ons-toolbar-button';

const { Component, String: { w } } = Ember;

export default Component.extend({
  layout,
  tagName: 'ons-toolbar-button',
  attributeBindings: w('modifier disabled')
});
