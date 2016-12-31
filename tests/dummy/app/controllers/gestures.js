/* global randomColor */
import Ember from 'ember';
import { task, timeout } from 'ember-concurrency';
import { GESTURE_EVENTS } from 'ember-onsenui/components/ons-gesture-detector';

const {
  Controller, A, get, set, isNone,
  inject: { service },
  run: { bind },
  String: { htmlSafe }
} = Ember;

const RING_SIZE = 20;
const CONTRAST_THRESHOLD = 15;

let pillColors = new Map();

let randomColorGen = (function * () {
  const { abs } = Math;
  let usedColors = new Set();

  function isUniqueContrast([newRed, newGreen, newBlue]) {
    for (let [oldRed, oldGreen, oldBlue] of usedColors) {
      let diff = abs(newRed - oldRed) + abs(newGreen - oldGreen) + abs(newBlue - oldBlue);
      if (diff < CONTRAST_THRESHOLD) {
        return false;
      }
    }
    return true;
  }

  while (true) {
    let color;
    do { 
      color = randomColor({luminosity: 'light', format: 'rgbArray'});
    } while (!isUniqueContrast(color));
    usedColors.add(color);
    yield `rgb(${color.join()})`;
  }
}());

function colorFor(name) {
  let color = pillColors[name];
  if (isNone(color)) {
    color = pillColors[name] = randomColorGen.next().value;
  }
  return color;
}

function pill(name) {
  let style = htmlSafe(`background-color: ${colorFor(name)};`);
  return {name, style};
}

export default Controller.extend({
  menu: service(),

  clearBuffer: task(function * () {
    yield timeout(5000);
    let eventBuffer = get(this, 'eventBuffer');
    while (eventBuffer.length > 0) {
      eventBuffer.popObject();
      yield timeout(500);
    }
  }).restartable(),

  updateLast(eventName) {
    let eventBuffer = get(this, 'eventBuffer');
    eventBuffer.unshiftObject(pill(eventName));
    if (eventBuffer.length > RING_SIZE) {
      eventBuffer.popObject();
    }
    get(this, 'clearBuffer').perform();
  },

  init() {
    this._super(...arguments);
    let handlers = {};
    for (let eventName of GESTURE_EVENTS) {
      handlers[eventName] = bind(this, 'updateLast', eventName);
    }
    set(this, 'eventHandlers', handlers);
    set(this, 'eventBuffer', A());
  }
});
