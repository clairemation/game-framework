function orthographicMatrix(width, height, depth){
  return [
    2/width, 0, 0, 0,
    0, -2/height, 0, 0,
    0, 0, 2/depth, 0,
    -1, 1, 0, 1
  ];
};

function projectionMatrix({fov, aspect, near, far, isInRadians}){
  if (!isInRadians) fov *= Math.PI / 180;
  var f = 1.0 / Math.tan(fov / 2);
  var rangeInverse = 1.0 / (near-far);
  return [
    f / aspect, 0, 0, 0,
    0, f, 0, 0,
    0, 0, (near+far) * rangeInverse, -1,
    0, 0, near*far * rangeInverse * 2, 0
  ];
};

module.exports = {orthographicMatrix, projectionMatrix};