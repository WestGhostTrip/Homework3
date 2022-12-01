function getArrayParams(arr) {
  let min,
    max,
    sum = arr[0];
  for (let index = 1; index < arr.length; index++) {
    const element = arr[index];
    if (min > element) min = element;
    if (max < element) max = element;
    sum += element;
  }
  const avg = +(sum / arr.length).toFixed(2);
  return { max, min, sum, avg };
}
