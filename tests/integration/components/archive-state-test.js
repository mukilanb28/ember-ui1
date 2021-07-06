import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render,click } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | archive-state', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`<ArchiveState />`);
    assert.equal(this.element.textContent.trim(), 'Archive');
  });
});
