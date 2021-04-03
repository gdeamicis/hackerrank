function reverseArray(a) {
  let returnArray = [];
  a.forEach((element, index) => {
      returnArray[a.length - 1 - index] = element;
  });
  return returnArray;
}
