import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | scheduler test', function(hooks) {
  setupApplicationTest(hooks);

  test('Visiting the Home',async function(assert){
      await visit('/');
      assert.equal(currentURL(),'/home');
  });
  test('Visiting the Home 2',async function(assert){
    await visit('/home');
    assert.equal(currentURL(),'/home',"The linked has been accessed successfully");
  });
  test("Visiting the schedule",async function(assert){
    await visit('/schedule');
    assert.equal(currentURL(),"/schedule","The schedule has been visited successfully");
  });
});
