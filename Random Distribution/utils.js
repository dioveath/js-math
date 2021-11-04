var utils = {

  randomRange: function(min, max){
    return Math.floor(min + Math.random() * (max - min + 1));
  },

  randomDist: function(min, max, iteration){
    var total = 0;

    for(var i = 0; i < iteration; i++){
      total += utils.randomRange(min, max);
    }

    return (total / iteration);
  }

};
