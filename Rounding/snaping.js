window.onload = function(){

  var canvas = document.getElementById("canvas"),
  context = canvas.getContext("2d"),
  width = canvas.width = window.innerWidth,
  height = canvas.height = window.innerHeight;

  var gridSize = 20;
  var eraserMode = false;

  context.clearRect(0, 0, width, height);

  for(var x = 0; x < width; x += gridSize){
    context.beginPath();
    context.moveTo(x, 0);
    context.lineTo(x, height);
    context.stroke();
  }

  for(var y = 0; y < height; y+= gridSize){
    context.beginPath();
    context.moveTo(0, y);
    context.lineTo(width, y);
    context.stroke();
  }

  document.body.addEventListener("mousemove", function(event){

    var x = utils.roundToNearest(event.clientX, gridSize);
    var y = utils.roundToNearest(event.clientY, gridSize);

    if(eraserMode){
      context.fillStyle = "white";
    } else {
      context.fillStyle = "black";
    }

    context.beginPath();
    context.arc(x, y, 5, 0, Math.PI * 2, false);
    context.fill();

  });

  document.body.addEventListener("keydown", function(event){
    if(event.keyCode == 32){
      eraserMode = true;
    }
  });

  document.body.addEventListener("keyup", function(event){
    if(event.keyCode == 32){
      eraserMode = false;
    }
  });


};
