import EmberRouter from '@ember/routing/router';
import config from 'ember-blog/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('posts', { path: '/' }, function () {
    this.route('index', { path: '/', exact: true });
    this.route('show', { path: '/:slug' });
  });
});
