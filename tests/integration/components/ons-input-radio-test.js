import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ons-input-radio', 'Integration | Component | ons input radio', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{ons-input-radio}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#ons-input-radio}}
      template block text
    {{/ons-input-radio}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
