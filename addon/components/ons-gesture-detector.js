import Ember from 'ember';
import layout from '../templates/components/ons-gesture-detector';

const { Component, get, tryInvoke, guidFor, String: { w } } = Ember;

export const GESTURE_EVENTS = w(`
  drag dragleft dragright dragup dragdown hold release swipe swipeleft
  swiperight swipeup swipedown tap doubletap pinch pinchin pinchout touch
  transform rotate
`.trim());

export default Component.extend({
  layout,
  tagName: 'ons-gesture-detector',

  didInsertElement() {
    this._super(...arguments);
    let guid = guidFor(this);
    let eventList = GESTURE_EVENTS.map(name => `${name}.${guid}`).join(' ');
    this.$().on(eventList, evt => {
      let events = get(this, 'events');
      tryInvoke(events, evt.type, [evt]);
    });
  },

  willRemoveElement() {
    this._super(...arguments);
    this.$().off(`.${guidFor(this)}`);
  }
});
