import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('creating-a-page');
  this.route('stack-navigation', function () {
    this.route('stack1');
    this.route('stack2');
    this.route('stack3');
  });
});

export default Router;
