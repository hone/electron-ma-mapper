var mapper = require('../native');

module.exports = function(num_tiles) {
  return new Uint8Array(mapper.ma_map(num_tiles))
};
