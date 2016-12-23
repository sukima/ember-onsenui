import Ember from 'ember';
import { module, test } from 'qunit';
import ons from 'onsenui';

const { isPresent } = Ember;

module('Unit | Onsen UI module');

test('is exported as an ES6 module', function(assert) {
  assert.ok(isPresent(ons), 'expected ons to be exported as a module');
});
