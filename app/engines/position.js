const Engine = require('./engine');

function PositionEngine(){
  Engine.call(this);
  this.name = 'PositionEngine';
}

PositionEngine.prototype = Object.create(Engine.prototype);
PositionEngine.prototype.constructor = PositionEngine;

module.exports = PositionEngine;