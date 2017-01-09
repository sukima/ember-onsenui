import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ons-input-checkbox', 'Integration | Component | ons input checkbox', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{ons-input-checkbox}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#ons-input-checkbox}}
      template block text
    {{/ons-input-checkbox}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
