import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('home');
  this.route('schedule');
  this.route('manager', function() {});
  this.route('about');
  this.route('register');
  this.route('main');
});

export default Router;
