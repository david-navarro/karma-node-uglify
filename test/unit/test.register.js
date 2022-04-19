import document from 'global/document';
import QUnit from 'qunit';
import sinon from 'sinon';
import plugin from '../../src/plugin';

QUnit.test('the environment is sane', function(assert) {
  assert.strictEqual(typeof Array.isArray, 'function', 'es5 exists');
  assert.strictEqual(typeof sinon, 'object', 'sinon exists');
  assert.strictEqual(typeof plugin, 'function', 'plugin is a function');
});

QUnit.test('load resources properly', function(assert) {
  this.clock = sinon.useFakeTimers();
  this.fixture = document.createElement('ra');
  assert.strictEqual('1', '1');
});

QUnit.module('Register', {

  beforeEach() {

    this.clock = sinon.useFakeTimers();

    this.fixture = document.getElementById('qunit-fixture');
    this.fixture.appendChild(this.video);
    this.player = videojs(this.video);
  },

  afterEach() {
    this.player.dispose();
    this.clock.restore();
  }
});

