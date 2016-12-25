import Ember from 'ember';
import layout from '../templates/components/ons-list';

export default Ember.Component.extend({
  layout,
  tagName: 'ons-list',
  attributeBindings: ['modifier']
});
