import Ember from 'ember';
import {
  IMPLEMENTED, NOT_IMPLEMENTED, ALT_IMPLEMENTED
} from '../services/features';

const { Helper } = Ember;

export function ifImplemented([implemented, trueValue, falseValue, altValue]) {
  switch (implemented) {
    case IMPLEMENTED: return trueValue;
    case NOT_IMPLEMENTED: return falseValue;
    case ALT_IMPLEMENTED: return altValue;
  }
}

export default Helper.helper(ifImplemented);
