var vector = {

  _x: 0,
  _y: 0,

  create: function(x, y){
    var obj = Object.create(this);
    obj.setX(x);
    obj.setY(y);
    return obj;
  },

  setX: function(x){
    this._x = x;
  },

  setY: function(y){
    this._y = y;
  },

  getX: function(){
    return this._x;
  },

  getY: function(){
    return this._y;
  },

  getAngle: function(){
    return Math.atan2(this._y, this._x);
  },

  getLength: function(){
    return Math.sqrt(this._x * this._x, this._y * this._y);
  },

  setAngle: function(angle){
    var len = this.getLength();
    this._x = Math.cos(angle) * len;
    this._y = Math.sin(angle) * len;
  },

  setLength: function(len){
    var angle = this.getAngle();
    this._x = Math.cos(angle) * len;
    this._y = Math.sin(angle) * len;
  },

  add: function(v2){
    return vector.create(this._x + v2._x, this._y + v2._y);
  },

  subtract: function(v2){
    return vector.create(this._x - v2._x, this._y - v2.y);
  },

  addTo: function(v2){
    this._x += v2._x;
    this._y += v2._y;
  },

  subtractTo: function(v2){
    this._x -= v2._x;
    this._y -= v2._y;
  }

};
