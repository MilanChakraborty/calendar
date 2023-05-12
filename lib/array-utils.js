const chunk = function(list, size, overlap) {
  if(list.length === 0) return list;
  if(list.length <= overlap) return [list];

  const currentChunk = list.slice(0, size);
  const remaining = list.slice(size - overlap);
  return [currentChunk].concat(chunk(remaining, size, overlap));
}

const sequence = function(n) {
  return new Array(n).fill().map(function(_, i) {
    return i + 1;
  });
};

const repeat = function(filler, size) {
  return new Array(size).fill(filler);
}

exports.sequence = sequence;
exports.chunk = chunk;
exports.repeat = repeat;