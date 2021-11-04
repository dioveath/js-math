window.onload = function(){

  var canvas = document.getElementById("canvas"),
  context = canvas.getContext("2d"),
  width = canvas.width = window.innerWidth,
  height = canvas.height = window.innerHeight;

  var rect = {
    x: width/2 - 250,
    y: height/2 - 250,
    width: 500,
    height: 500
  };

  var ball = {
    radius: 10,
    x: width/2,
    y: height/2
  };

  document.body.addEventListener("mousemove", function(event){
    ball.x = utils.clamp(event.clientX, rect.x + 10, rect.x + rect.width - 10);
    ball.y = utils.clamp(event.clientY, rect.y + 10, rect.y + rect.height - 10);
  });


  update();

  function update(){
    context.clearRect(0, 0, width, height);

    context.fillStyle = "#ff0";
    context.fillRect(rect.x, rect.y,  rect.width, rect.height);
    context.fillStyle = "#0ff";
    context.beginPath();
    context.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2, false);
    context.fill();

    requestAnimationFrame(update);

  }

};
