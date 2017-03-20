const Engine = require('../engine.js');

function PhysicalEngine(){
  Engine.call(this);
  this.name = 'Phys';
}

PhysicalEngine.prototype = Object.create(Engine.prototype);
PhysicalEngine.prototype.constructor = PhysicalEngine;

module.exports = PhysicalEngine;