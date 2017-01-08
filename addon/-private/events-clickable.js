import Ember from 'ember';

const { Mixin, get, tryInvoke } = Ember;

export default Mixin.create({
  click(...args) {
    let events = get(this, 'events') || {};
    tryInvoke(events, 'click', args);
  }
});
