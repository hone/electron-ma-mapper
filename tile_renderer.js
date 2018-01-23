const mapper = require('neon-ma-mapper');
const rect_size = 30;
const rect_spacing = 5;

function render(ctx, num_tiles) {
  var board = mapper(num_tiles);

  for(var y = 0; y < num_tiles; y++) {
    for(var x = 0; x < num_tiles; x++) {
      var index = x + y * num_tiles;
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
  var myCanvas = document.getElementById("screen");
  var ctx = myCanvas.getContext("2d");
  render(ctx, 8);
})();
