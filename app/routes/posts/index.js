import Route from '@ember/routing/route';

export default class PostsIndexRoute extends Route {
  model() {
    return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((counter) => {
      return {
        id: counter,
        slug: 'this-is-my-slug-' + counter,
        title: 'This is my blog',
        body: 'lorem ipsum dolor sit amet',
      };
    });
  }
}
