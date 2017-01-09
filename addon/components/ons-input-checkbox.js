import Ember from 'ember';
import { invokeAction } from 'ember-invoke-action';
import layout from '../templates/components/ons-input/checkbox';
import VirtualizedElement from '../-private/virtualized-element';
import DynamicAttributeBindings from '../-private/dynamic-attribute-bindings';

const {
  Component,
  get,
  set,
  guidFor,
  computed,
  run: { bind },
  String: { w }
} = Ember;

const OnsInoutCheckboxComponent = Component.extend(
  DynamicAttributeBindings, VirtualizedElement, {
    layout,
    tagName: '',

    NON_ATTRIBUTE_BOUND_PROPS: w(`
      type
      modifier
      update
      isChecked
      inputId
      input-id
      paramValue
    `.trim()),

    inputId: computed({
      get() {
        return `${guidFor(this)}-ons-input`;
      }
    }),

    _handleClick(event) {
      this._lastValue = this.$element().get(0).checked;
      invokeAction(this, 'update', this._lastValue, event);
    },

    didReceiveAttrs() {
      this._super(...arguments);

      let value = get(this, 'paramChecked');
      if (value === undefined) {
        value = get(this, 'checked');
      }

      set(this, 'isChecked', value);
      if (this._lastValue !== value) {
        this._lastValue = value;
        this.$element().get(0).checked = value;
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

OnsInoutCheckboxComponent.reopenClass({
  positionalParams: ['paramChecked']
});

export default OnsInoutCheckboxComponent;
