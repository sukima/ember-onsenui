import Ember from 'ember';
import layout from '../templates/components/ons-splitter-side';

const {
  Component, get, set, computed, observer, tryInvoke, assert, guidFor
} = Ember;

const COMPONENT_NAMES = {
  left: 'ons-splitter-side-left',
  right: 'ons-splitter-side-right'
};

// ons-splitter-side must have the `side` attribute set via the HTML and cannot
// be set via JavaScript. Since HTMLBars renders by setting DOMElements'
// attributes via JS the useuall attributeBindings will not work. Instead we
// have to manually use the `<ons-splitter-side>` webcomponent. This is why we
// have a whole component for each value of the `side` attribute.
export default Component.extend({
  layout,
  tagName: '',

  splitterSideId: computed({
    get() {
      return `${guidFor(this)}-splitter-side`;
    }
  }).readOnly(),

  splitterSideElement: computed({
    get() {
      let splitterSideId = get(this, 'splitterSideId');
      return Ember.$(`#${splitterSideId}`).get(0);
    }
  }).readOnly(),

  componentName: computed('side', {
    get() {
      let componentName = COMPONENT_NAMES[get(this, 'side') || 'left'];
      assert('side attribute must be "left" or "right"', componentName);
      return componentName;
    }
  }).readOnly(),

  openCloseOnDataChange: observer('isCollapsed', function () {
    let isCollapsed = get(this, 'isCollapsed');
    let el = get(this, 'splitterSideElement');
    if (isCollapsed) {
      return el.close().then(() => tryInvoke(this, 'closed'));
    } else {
      return el.open().then(() => tryInvoke(this, 'opened'));
    }
  }),

  didInsertElement() {
    this._super(...arguments);
    let el = get(this, 'splitterSideElement');
    Ember.$(el).on(`postopen.${guidFor(this)}`, () => {
      set(this, 'isCollapsed', false);
    });
    Ember.$(el).on(`postclose.${guidFor(this)}`, () => {
      set(this, 'isCollapsed', true);
    });
  },

  willRemoveElement() {
    this._super(...arguments);
    let el = get(this, 'splitterSideElement');
    Ember.$(el).off(`.${guidFor(this)}`);
  }
});
