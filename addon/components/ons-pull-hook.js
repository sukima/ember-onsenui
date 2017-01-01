import Ember from 'ember';
import layout from '../templates/components/ons-pull-hook';

const {
  Component, get, observer, guidFor, tryInvoke,
  RSVP, run: { bind }, String: { w }
} = Ember;

export default Component.extend({
  layout,
  tagName: 'ons-pull-hook',
  attributeBindings: w(`
    disabled
    height
    thresholdHeight:threshold-height
    fixedContent:fixed-content
  `.trim()),

  updateOnAction: observer('action', function () {
    get(this, 'element').onAction = bind(this, 'performAction');
  }),

  performAction(done) {
    RSVP.resolve(tryInvoke(this, 'action'), 'ons-pull-hook.performAction')
      .finally(done);
  },

  didInsertElement() {
    this._super(...arguments);
    this.$().on(`changestate.${guidFor(this)}`, evt => {
      let events = get(this, 'events');
      let state = get(evt, 'originalEvent.state');
      tryInvoke(events, state, [evt]);
    }); 
    this.updateOnAction();
  },

  willRemoveElement() {
    this._super(...arguments);
    this.$().off(`.${guidFor(this)}`);
    get(this, 'element').onAction = null;
  }
});
