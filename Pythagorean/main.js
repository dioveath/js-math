window.onload = function(){

  var canvas = document.getElementById("canvas"),
  context = canvas.getContext("2d"),
  width = canvas.width = window.innerWidth,
  height = canvas.height = window.innerHeight;

  var centerX = width/2,
  centerY = height/2,
  radius = 100;

  document.body.addEventListener("mousemove", function(event){

    context.fillStyle = "#55f";

    var distance = utils.distanceXY(event.clientX, event.clientY, centerX, centerY);
    if(distance < radius){
      context.fillStyle = "#f55";
    }

    context.beginPath();
    context.arc(centerX, centerY, radius, 0, Math.PI * 2, false);
    context.fill();

  });


  update();

  function update(){
    requestAnimationFrame(update);

  }

};
