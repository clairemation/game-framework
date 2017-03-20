var App = (() => {
  return {
    $: require('./libraries/coolgebra.js'),
    Engine: require('./engine.js'),
    Entity: require('./entities/entities.js'),
    EventEmitter: require('./events/event-emitter.js'),
    ObjectPool: require('./libraries/object-pool.js'),
    Physical: require('./engines/physical-engine.js'),
    Shell: require('./shell.js'),
    Stack: require('./libraries/stack.js'),
  }
})();

module.exports = App;

Object.assign(window, module.exports);