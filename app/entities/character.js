const Entity = require('./entity'),
  positionEngine = require('engines/position');

function Character(){
  Entity.call(this, arguments);
}

Character.prototype = Object.create(Entity.prototype);
Character.prototype.constructor = Character;