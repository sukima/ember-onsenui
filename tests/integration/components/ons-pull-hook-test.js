import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ons-pull-hook', 'Integration | Component | ons pull hook', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{ons-pull-hook}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#ons-pull-hook}}
      template block text
    {{/ons-pull-hook}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
