function reduce(array, reducer, initialvalue) {
  let totalValue = 0;
  if (typeof initialvalue !== 'undefined') {
    totalValue = initialvalue;
  }
  for (let i = 0; i < array.length; i++) {
    totalValue = reducer(totalValue, array[i], i, array);
  }
  return totalValue;
}
