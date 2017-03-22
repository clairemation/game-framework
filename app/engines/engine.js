var Engine = function Engine() {
  const index = [],
  registry = {
    indices: {},
    components: {}
  };

  function Engine() {
    this.Component = function(args){};
    this.update = function(){};
    Object.defineProperty(this, "components", {
      get: () => registry.components
    });
  }

  Engine.prototype.createComponent = function(args){
    var indices = registry.indices,
      components = registry.components;
    var component = new this.Component(args);
    var myIndex = (!!indices[args.id]) ? indices[args.id] : index.length;
    components[args.id] = component;
    indices[args.id] = myIndex;
    index[myIndex] = args.id;
    console.log(indices);
    return component;
  };

  Engine.prototype.deleteComponent = function(id){
    var myIndex = registry.indices[id].myIndex;
    delete registry.components[id];
    delete registry.indices[id];
    index[myIndex] = undefined;
  }

  return Engine;
}();

module.exports = Engine;