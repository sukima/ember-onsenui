import Ember from 'ember';
import layout from '../templates/components/ons-back-button';

export default Ember.Component.extend({
  layout,
  tagName: 'ons-back-button',
  attributeBindings: ['modifier']
});
