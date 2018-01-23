const mapper = require('neon-ma-mapper');
const rect_size = 10;
const rect_spacing = 2;

function render(canvas, num_tiles, width, height) {
  var ctx = canvas.getContext("2d");
  var board = mapper(num_tiles, width, height);

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for(var y = 0; y < width; y++) {
    for(var x = 0; x < height; x++) {
      var index = x + y * height;
      var value = board[index];
      console.log(`${x}, ${y}: ${value}`);
      if(value == 1) {
        ctx.fillStyle = 'red';
      } else if(value == 2) {
        ctx.fillStyle = 'black';
      } else {
        ctx.fillStyle = 'white';
      }
      ctx.fillRect(x * (rect_size + rect_spacing), y * (rect_size + rect_spacing), rect_size, rect_size);
    }
  }
}

(function() {
  document.getElementById("generate").onclick = function generateOnClick() {
    var canvas = document.getElementById("screen");
    var num_tiles = parseInt(document.getElementById("num_tiles").value);
    var width = parseInt(document.getElementById("width").value);
    var height = parseInt(document.getElementById("height").value);
    render(canvas, num_tiles, width, height);
  }
})();
