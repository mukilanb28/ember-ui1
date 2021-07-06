import { module, test } from 'qunit';
import { visit, currentURL,click } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | users', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /users', async function(assert) {
    await visit('/');
    assert.equal(currentURL(), '/'); //application route
    
    await click('.button'); //See all users button click
    await assert.equal(currentURL(), '/users');

    await click('.user-select'); //Click any 1st user card
    
    await click('.red-theme button'); //Click Archive button
    assert.dom('.red-theme').doesNotExist();
    assert.equal(this.element.querySelector('.green-theme button').innerHTML, 'UnArchive');

    await visit('/users'); //Back to users route
    await click(document.querySelector('.disabled')); //Enable All users

    await click('.user-select'); //Click 1st user card

    await click('.green-theme button'); //Click UnArchive button
    assert.dom('.green-theme').doesNotExist();
    assert.equal(this.element.querySelector('.red-theme button').innerHTML, 'Archive');
  
  });
});
