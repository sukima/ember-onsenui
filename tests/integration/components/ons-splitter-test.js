import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ons-splitter', 'Integration | Component | ons splitter', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{ons-splitter}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#ons-splitter}}
      {{#ons-splitter-side side="left"}}
        template block text left
      {{/ons-splitter-side}}
      {{ons-splitter-content}}
    {{/ons-splitter}}
  `);

  assert.equal(this.$().text().trim(), 'template block text left');

  this.render(hbs`
    {{#ons-splitter}}
      {{#ons-splitter-side side="right"}}
        template block text right
      {{/ons-splitter-side}}
      {{ons-splitter-content}}
    {{/ons-splitter}}
  `);

  assert.equal(this.$().text().trim(), 'template block text right');
});
