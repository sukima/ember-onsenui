import Ember from 'ember';

const { Mixin, get, computed, guidFor } = Ember;

export default Mixin.create({
  id: computed({
    get() {
      return `${guidFor(this)}-virtualized-element`;
    }
  }),

  _element: computed({
    get() {
      return this.$element().get(0);
    }
  }).readOnly(),

  $element(selector = '') {
    return Ember.$(`#${get(this, 'id')} ${selector}`);
  },

  didInsertElement() {
    this._super(...arguments);
    let $el = this.$element();
    let guid = guidFor(this);
    let events = get(this, 'events') || {};
    for (let eventName of Object.keys(events)) {
      $el.on(`${eventName}.${guid}`, events[eventName]);
    }
  },

  willRemoveElement() {
    this._super(...arguments);
    this.$element().off(`.${guidFor(this)}`);
  }
});
