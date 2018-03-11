import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('step', { path: '/:id' }, function() {
    this.route('solution');
  });
});

export default Router;
