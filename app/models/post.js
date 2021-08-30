import Model, { attr } from '@ember-data/model';

export default class PostModel extends Model {
  @attr('string') slug;
  @attr('string') title;
  @attr('string') body;
  @attr('string') stripedBody;
  @attr('date') createdAt;
  @attr('date') updatedAt;
}
