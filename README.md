# Ember-onsenui

Experiment to get [Onsen UI](https://onsen.io/) into Ember. **This is very BETA right now**

Simply includes the JS and CSS for the [Vanilla JavaScript](https://onsen.io/v2/docs/guide/js/) version of the library.

**Unknown which Onsen UI components work or don't work at the moment.**

Once added to your Ember app you can use the web components directly and attach Ember bindings and actions like you would a normal HTML element.

This addon also exposes the `ons` JavaScript module as `ember-onsenui` (or simply `onsenui`; both work).

## Example

```handlebars
<ons-page>
  <ons-toolbar>
    <div class="center">Onsen UI in Ember</div>
    <div class="right">
      <ons-toolbar-button>
        <ons-icon icon="ion-navicon, material:md-menu"></ons-icon>
      </ons-toolbar-button>
    </div>
  </ons-toolbar>

  <p style="text-align: center">
    <ons-button onclick={{action "alertMe"}}>Click me!</ons-button>
  </p>
</ons-page>
```

```js
import Ember from 'ember';
import ons from 'ember-onsenui';

const { Controller } = Ember;

export default Controller.extend({
  actions: {
    alertMe() {
      ons.notification.alert('It works!');
    }
  }
});
```

## Options

You can adjust what gets imported into your app by using the following Ember app config in your `ember-cli-build.js`:

```js
var app = new EmberAddon(defaults, {
  // Add options here
  'ember-onsenui': {
    importOnsenuiCSS: true,
    importFontAwesome: true,
    importIonIcons: true,
    importMaterialDesignIcons: true,
    importTheme: 'default'
  }
});
```

`importTheme` can be one of `default`, `blue-basic`, `blue`, `dark`, `purple`, or `sunshine`.

## Installation

* `git clone <repository-url>` this repository
* `cd ember-onsenui`
* `npm install`
* `bower install`

## Running

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

## Running Tests

* `npm test` (Runs `ember try:each` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://ember-cli.com/](http://ember-cli.com/).
