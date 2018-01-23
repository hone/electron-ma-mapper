var mapper = require('../native');

module.exports = function(num_tiles, width, height) {
  return new Uint8Array(mapper.ma_map(num_tiles, width, height))
};
