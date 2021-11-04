var utils = {

  norm: function(val, min, max){
    return (val - min) / (max - min);
  },

  lerp: function(norm, min, max){
    return (max - min) * norm + min;
  },

  map: function(val, srcMin, srcMax, destMin, destMax){
    return (utils.lerp(utils.norm(val, srcMin, srcMax), destMin, destMax));
  },

  clamp: function(val, min, max){
    return Math.min(Math.max(val, min), max);
  },

  distanceXY: function(x0, y0, x1, y1){
    var dx = x1 - x0,
        dy = y1 - y0;
        return Math.sqrt(dx * dx + dy * dy);
  }

};
