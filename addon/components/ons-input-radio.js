import Ember from 'ember';
import { invokeAction } from 'ember-invoke-action';
import layout from '../templates/components/ons-input/radio';
import VirtualizedElement from '../-private/virtualized-element';
import DynamicAttributeBindings
  from '../-private/dynamic-attribute-bindings';

const {
  Component,
  computed,
  get,
  set,
  guidFor,
  run: { bind },
  String: { w }
} = Ember;

const OnsInputRadioComponent = Component.extend(
  DynamicAttributeBindings, VirtualizedElement, {
    layout,
    tagName: '',

    NON_ATTRIBUTE_BOUND_PROPS: w(`
      update
      modifier
      option
      value
      inputId
      input-id
      checked
      type
      paramValue
    `.trim()),

    checked: computed('_value', 'option', function() {
      return get(this, '_value') === get(this, 'option');
    }),

    _handleClick() {
      this._lastValue = get(this, 'option');
      invokeAction(this, 'update', get(this, 'option'));
    },

    didReceiveAttrs() {
      this._super(...arguments);

      let value = get(this, 'paramValue');
      if (value === undefined) {
        value = get(this, 'value');
      }

      set(this, '_value', value);
      if (this._lastValue !== value) {
        this._lastValue = value;
        this.$element().get(0).checked = get(this, 'checked');
      }
    },

    didInsertElement() {
      this._super(...arguments);
      this.$element('input')
        .on(`click.${guidFor(this)}`, bind(this, '_handleClick'));
    },

    willRemoveElement() {
      this._super(...arguments);
      this.$element('input').off(`.${guidFor(this)}`);
    }
  }
);

OnsInputRadioComponent.reopenClass({
  positionalParams: ['paramValue']
});

export default OnsInputRadioComponent;
