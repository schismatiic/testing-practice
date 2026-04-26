const analyzeArray = (arr) => {
  let arrayAverage = arr[Math.round(arr.length / 2)];
  let arrayMin = Math.min(...arr);
  let arrayMax = Math.max(...arr);
  const arrayLength = arr.length;

  return {
    average: arrayAverage,
    min: arrayMin,
    max: arrayMax,
    length: arrayLength,
  };
};
export { analyzeArray };
