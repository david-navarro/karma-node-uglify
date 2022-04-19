import plugin from '../../src/plugin.js';
import QUnit from 'qunit';
import {version as VERSION} from '../../package.json';

QUnit.module('Plugin Object', {
  beforeEach() {
    this.player = {
      currentSrc: () => {},
      duration: () => {},
      on: () => {},
      one: () => {},
      ready: () => {},
      setTimeout: () => {}
    };
    plugin(this.player);
  }
}, function() {

  /*
   * Basic plugin is sane
   */
  QUnit.test('plugin is sane', function(assert) {
    assert.equal(plugin.VERSION, VERSION);
  });

});
