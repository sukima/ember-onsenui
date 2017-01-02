import Ember from 'ember';

const { Service } = Ember;

export const IMPLEMENTED = Symbol('implemented');
export const NOT_IMPLEMENTED = Symbol('not-implemented');
export const ALT_IMPLEMENTED = Symbol('alt-implemented');

export default Service.extend({
  routes: [
    {name: 'index', title: 'Home'},
    {name: 'creating-a-page', title: 'Creating a Page'},
    {name: 'stack-navigation', title: 'Stack Navigation'},
    {name: 'fab-example', title: 'Floating Action Button'},
    {name: 'speed-dial-example', title: 'Floating Speed Dial'},
    {name: 'gestures', title: 'Gesture Detector'},
    {name: 'pull-hook', title: 'Pull to Refresh'},
    {name: 'carousel-example', title: 'Carousel Example'}
  ],

  terms: [
    {name: 'ons-carousel-item', route: 'carousel-example', implemented: ALT_IMPLEMENTED},
    {name: 'ons-carousel', route: 'carousel-example', implemented: ALT_IMPLEMENTED},
    {name: 'ons-if', implemented: NOT_IMPLEMENTED},
    {name: 'ons-pull-hook', route: 'pull-hook', implemented: IMPLEMENTED},
    {name: 'ons-speed-dial-item', route: 'speed-dial-example', implemented: IMPLEMENTED},
    {name: 'ons-speed-dial', route: 'speed-dial-example', implemented: IMPLEMENTED},
    {name: 'ons-alert-dialog'},
    {name: 'ons-dialog'},
    {name: 'ons-modal'},
    {name: 'ons-popover'},
    {name: 'ons-button', implemented: IMPLEMENTED},
    {name: 'ons-fab', route: 'fab-example', implemented: IMPLEMENTED},
    {name: 'ons-input'},
    {name: 'ons-range'},
    {name: 'ons-switch'},
    {name: 'ons-gesture-detector', route: 'gestures', implemented: IMPLEMENTED},
    {name: 'ons-col'},
    {name: 'ons-row'},
    {name: 'ons-lazy-repeat', implemented: NOT_IMPLEMENTED},
    {name: 'ons-list-header', implemented: IMPLEMENTED},
    {name: 'ons-list-item', implemented: IMPLEMENTED},
    {name: 'ons-list', implemented: IMPLEMENTED},
    {name: 'ons-splitter-content', implemented: IMPLEMENTED},
    {name: 'ons-splitter-side', implemented: IMPLEMENTED},
    {name: 'ons-splitter', implemented: IMPLEMENTED},
    {name: 'ons-back-button', implemented: IMPLEMENTED},
    {name: 'ons-navigator', route: 'stack-navigation', implemented: ALT_IMPLEMENTED},
    {name: 'ons-bottom-toolbar', implemented: IMPLEMENTED},
    {name: 'ons-page', implemented: IMPLEMENTED},
    {name: 'ons-toolbar-button', implemented: IMPLEMENTED},
    {name: 'ons-toolbar', implemented: IMPLEMENTED},
    {name: 'ons-tab'},
    {name: 'ons-tabbar'},
    {name: 'ons-template', implemented: NOT_IMPLEMENTED},
    {name: 'ons-icon', implemented: IMPLEMENTED},
    {name: 'ons-progress-bar'},
    {name: 'ons-progress-circular'},
    {name: 'ons-ripple'}
  ],
});
