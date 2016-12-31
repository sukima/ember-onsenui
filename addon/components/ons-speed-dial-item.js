import Ember from 'ember';
import layout from '../templates/components/ons-speed-dial-item';

export default Ember.Component.extend({
  layout,
  tagName: 'ons-speed-dial-item',
  attributeBindings: ['modifier']
});
