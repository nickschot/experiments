import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | svg-box', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`
      <SvgBox>
        template block text
      </SvgBox>
    `);

    assert.dom('[data-test-svg-box-content]').containsText('template block text');
  });

  test('it renders a two-part animation by default', async function(assert) {
    await render(hbs`
      <SvgBox>
        template block text
      </SvgBox>
    `);

    assert.dom('[data-test-svg-box-content]').containsText('template block text');
    assert.dom('[data-test-svg-box-border-top]').exists();
    assert.dom('[data-test-svg-box-border-bottom]').exists();
    assert.dom('[data-test-svg-box-bg]').exists();
    assert.dom('[data-test-svg-box-border-simple]').doesNotExist();
  });

  test('it renders a simple animation', async function(assert) {
    await render(hbs`
      <SvgBox @simpleAnimation={{true}}>
        template block text
      </SvgBox>
    `);

    assert.dom('[data-test-svg-box-content]').containsText('template block text');
    assert.dom('[data-test-svg-box-border-simple]').exists();
    assert.dom('[data-test-svg-box-bg]').exists();
    assert.dom('[data-test-svg-box-border-top]').doesNotExist();
    assert.dom('[data-test-svg-box-border-bottom]').doesNotExist();
  });
});
