import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render,click } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | toggle-switch', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`<ToggleSwitch />`);
    assert.equal(this.element.querySelectorAll('label').length, 2);
    
  });
});
