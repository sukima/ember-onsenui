import Ember from 'ember';
import { invokeAction } from 'ember-invoke-action';
import VirtualizedElement from '../-private/virtualized-element';
import DynamicAttributeBindings
  from '../-private/dynamic-attribute-bindings';

import checkboxLayout from '../templates/components/ons-input/checkbox';
import dateLayout from '../templates/components/ons-input/date';
import datetimeLocalLayout from '../templates/components/ons-input/datetime-local';
import emailLayout from '../templates/components/ons-input/email';
import monthLayout from '../templates/components/ons-input/month';
import numberLayout from '../templates/components/ons-input/number';
import passwordLayout from '../templates/components/ons-input/password';
import radioLayout from '../templates/components/ons-input/radio';
import searchLayout from '../templates/components/ons-input/search';
import telLayout from '../templates/components/ons-input/tel';
import textLayout from '../templates/components/ons-input/text';
import timeLayout from '../templates/components/ons-input/time';
import urlLayout from '../templates/components/ons-input/url';
import weekLayout from '../templates/components/ons-input/week';

const {
  Component,
  computed,
  observer,
  get,
  isNone,
  isPresent,
  guidFor,
  assert,
  run: { schedule, bind },
  String: { w }
} = Ember;

const LAYOUTS_FROM_TYPE = {
  checkbox: checkboxLayout,
  'date': dateLayout,
  'datetime-local': datetimeLocalLayout,
  email: emailLayout,
  month: monthLayout,
  number: numberLayout,
  password: passwordLayout,
  radio: radioLayout,
  search: searchLayout,
  tel: telLayout,
  text: textLayout,
  time: timeLayout,
  url: urlLayout,
  week: weekLayout
};

const FORBIDDEN_TYPES = ['checkbox', 'radio'];

function maybeEqual(val1, val2) {
  if (isNone(val1) || isNone(val2)) {
    return false;
  }
  return val1.toString() === val2.toString();
}

const OnsInputComponent = Component.extend(
  VirtualizedElement, DynamicAttributeBindings, {
  tagName: '',

  NON_ATTRIBUTE_BOUND_PROPS: w(`
    id
    inputId
    input-id
    modifier
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
    let type = get(this, 'type');
    this.layout = LAYOUTS_FROM_TYPE[type];
    assert(`The {{ons-input}} component does not support type="${type}", use {{ons-input-${type}}} instead.`, FORBIDDEN_TYPES.indexOf(type) === -1);
    assert(`The {{ons-input}} component does not support type="${type}".`, isPresent(this.layout));
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

OnsInputComponent.reopenClass({
  positionalParams: ['positionalParamValue']
});

export default OnsInputComponent;
