import Ember from 'ember';
import RecognizerMixin from 'ember-gestures/mixins/recognizers';

export default Ember.Component.extend(RecognizerMixin, {
  recognizers: 'tap',

  tap () {
    console.info('<component:second-level> triggered tap');
  }
});
