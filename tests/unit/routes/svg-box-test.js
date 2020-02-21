import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | svg-box', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    const route = this.owner.lookup('route:svg-box');
    assert.ok(route);
  });
});
