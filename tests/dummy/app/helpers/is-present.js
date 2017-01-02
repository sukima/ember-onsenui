import Ember from 'ember';

const { Helper, isPresent } = Ember;

export function isPresentHelper([value]) {
  return isPresent(value);
}

export default Helper.helper(isPresentHelper);
