import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | container-relative-shape', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:container-relative-shape');
    assert.ok(route);
  });
});
