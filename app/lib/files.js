function loadSingleFile(url){
  return new Promise(function(resolve, reject){
    var data;
    var request = new XMLHttpRequest();
    request.onreadystatechange = function(){
      if (this.readyState === 4){
        if (this.status === 200){
          resolve(this.responseText);
        } else {
          reject(new Error(this.status));
        }
      }
    };
    request.open("GET", url, true);
    request.send();
  });
}

function loadMultipleFiles(...urls){
  var files = urls.map((e) => loadSingleFile(e));
  return Promise.all(files);
}

function loadImage(url){
  return new Promise(function(resolve, reject){
    var img = new Image();
    img.onload = function(){
      resolve(img);
    }
    img.onerror = function(){
      reject(new Error('Unable to load image: ' + url));
    }
    img.src = url;
  });
};

module.exports = {loadFile, loadFiles, loadImage};