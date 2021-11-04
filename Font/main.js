window.onload = function(){

  var canvas = document.getElementById("canvas"),
  context = canvas.getContext("2d"),
  width = canvas.width = window.innerWidth,
  height = canvas.height = window.innerHeight;

  context.fillRect(0, 0, width, height);
  context.fillStyle = "white";
  context.font = "20px Arial";
  context.fillText("Testing font here!", width/2, height/2);
  context.font = "italic small-caps bold 12px arial";
  context.fillText("Testing font here! and there", width/2, height/2 + 12);

};
