import Ember from 'ember';
import layout from '../templates/components/ons-list-item';
import EventsClickable from '../-private/events-clickable';

const { Component, String: { w } } = Ember;

export default Component.extend(EventsClickable, {
  layout,
  tagName: 'ons-list-item',
  attributeBindings: w(`
    modifier
    lockOnDrag:lock-on-drag
    tappable
    tapBackgroundColor:tap-background-color
  `.trim())
});
