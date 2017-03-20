// DANGEROUS!! EXTENDS ARRAY NATIVE OBJECT!
// ONLY USE INSIDE A CONTEXT WITH A LOCALLY DEFINED ARRAY OBJECT VARIABLE!

// TODO: inline functions if optimization needed

const {sin, cos} = Math;
var a = {};

a.IDENTITY_MATRIX = [
  1, 0, 0, 0,
  0, 1, 0, 0,
  0, 0, 1, 0,
  0, 0, 0, 1
];

a.plusScalar = function(s){
  var v = this;

  // Selects appropriate version for vector/matrix size--no logic branching, no loops, lazily evaluated, for optimal(?) performance
  var functionVersion = {
    2: function(){
      return [v[0]+s, v[1]+s];
    },
    3: function(){
      return [v[0]+s, v[1]+s, v[2]+s];
    },
    4: function(){
      return [v[0]+s, v[1]+s, v[2]+s, v[3]+s];
    }
  }
  return functionVersion[this.length]();
}

a.plusVector = function(v){
  var u = this;
  var functionVersion = {
    2: function(){
      return [u[0]+v[0], u[1]+v[1]];
    },
    3: function(){
      return [u[0]+v[0], u[1]+v[1], u[2]+v[2]];
    },
    4: function(){
      return [u[0]+v[0], u[1]+v[1], u[2]+v[2], u[3]+v[3]];
    }
  };
  return functionVersion[this.length]();
};

a.minusVector = function(v){
  var u = this;
  var functionVersion = {
    2: function(){
      return [u[0]-v[0], u[1]-v[1]];
    },
    3: function(){
      return [u[0]-v[0], u[1]-v[1], u[2]-v[2]];
    },
    4: function(){
      return [u[0]-v[0], u[1]-v[1], u[2]-v[2], u[3]-v[3]];
    }
  };
  return functionVersion[this.length]();
};

a.timesScalar = function(s){
  var v = this;
  var functionVersion = {
    2: function(){
      return [v[0]*s, v[1]*s];
    },
    3: function(){
      return [v[0]*s, v[1]*s, v[2]*s];
    },
    4: function(){
      return [v[0]*s, v[1]*s, v[2]*s, v[3]*s];
    }
  }
  return functionVersion[this.length]();
}

a.divideScalar = function(s){
  var v = this;
  var functionVersion = {
    2: function(){
      return [v[0]/s, v[1]/s];
    },
    3: function(){
      return [v[0]/s, v[1]/s, v[2]/s];
    },
    4: function(){
      return [v[0]/s, v[1]/s, v[2]/s, v[3]/s];
    }
  }
  return functionVersion[this.length]();
}

a.times = function(v){
  var u = this;
  var functionVersion = {
    2: function(){
      return [u[0]*v[0], u[1]*v[1]];
    },
    3: function(){
      return [u[0]*v[0], u[1]*v[1], u[2]*v[2]];
    },
    4: function(){
      return [u[0]*v[0], u[1]*v[1], u[2]*v[2], u[3]*v[3]];
    },
    16: {
      4: function(){
        return [
          u[0]*v[0], u[1]*v[1], u[2]*v[2], u[3]*v[3],
          u[4]*v[0], u[5]*v[1], u[6]*v[2], u[7]*v[3],
          u[8]*v[0], u[9]*v[1], u[10]*v[2],u[11]*v[3],
          u[12]*v[0],u[13]*v[1],u[14]*v[2],u[15]*v[3]
        ];
      },
      16: function(){
        return [
          u[0]*v[0] + u[1]*v[4] + u[2]*v[8] + u[3]*v[12],
          u[0]*v[1] + u[1]*v[5] + u[2]*v[9] + u[3]*v[13],
          u[0]*v[2] + u[1]*v[6] + u[2]*v[10] + u[3]*v[14],
          u[0]*v[3] + u[1]*v[7] + u[2]*v[11] + u[3]*v[15],

          u[4]*v[0] + u[5]*v[4] + u[6]*v[8] + u[7]*v[12],
          u[4]*v[1] + u[5]*v[5] + u[6]*v[9] + u[7]*v[13],
          u[4]*v[2] + u[5]*v[6] + u[6]*v[10] + u[7]*v[14],
          u[4]*v[3] + u[5]*v[7] + u[6]*v[11] + u[7]*v[15],

          u[8]*v[0] + u[9]*v[4] + u[10]*v[8] + u[11]*v[12],
          u[8]*v[1] + u[9]*v[5] + u[10]*v[9] + u[11]*v[13],
          u[8]*v[2] + u[9]*v[6] + u[10]*v[10] + u[11]*v[14],
          u[8]*v[3] + u[9]*v[7] + u[10]*v[11] + u[11]*v[15],

          u[12]*v[0] + u[13]*v[4] + u[14]*v[8] + u[15]*v[12],
          u[12]*v[1] + u[13]*v[5] + u[14]*v[9] + u[15]*v[13],
          u[12]*v[2] + u[13]*v[6] + u[14]*v[10] + u[15]*v[14],
          u[12]*v[3] + u[13]*v[7] + u[14]*v[11] + u[15]*v[15]
        ];
      }
    }[v.length]
  };
  return functionVersion[this.length]();
}

a.divideVector = function(v){
  var u = this;
  var functionVersion = {
    2: function(){
      return [u[0]/v[0], u[1]/v[1]];
    },
    3: function(){
      return [u[0]/v[0], u[1]/v[1], u[2]/v[2]];
    },
    4: function(){
      return [u[0]/v[0], u[1]/v[1], u[2]/v[2], u[3]/v[3]];
    }
  };
  return functionVersion[this.length]();
}

a.dot = function(v){
  var u = this;
  var functionVersion = {
    2: function(){
      return u[0]*v[0] + u[1]*v[1];
    },
    3: function(){
      return u[0]*v[0] + u[1]*v[1] + u[2]*v[2];
    },
    4: function(){
      return u[0]*v[0] + u[1]*v[1] + u[2]*v[2] + u[3]*v[3];
    }
  };
  return functionVersion[this.length]();
}

a.blendWith = function(v, t = 0.5){
  return this.timesScalar(1-t).plusVector(v.timesScalar(t));
}

a.squaredLength = function() {
  return this.dot(this);
}

a.vectorLength = function(){
  return Math.sqrt(this.squaredLength());
}

a.squaredDistance = function(v){
  return this.minusVector(v).squaredLength();
}

a.distance = function(v){
  return Math.sqrt(this.squaredDistance(v));
}

a.unit = function(){
  return this.divideScalar(this.vectorLength());
}

a.turnLeft = function(){
  return [-this[1], this[0]];
}

a.turnRight = function(){
  return [this[1], -this[0]];
}

a.leftNormal = function(){
  return this.turnLeft().unit();
}

a.rightNormal = function(){
  return this.turnRight().unit();
}

a.rotate2d = function(angle){
  this[0] = this[0] * cos(angle) - this[1] * sin(angle);
  this[1] = this[0] * sin(angle) + this[1] * cos(angle);
  return this;
}

a.angle2d = function(){
  return Math.atan2(this[1], this[0]);
}

a.directionTo = function(v){
  return v.minusVector(this).unit();
}

a.projectedLength = function(v){
  return this.dot(v);
}

// Todo: Add versions for other size matrices
a.transpose = function(){
  return [
    this[0], this[4], this[8], this[12],
    this[1], this[5], this[9], this[13],
    this[2], this[6], this[10], this[14],
    this[3], this[7], this[11], this[15]
  ];
}

a.scale = function(x,y,z){
  return this.times([
    x, 0, 0, 0,
    0, y, 0, 0,
    0, 0, z, 0,
    0, 0, 0, 1
  ]);
};

a.rotate = function(x,y,z){
  const m = this;

  var xRotation = [
      1, 0, 0, 0,
      0,cos(x), -sin(x), 0,
      0, sin(x), cos(x), 0,
      0, 0, 0, 1
    ],
      yRotation = [
      cos(y), 0, sin(y), 0,
      0, 1, 0, 0,
      -sin(y), 0, cos(y), 0,
      0, 0, 0, 1
    ],
    zRotation = [
      cos(z), -sin(z), 0, 0,
      sin(z), cos(z), 0, 0,
      0, 0, 1, 0,
      0, 0, 0, 1
    ];

  return this.times(xRotation).times(yRotation).times(zRotation);
}

a.matrixInverse = function(){
  var r = Array.IDENTITY_MATRIX,
    m = this;

  r[0] = m[5]*m[10]*m[15] - m[5]*m[14]*m[11] - m[6]*m[9]*m[15] + m[6]*m[13]*m[11] + m[7]*m[9]*m[14] - m[7]*m[13]*m[10];
  r[1] = -m[1]*m[10]*m[15] + m[1]*m[14]*m[11] + m[2]*m[9]*m[15] - m[2]*m[13]*m[11] - m[3]*m[9]*m[14] + m[3]*m[13]*m[10];
  r[2] = m[1]*m[6]*m[15] - m[1]*m[14]*m[7] - m[2]*m[5]*m[15] + m[2]*m[13]*m[7] + m[3]*m[5]*m[14] - m[3]*m[13]*m[6];
  r[3] = -m[1]*m[6]*m[11] + m[1]*m[10]*m[7] + m[2]*m[5]*m[11] - m[2]*m[9]*m[7] - m[3]*m[5]*m[10] + m[3]*m[9]*m[6];

  r[4] = -m[4]*m[10]*m[15] + m[4]*m[14]*m[11] + m[6]*m[8]*m[15] - m[6]*m[12]*m[11] - m[7]*m[8]*m[14] + m[7]*m[12]*m[10];
  r[5] = m[0]*m[10]*m[15] - m[0]*m[14]*m[11] - m[2]*m[8]*m[15] + m[2]*m[12]*m[11] + m[3]*m[8]*m[14] - m[3]*m[12]*m[10];
  r[6] = -m[0]*m[6]*m[15] + m[0]*m[14]*m[7] + m[2]*m[4]*m[15] - m[2]*m[12]*m[7] - m[3]*m[4]*m[14] + m[3]*m[12]*m[6];
  r[7] = m[0]*m[6]*m[11] - m[0]*m[10]*m[7] - m[2]*m[4]*m[11] + m[2]*m[8]*m[7] + m[3]*m[4]*m[10] - m[3]*m[8]*m[6];

  r[8] = m[4]*m[9]*m[15] - m[4]*m[13]*m[11] - m[5]*m[8]*m[15] + m[5]*m[12]*m[11] + m[7]*m[8]*m[13] - m[7]*m[12]*m[9];
  r[9] = -m[0]*m[9]*m[15] + m[0]*m[13]*m[11] + m[1]*m[8]*m[15] - m[1]*m[12]*m[11] - m[3]*m[8]*m[13] + m[3]*m[12]*m[9];
  r[10] = m[0]*m[5]*m[15] - m[0]*m[13]*m[7] - m[1]*m[4]*m[15] + m[1]*m[12]*m[7] + m[3]*m[4]*m[13] - m[3]*m[12]*m[5];
  r[11] = -m[0]*m[5]*m[11] + m[0]*m[9]*m[7] + m[1]*m[4]*m[11] - m[1]*m[8]*m[7] - m[3]*m[4]*m[9] + m[3]*m[8]*m[5];

  r[12] = -m[4]*m[9]*m[14] + m[4]*m[13]*m[10] + m[5]*m[8]*m[14] - m[5]*m[12]*m[10] - m[6]*m[8]*m[13] + m[6]*m[12]*m[9];
  r[13] = m[0]*m[9]*m[14] - m[0]*m[13]*m[10] - m[1]*m[8]*m[14] + m[1]*m[12]*m[10] + m[2]*m[8]*m[13] - m[2]*m[12]*m[9];
  r[14] = -m[0]*m[5]*m[14] + m[0]*m[13]*m[6] + m[1]*m[4]*m[14] - m[1]*m[12]*m[6] - m[2]*m[4]*m[13] + m[2]*m[12]*m[5];
  r[15] = m[0]*m[5]*m[10] - m[0]*m[9]*m[6] - m[1]*m[4]*m[10] + m[1]*m[8]*m[6] + m[2]*m[4]*m[9] - m[2]*m[8]*m[5];

  // In case of divide by zero error, if det is 0 just leave unchanged
  var det = (m[0]*r[0] + m[1]*r[4] + m[2]*r[8] + m[3]*r[12]) || 1;
  for (var i = 0; i < 16; i++) r[i] /= det;
  return r;
}

Object.keys(a).map ((k) => {a[k] = {value: a[k], enumerable: false}});

module.exports = function(){
  Object.defineProperties(Array.prototype, a);
};