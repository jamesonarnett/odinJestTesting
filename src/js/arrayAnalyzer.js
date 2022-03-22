const arrayAnalyzer = (arr) => {
  const reducer = (acc, curr) => acc + curr;
  const avg = arr.reduce(reducer) / arr.length;

  const min = Math.min(...arr);
  const max = Math.max(...arr);

  return {
    average: avg,
    min: min,
    max: max,
    length: arr.length,
  };
};

module.exports = arrayAnalyzer;
