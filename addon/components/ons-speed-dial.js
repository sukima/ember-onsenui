import Ember from 'ember';
import layout from '../templates/components/ons-speed-dial';

const {
  Component, get, set, computed, observer, guidFor
} = Ember;

export default Component.extend({
  layout,
  tagName: '',
  visible: true,
  isOpen: false,

  speedDialId: computed({
    get() {
      return `${guidFor(this)}-ons-speed-dial`;
    }
  }),

  speedDialElement: computed({
    get() {
      let elementId = get(this, 'speedDialId');
      return Ember.$(`#${elementId}`).get(0);
    }
  }),

  updateElementVisibility: observer('visible', function () {
    let el = get(this, 'speedDialElement');
    let shouldBeVisible = get(this, 'visible');
    let isCurrentlyVisible = get(el, 'visible');
    if (shouldBeVisible && !isCurrentlyVisible) {
      el.show();
    } else if (!shouldBeVisible && isCurrentlyVisible) {
      el.hide();
    }
  }),

  updateMenuVisibility: observer('isOpen', function () {
    let el = get(this, 'speedDialElement');
    let shouldBeOpen = get(this, 'isOpen');
    let isCurrentlyOpen = el.isOpen();
    if (shouldBeOpen && !isCurrentlyOpen) {
      el.showItems();
    } else if (!shouldBeOpen && isCurrentlyOpen) {
      el.hideItems();
    }
  }),

  didInsertElement() {
    this._super(...arguments);
    let $el = Ember.$(get(this, 'speedDialElement'));
    let guid = guidFor(this);
    $el.on(`open.${guid}`, () => {
      set(this, 'isOpen', true);
    });
    $el.on(`close.${guid}`, () => {
      set(this, 'isOpen', false);
    });
    this.updateMenuVisibility();
    this.updateElementVisibility();
  },

  willRemoveElement() {
    this._super(...arguments);
    let $el = Ember.$(get(this, 'speedDialElement'));
    let guid = guidFor(this);
    $el.off(`.${guid}`);
  }
});
