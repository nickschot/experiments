import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';

export default class SpringyToggleController extends Controller {
  @tracked clamp = false;
}
