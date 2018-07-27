import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('transform:menuresolve', 'Unit | Transform | menuresolve', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    let transform = this.owner.lookup('transform:menuresolve');
    assert.ok(transform);
  });
});
