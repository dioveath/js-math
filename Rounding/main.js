window.onload = function(){

  var canvas = document.getElementById("canvas"),
  context = canvas.getContext("2d"),
  width = canvas.width = window.innerWidth,
  height = canvas.height = window.innerHeight;

  var angle = -45;

  var x = width/2,
      y = height/2;

  context.translate(x, y);
  context.rotate(utils.degreeToRadian(angle));

  context.beginPath();
  context.arc(0, 0, 20, 0, Math.PI * 2, false);
  context.fill();

  context.lineWidth = 10;
  context.beginPath();
  context.moveTo(0, 0);
  context.lineTo(50, 0);
  context.stroke();

};
