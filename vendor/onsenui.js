(function() {
  /* globals define, ons */

  function generateModule(name, values) {
    define(name, [], function () {
      'use strict';
      return values;
    });
  }

  generateModule('onsenui', {'default': ons});
})();
