import Route from '@ember/routing/route';

export default class PostsShowRoute extends Route {
  model(params) {
    const posts = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((counter) => {
      return {
        id: counter,
        slug: 'this-is-my-slug-' + counter,
        title: 'This is my blog',
        body: 'lorem ipsum dolor sit amet',
      };
    });

    let post = posts.filter((post) => {
      console.log(post)
      console.log(params)
      return post.slug === params.slug;
    })[0];

    return post;
  }
}
