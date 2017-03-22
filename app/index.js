var App = (() => {
  return {
    $: require('lib/coolgebra'),
    Engines: require('engines'),
    Entities: require('entities'),
    EventEmitter: require('events'),
    Lib: require('lib'),
    ObjectPool: require('lib/object-pool'),
    Position: require('engines/position'),
    Shell: require('shell'),
    Stack: require('lib/stack'),
    // WebGLDataObject: require('lib/webgl/index')
  }
})();

module.exports = App;

Object.assign(window, module.exports);