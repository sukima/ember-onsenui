import Ember from 'ember';

const { Controller, get, set, computed, inject: { service } } = Ember;

const MODEL_STACK = [
  {id: 1, componentName: 'carousel-slide1'},
  {id: 2, componentName: 'carousel-slide2'},
  {id: 3, componentName: 'carousel-slide3'},
  {id: 4, componentName: 'carousel-slide4'}
];

export default Controller.extend({
  menu: service(),

  carouselCursor: 0,

  model: computed('carouselCursor', {
    get() {
      return MODEL_STACK[get(this, 'carouselCursor')];
    }
  }),

  actions: {
    updateCursor(step) {
      let len = MODEL_STACK.length;
      let cursor = get(this, 'carouselCursor') + step;
      cursor = (cursor < 0) ? len - 1 : cursor;
      set(this, 'carouselCursor', cursor % len);
    }
  }
});
