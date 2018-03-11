import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('1-lecture');
  this.route('2-lecture', function() {
    this.route('exercise', { path: '/' });
    this.route('mockup');
  });
  this.route('3-exercise', function() {
    this.route('exercise', { path: '/' });
    this.route('mockup');
  });
  this.route('4-lecture', function() {
    this.route('exercise', { path: '/' });
    this.route('mockup');
  });
  this.route('5-exercise', function() {
    this.route('exercise', { path: '/' });
    this.route('mockup');
  });
  this.route('6-lecture');
  this.route('7-lecture', function() {
    this.route('exercise', { path: '/' });
    this.route('mockup');
  });
  this.route('8-exercise', function() {
    this.route('exercise', { path: '/' });
    this.route('mockup');
  });
});

export default Router;
