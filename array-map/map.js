function map(array, transform) {
  const outMapArray = [];
  for (let i = 0; i < array.length; i++) {
    const outValue = transform(array[i], i, array);
    outMapArray.push(outValue);
  }
  return outMapArray;
}
