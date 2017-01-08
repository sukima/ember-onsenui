import Ember from 'ember';
import layout from '../templates/components/ons-toolbar-button';
import EventsClickable from '../-private/events-clickable';

const { Component, String: { w } } = Ember;

export default Component.extend(EventsClickable, {
  layout,
  tagName: 'ons-toolbar-button',
  attributeBindings: w('modifier disabled')
});
