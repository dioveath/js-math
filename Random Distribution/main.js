window.onload = function(){

  var canvas = document.getElementById("canvas"),
  context = canvas.getContext("2d"),
  width = canvas.width = window.innerWidth,
  height = canvas.height = window.innerHeight;

  var RES = 100; // resolution or maximum
  var ITERATION = 5;
  var results = [];

  for(var i = 0; i < RES; i ++){
    results[i] = 0;
  }

  update();

  function update(){
    addToResults();
    draw();
    requestAnimationFrame(update);
  }

  function addToResults(){
    var total = 0;
    for(var i = 0; i < ITERATION; i++){
      total += utils.randomRange(0, RES);
    }

    var result = Math.floor((total) / ITERATION);
    results[result] += 1;
  }

  function draw(){
    var barSize = width / RES;
    for(var i = 0; i < RES; i++){
      var h = - results[i] * 10;
      context.fillRect(i * barSize, height, barSize, h);
    }
  }

};
