window.onload = function(){

  var canvas = document.getElementById("canvas"),
  context = canvas.getContext("2d"),
  width = canvas.width = window.innerWidth,
  height = canvas.height = window.innerHeight;

  var centerX = width/2,
      centerY = height/2,
      yRadius = 200,
      xRadius = 400;

  for(var i = 0; i < 10000; i++){
    var  angle = Math.random() * Math.PI * 2;

    var x =  centerX + Math.cos(angle) * Math.sqrt(Math.random()) * xRadius,
        y = centerY + Math.sin(angle) * Math.sqrt(Math.random()) * yRadius;

    context.fillRect(x, y, 1, 1);
  }

};
