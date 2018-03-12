import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('1-lecture');
  this.route('2-lecture');
  this.route('3-exercise');
  this.route('4-exercise');
  this.route('5-lecture');
  this.route('6-exercise');
  this.route('7-exercise');
  this.route('8-exercise');
  this.route('9-lecture');
  this.route('10-exercise');

  this.route('11-lecture');
  this.route('12-lecture');
  this.route('13-exercise');
  this.route('14-lecture');
  this.route('15-exercise');
  this.route('16-lecture');
});

export default Router;
