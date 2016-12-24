import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ons-toolbar-button', 'Integration | Component | ons toolbar button', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{ons-toolbar-button}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#ons-toolbar-button}}
      template block text
    {{/ons-toolbar-button}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
