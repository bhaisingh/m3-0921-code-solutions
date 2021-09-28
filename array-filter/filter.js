function filter(array, predicate) {
  const returnArray = [];
  for (let i = 0; i < array.length; i++) {
    const resultValue = predicate(array[i], i, array);
    if (resultValue) {
      returnArray.push(array[i]);
    }
  }
  return returnArray;
}
