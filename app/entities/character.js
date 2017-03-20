var Entity = require('./entities.js');

function Character(){
  Entity.call(this, arguments);
}

Character.prototype = Object.create(Entity.prototype);
Character.prototype.constructor = Character;