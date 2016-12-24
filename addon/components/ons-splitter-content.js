import Ember from 'ember';
import layout from '../templates/components/ons-splitter-content';

export default Ember.Component.extend({
  layout,
  tagName: 'ons-splitter-content',
  attributeBindings: ['page']
});
