import Ember from 'ember';
import { task, timeout } from 'ember-concurrency';

const { Controller, getWithDefault, computed, inject: { service } } = Ember;

function hashCode(str) {
  const { abs } = Math;
  let hash = 0;
  if (str.length === 0) {
    return hash;
  }
  for (let i = 0; i < str.length; i++) {
    let ch = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + ch;
    hash = hash & hash; // Convert to 32bit integer
  }
  return abs(hash).toString(16);
}

export default Controller.extend({
  menu: service(),

  refreshIcon: 'md-angle-double-down',

  refreshValue: computed('refresh.lastSuccessful.value', {
    get() {
      let value = getWithDefault(this, 'refresh.lastSuccessful.value', '');
      return `00000000${value}`.slice(-8);
    }
  }),

  refresh: task(function * () {
    yield timeout(2000);
    return hashCode(new Date().toString());
  }).drop()
});
