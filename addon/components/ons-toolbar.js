import Ember from 'ember';
import layout from '../templates/components/ons-toolbar';

const { Component, String: { w } } = Ember;

export default Component.extend({
  layout,
  tagName: 'ons-toolbar',
  attributeBindings: w('inline modifier')
});
