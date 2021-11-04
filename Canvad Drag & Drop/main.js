window.onload = function(){

  var canvas = document.getElementById("canvas"),
  context = canvas.getContext("2d"),
  width = canvas.width = window.innerWidth,
  height = canvas.height = window.innerHeight;

  var handle = {
    x: width/2,
    y: height/2,
    radius: 20
  };

  var offset = {
    x: 0,
    y: 0
  }

  draw();

  document.addEventListener("mousedown", function(event){
    offset.x = event.clientX - handle.x;
    offset.y = event.clientY - handle.y;
    if(utils.pointInCircle(event.clientX, event.clientY, handle)){
      document.addEventListener("mousemove", mouseMove);
      document.addEventListener("mouseup", mouseUp);
    }
  });

  function mouseMove(){
    handle.x = event.clientX - offset.x;
    handle.y = event.clientY - offset.y;
    draw();
  }

  function mouseUp(){
    document.removeEventListener("mousemove", mouseMove);
    document.removeEventListener("mouseup", mouseUp);
  }


  function draw(){
    context.clearRect(0, 0, width, height);
    context.beginPath();
    context.arc(handle.x, handle.y, handle.radius, 0, Math.PI * 2, false);
    context.fill();
  }

};
