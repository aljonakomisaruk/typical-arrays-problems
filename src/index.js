
exports.min = function min (array) {
  if ((array instanceof Array) && !isFinite(array)){
    return Math.min.apply(0, array);}
    else  return 0;

}

exports.max = function max (array) {
  if ((array instanceof Array) && !isFinite(array)){
  return Math.max.apply(0, array);}
  else  return 0;
}

exports.avg = function avg (array) {
  var summ=0;
  if ((array instanceof Array) && !isFinite(array)){
  for (var i = 0; i < array.length; i++) {
      summ=summ+array[i];
  }
  return summ/i;
  }
  else  return 0;
}
