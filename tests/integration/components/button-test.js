import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | button', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`
      <Button>
        template block text
      </Button>
    `);

    assert.equal(this.element.textContent.trim(), 'template block text');
  });

  test('it triggers the passed onClick action on click', async function(assert) {
    assert.expect(1);

    this.set('handleClick', (e) => {
      assert.ok(e);
    });

    await render(hbs`
      <Button @onClick={{action this.handleClick}}>
        template block text
      </Button>
    `);

    await click('button');
  });
});
