const EventEmitter = require('events/event-emitter');
const Stack = require('lib/stack');

var list = {};
var count = 0;

function Entity(args){
  this.id = args.id;
  list[this.name] = this;
  this.components = [];
};

Entity.list = list;
Entity.count = count;

module.exports = Entity;