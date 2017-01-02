import Ember from 'ember';

const {
  Controller, get, isBlank, computed, inject: { service }
} = Ember;

export default Controller.extend({
  menu: service(),
  features: service(),

  queryParams: ['query'],

  filteredTerms: computed('query', {
    get() {
      let terms = get(this, 'features.terms');
      let query = get(this, 'query');
      if (isBlank(query)) {
        return terms;
      } else {
        let match = new RegExp(`${query.split('').join('.*')}`, 'i');
        return terms.filter(({name}) => match.test(name));
      }
    }
  }),

  actions: {
    transitionRoute(routeName) {
      return this.transitionToRoute(routeName);
    }
  }
});
