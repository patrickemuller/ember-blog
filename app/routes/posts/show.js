import Route from '@ember/routing/route';

export default class PostsShowRoute extends Route {
  model(params) {
    return this.store.findRecord('post', params.slug)
  }
}
