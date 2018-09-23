module.exports = function solveEquation(equation) {
  let helpArr = [];
  equation.split(' ').forEach((el, i, arr) => {
    if (el === 'x^2') helpArr = [...helpArr, arr[i - 2]];
    else if (el === 'x') helpArr = [...helpArr, arr[i - 3] + arr[i - 2], arr[i + 1] + arr[i + 2]];
  });
  const D = sqrt(Math.pow(helpArr[1], 2) - 4 * helpArr[0] * helpArr[2]);
  return [
    Math.round((-helpArr[1] + D) / (2 * helpArr[0])),
    Math.round((-helpArr[1] - D) / (2 * helpArr[0]))
  ].sort((a, b) => a - b);
};

const sqrt = num => {
  let iter = 1;
  for (;;) {
    let help = (iter + num / iter) / 2;
    if (Math.abs(iter - help) < 1) break;
    iter = help;
  }
  return iter;
};
