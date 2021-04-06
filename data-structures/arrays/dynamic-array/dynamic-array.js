function dynamicArray(n, queries) {
  // Write your code here
  const lastAnswers = [];
  let lastAnswer = 0;
  let arr = new Array(n).fill().map(() => Array());
  
  for (let i = 0; i < queries.length; i++) {
      let [query, x, y] = queries[i].map(element => Number(element));

      if (query === 1) {
          arr[(x ^ lastAnswer) % n].push(y);
      } else {
          lastAnswer = arr[(x ^ lastAnswer) % n][y % (arr[(x ^ lastAnswer) % n].length)];
          lastAnswers.push(lastAnswer);
      }
  }
  return lastAnswers;
}