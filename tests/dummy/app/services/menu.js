import Ember from 'ember';

const { Service, set } = Ember;

export default Service.extend({
  collapse: true,

  open() {
    set(this, 'collapse', false);
  },

  close() {
    set(this, 'collapse', true);
  }
});
