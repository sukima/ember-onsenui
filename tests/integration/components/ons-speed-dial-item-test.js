import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ons-speed-dial-item', 'Integration | Component | ons speed dial item', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{ons-speed-dial-item}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#ons-speed-dial-item}}
      template block text
    {{/ons-speed-dial-item}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
