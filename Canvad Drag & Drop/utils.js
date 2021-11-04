var utils = {

  distanceXY: function(x0, y0, x1, y1){
    var dx = x1 - x0,
        dy = y1 - y0;
    return Math.sqrt(dx * dx + dy * dy);
  },

  pointInCircle: function(x, y, circle){
    return utils.distanceXY(x, y, circle.x, circle.y) < circle.radius;
  }

};
