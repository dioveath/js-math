window.onload = function(){

  var canvas = document.getElementById("canvas"),
  context = canvas.getContext("2d"),
  width = canvas.width = window.innerWidth,
  height = canvas.height = window.innerHeight;

  console.log(utils.randomRange(0, width/3));

  for(var i = 0; i < 200; i++){
    context.beginPath();
    context.fillStyle = "#f00";
    context.arc(utils.randomRange(0, width * .33), utils.randomRange(0, height), utils.randomRange(5, 30), 0, Math.PI * 2, false);
    context.fill();

    context.beginPath();
    context.fillStyle = "#0f0";
    context.arc(utils.randomRange(width * .33, width * .66), utils.randomRange(0, height), utils.randomRange(5, 30), 0, Math.PI * 2, false);
    context.fill();

    context.beginPath();
    context.fillStyle = "#00f";
    context.arc(utils.randomRange(width * .66, width), utils.randomRange(0, height), utils.randomRange(5, 30), 0, Math.PI * 2, false);
    context.fill();

  }


};
