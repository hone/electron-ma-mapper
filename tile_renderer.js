(function() {
  var myCanvas = document.getElementById("screen");
  var ctx = myCanvas.getContext("2d");
  var board = [
    0, 0, 1, 0, 0,
    0, 2, 2, 2, 0,
    0, 0, 2, 0, 0,
    0, 0, 0, 0, 0,
    0, 0, 0, 0, 0
  ];
  var rect_size = 30;
  var num_tiles = 5;
  var rect_spacing = 5;
  for(var y = 0; y < num_tiles; y++) {
    for(var x = 0; x < num_tiles; x++) {
      var index = x + y * num_tiles;
      if(board[index] != 0) {
        ctx.fillStyle = 'black';
        if(board[index] == 1) {
          ctx.fillStyle = 'red';
        }
        ctx.fillRect(x * (rect_size + rect_spacing), y * (rect_size + rect_spacing), rect_size, rect_size);
      }
    }
  }
})();
