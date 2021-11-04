var utils = {

  randomRange: function(min, max){
    return min + Math.random() * (max - min);
  },

  randomDist: function(min, max, iteration){
    var total = 0;
    for(var i = 0; i < iteration; i++){
      total += utils.randomRange(min, max);
    }
    return Math.floor(total / iteration);
  }

};
