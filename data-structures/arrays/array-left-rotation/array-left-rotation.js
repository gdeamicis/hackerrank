function rotateLeft(d, arr) {
  for(let i=0; i<d; i++) {
      arr.push(arr.shift());
  }
  return arr;
}

// Explanation: shift removes the first element from an array and returns it. push add the element to the back of the array