import Ember from 'ember';
import layout from '../templates/components/ons-button';
import VirtualizedElement from '../-private/virtualized-element';
import DynamicAttributeBindings
  from '../-private/dynamic-attribute-bindings';

const { Component, String: { w } } = Ember;

export default Component.extend(
  VirtualizedElement, DynamicAttributeBindings, {
  layout,
  tagName: '',
  NON_ATTRIBUTE_BOUND_PROPS: w(`
    id
    tagName
    events
    modifier
    ripple
    disable
  `.trim())
});
