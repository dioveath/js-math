window.onload = function(){

  var canvas = document.getElementById("canvas"),
  context = canvas.getContext("2d"),
  width = canvas.width = window.innerWidth,
  height = canvas.height = window.innerHeight;

  var particles = [];

  for(var i = 0; i < 1000; i++){
    var p = particle.create(width/2, height/2, 0, 0);
    p.velocity.setLength(utils.randomRange(-1, 1));
    p.velocity.setAngle(utils.randomRange(0, Math.PI * 2));
    particles.push(p);
  }


  update();

  function update(){
    context.clearRect(0, 0, width, height);

    for(var i = 0; i < 1000; i++){
      var p = particles[i];
      p.update();
      context.beginPath();
      context.arc(p.position.getX(), p.position.getY(), 2, 0, Math.PI * 2, false);
      context.fill();
    }

    requestAnimationFrame(update);
  }

};
