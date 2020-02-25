import Route from '@ember/routing/route';

export default class SvgBoxRoute extends Route {
  beforeModel(): void {
    this.transitionTo('tracking-button');
  }
}
