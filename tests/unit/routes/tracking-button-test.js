import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | tracking-button', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    const route = this.owner.lookup('route:tracking-button');
    assert.ok(route);
  });
});
