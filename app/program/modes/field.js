var gameLoop = null,
  engines = [];

engines.push({update: function(t){console.log('1');}});
engines.push({update: function(t){console.log('2');}});

function addEngine(engine){

}


function tick(timestamp){
  for (var i = 0; i < engines.length; i++){
    if(engines[i]){
      engines[i].update(timestamp);
    }
  }
  window.requestAnimationFrame(tick);
}

function start(){
  gameLoop = window.requestAnimationFrame(tick);
}

function stop(){
  window.cancelAnimationFrame(gameLoop);
}

module.exports = {
  start: start,
  stop: stop
};