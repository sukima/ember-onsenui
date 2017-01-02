import Ember from 'ember';
import layout from '../templates/components/ons-list-header';

export default Ember.Component.extend({
  layout,
  tagName: 'ons-list-header',
  attributeBindings: ['modifier']
});
