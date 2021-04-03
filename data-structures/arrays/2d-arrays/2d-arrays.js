// Complete the hourglassSum function below.
function hourglassSum(arr) {
  let maxHourglassSum = null;
  for (let i = 0; i < arr.length - 2; i++) {
      for(let j = 0; j < arr.length - 2; j++) {
          let hourglassSum = arr[i][j] + arr[i + 2][j] + arr[i][j + 1] + arr[i + 1][j + 1] + arr[i + 2][j + 1] + arr[i][j + 2] + arr[i + 2][j + 2];
          maxHourglassSum = maxHourglassSum < hourglassSum || maxHourglassSum === null ? hourglassSum : maxHourglassSum;
      }
  }
  return maxHourglassSum;
}
