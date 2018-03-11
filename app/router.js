import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('1-lecture');
  this.route('2-interactive-lecture', function() {
    this.route('exercise', { path: '/' });
    this.route('solution');
  });
  this.route('3-exercise', function() {
    this.route('exercise', { path: '/' });
    this.route('solution');
  });
});

export default Router;
