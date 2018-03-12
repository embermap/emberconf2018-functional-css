/*global window */
import Router from "emberconf2018-functional-css/router";
import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

const StyleguideApplicationRoute = Route.extend({
  router: service('-routing'),

  renderTemplate() {
    if (window.location.href.match('/styleguide')) {
      this.render('applicationStyleguide', {
        controller: this.controllerFor('applicationStyleguide')
      });
    } else {
      this._super(...arguments);
    }
  }
})

export function initialize(appInstance) {
  let fastboot = appInstance.lookup('service:fastboot');
  let notInFastboot = !fastboot || !fastboot.get('isFastBoot');

  if (notInFastboot && window.location.href.match('/styleguide')) {
    appInstance.register('route:application', StyleguideApplicationRoute);
    Router.map(function() {
      this.route('styleguide', function() {
        this.route('components', function() {
          this.route('component', { path: '/:component_name' });
        });
      });
    });
  }
}

export default {
  name: 'ember-cli-ui-components',
  initialize
};
