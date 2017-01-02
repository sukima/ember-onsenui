import Ember from 'ember';
import { invokeAction } from 'ember-invoke-action';
import VirtualizedElement from '../-private/virtualized-element';
import DynamicAttributeBindings
  from '../-private/dynamic-attribute-bindings';
import textLayout from '../templates/components/ons-input/text';

const {
  Component,
  assert,
  computed,
  observer,
  get,
  isNone,
  guidFor,
  run: { schedule, bind },
  String: { w }
} = Ember;

const LAYOUTS_FROM_TYPE = {
  text: textLayout
};

const FORBIDDEN_TYPES = ['checkbox', 'radio'];

function maybeEqual(val1, val2) {
  if (isNone(val1) || isNone(val2)) {
    return false;
  }
  return val1.toString() === val2.toString();
}

const OneWayInputComponent = Component.extend(
  VirtualizedElement, DynamicAttributeBindings, {
  tagName: '',

  NON_ATTRIBUTE_BOUND_PROPS: w(`
    id
    inputId
    type
    value
    _value
    events
    keyEvents
    classNames
    positionalParamValue
    tagName
    NON_ATTRIBUTE_BOUND_PROPS
    update
  `.trim()),

  keyEvents: {
    '13': 'onenter',
    '27': 'onescape'
  },

  inputId: computed({
    get() {
      return `${guidFor(this)}-input`;
    }
  }).readOnly(),

  init() {
    this._super(...arguments);
    this.layout = LAYOUTS_FROM_TYPE[get(this, 'type')];
  },

  didInsertElement() {
    this._super(...arguments);
    let guid = guidFor(this);
    let $input = this.$element('input');
    $input.on(`change.${guid} input.${guid}`, bind(this, '_handleChange'));
    $input.on(`keyUp.${guid}`, bind(this, '_handleKeyUp'));
    this.dataDownSync();
  },

  willRemoveElement() {
    this._super(...arguments);
    this.$element('input').off(`.${guidFor(this)}`);
  },

  dataDownSync: observer('_value', function () {
    if (get(this, '_value') !== this._lastValue) {
      this._syncValue();
    }
  }),

  _processNewValue(value) {
    if (get(this, '_value') !== value) {
      invokeAction(this, 'update', value);
    }

    schedule('afterRender', this, '_syncValue');
  },

  _syncValue: observer('_value', function () {
    if (this.isDestroyed || this.isDestroying) {
      return;
    }

    let $input = this.$element('input');
    let actualValue = get(this, '_value');
    let renderedValue = this._lastValue = $input.attr('value');

    if (!maybeEqual(actualValue, renderedValue)) {
      let rawElement = $input.get(0);

      let start;
      let end;

      // gaurds because only text, search, url, tel and password support this
      try {
        start = rawElement.selectionStart;
        end = rawElement.selectionEnd;
      } catch(e) {
        // no-op
      }

      $input.val(actualValue);

      try {
        rawElement.setSelectionRange(start, end);
      } catch(e) {
        // no-op
      }
    }
  }),

  _handleChange(event) {
    this._processNewValue(event.target.value);
  },

  _handleKeyUp(event) {
    let method = get(this, `keyEvents.${event.keyCode}`);
    if (method) {
      invokeAction(this, method, event.target.value);
    }
  },

  type: computed({
    get() {
      return 'text';
    },

    set(key, type) {
      assert(`The {{ons-input}} component does not support type="${type}", use {{ons-${type}}} instead.`, FORBIDDEN_TYPES.indexOf(type) === -1);
      return type;
    }
  }),

  _value: computed('positionalParamValue', 'value', {
    get() {
      let value = get(this, 'positionalParamValue');
      if (value === undefined) {
        value = get(this, 'value');
      }

      return value;
    }
  })
});

OneWayInputComponent.reopenClass({
  positionalParams: ['positionalParamValue']
});

export default OneWayInputComponent;
