import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | springy-toggle', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:springy-toggle');
    assert.ok(route);
  });
});
