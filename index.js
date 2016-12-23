/* jshint node: true */
'use strict';

var path = require('path');
var util = require('util');
var extend = util._extend;

var defaultOptions = {
  importOnsenuiCSS: true,
  importFontAwesome: true,
  importIonIcons: true,
  importMaterialDesignIcons: true,
  importTheme: 'default'
};

module.exports = {
  name: 'ember-onsenui',
  included: function included(app) {
    this._super.included(app);
    var options = extend(defaultOptions, app.options['ember-onsenui']);
    var onsenuiPath = path.join(app.bowerDirectory, 'onsenui');

    if (options.importOnsenuiCSS) {
      app.import(path.join(onsenuiPath, 'css/onsenui.css'));
      if (options.importTheme && options.importTheme !== 'default') {
        app.import(path.join(onsenuiPath, 'css/onsen-css-components-' + options.importTheme + '-theme.css'));
      } else {
        app.import(path.join(onsenuiPath, 'css/onsen-css-components-default.css'));
      }
    }

    if (options.importFontAwesome) {
      app.import(
        path.join(onsenuiPath, 'css/font_awesome/css/font-awesome.min.css'),
        {outputFile: 'assets/font_awesome/css/font-awesome.min.css'}
      );
      [
        'fontawesome-webfont.eot',
        'fontawesome-webfont.svg',
        'fontawesome-webfont.ttf',
        'fontawesome-webfont.woff',
        'fontawesome-webfont.woff2',
        'FontAwesome.otf'
      ].forEach(function (fontName) {
        app.import(
          path.join(onsenuiPath, 'css/font_awesome/fonts', fontName),
          {destDir: 'assets/font_awesome/fonts'}
        );
      });
    }

    if (options.importIonIcons) {
      app.import(
        path.join(onsenuiPath, 'css/ionicons/css/ionicons.min.css'),
        {outputFile: 'assets/ionicons/css/ionicons.min.css'}
      );
      [
        'ionicons.eot',
        'ionicons.svg',
        'ionicons.ttf',
        'ionicons.woff'
      ].forEach(function (fontName) {
        app.import(
          path.join(onsenuiPath, 'css/ionicons/fonts', fontName),
          {destDir: 'assets/ionicons/fonts'}
        );
      });
    }

    if (options.importMaterialDesignIcons) {
      app.import(
        path.join(onsenuiPath, 'css/material-design-iconic-font/css/material-design-iconic-font.min.css'),
        {outputFile: 'assets/material-design-iconic-font/css/material-design-iconic-font.min.css'}
      );
      [
        'Material-Design-Iconic-Font.eot',
        'Material-Design-Iconic-Font.svg',
        'Material-Design-Iconic-Font.ttf',
        'Material-Design-Iconic-Font.woff',
        'Material-Design-Iconic-Font.woff2'
      ].forEach(function (fontName) {
        app.import(
          path.join(onsenuiPath, 'css/material-design-iconic-font/fonts', fontName),
          {destDir: 'assets/material-design-iconic-font/fonts'}
        );
      });
    }

    app.import(path.join(onsenuiPath, 'js/onsenui.js'));
    app.import('vendor/onsenui.js', {
      exports: {
        onsenui: ['default']
      }
    });
  }
};
