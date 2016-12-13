# Nested-ember-gestures

This repository is created in order to have a "bug"-reproduction of the [`ember-gestures`](https://github.com/html-next/ember-gestures/issues) 
library.

It is shown that nested components which have registered themselves for the `tap` `recognizer`-event are triggered
twice shortly after another. So, with this reproduction you will see that the `second-level` component fires the `tap`
event which is then passed to the `first-level` component (this is correct), BUT shortly after that, the whole thing is
triggered again....

## Installation

* `git clone <repository-url>` this repository
* `cd nested-ember-gestures`
* `npm install`
* `bower install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)

