window.onload = function(){

  var canvas = document.getElementById("canvas"),
  context = canvas.getContext("2d"),
  width = canvas.width = window.innerWidth,
  height = canvas.height = window.innerHeight;

  console.log(Math.pow(10, -1));
  console.log(utils.roundToPlaces(Math.PI, 1));
  console.log(utils.roundToPlaces(Math.PI, 2));
  console.log(utils.roundToPlaces(Math.PI, 3));
  console.log(utils.roundToPlaces(Math.PI, 4));
  console.log(utils.roundToPlaces(Math.PI, 5));


};
