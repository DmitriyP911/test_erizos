function printSpiral(matrix) {
  const result = [];

  if (matrix.length === 0) {
    return result;
  }

  let rowBegin = 0;
  let rowEnd = matrix.length - 1;
  let colBegin = 0;
  let colEnd = matrix[0].length - 1;

  while (rowBegin <= rowEnd && colBegin <= colEnd) {
    result.push(...matrix[rowBegin].slice(colBegin, colEnd + 1));
    rowBegin += 1;

    for (let i = rowBegin; i <= rowEnd; i += 1) {
      result.push(matrix[i][colEnd]);
    }
    colEnd -= 1;

    if (rowBegin <= rowEnd) {
      result.push(...matrix[rowEnd].slice(colBegin, colEnd + 1).reverse());
      rowEnd -= 1;
    }

    if (colBegin <= colEnd) {
      for (let i = rowEnd; i >= rowBegin; i -= 1) {
        result.push(matrix[i][colBegin]);
      }
      colBegin += 1;
    }
  }

  return result;
}

// or with recursion, but with recursion must be slower

function printSpiralRecursion(matrix, rowBegin = 0, rowEnd = matrix.length - 1, colBegin = 0, colEnd = matrix[0].length - 1, result = []) {
  if (rowBegin > rowEnd || colBegin > colEnd) {
    return result;
  }

  result.push(...matrix[rowBegin].slice(colBegin, colEnd + 1));
  rowBegin += 1;

  for (let i = rowBegin; i <= rowEnd; i += 1) {
    result.push(matrix[i][colEnd]);
  }
  colEnd -= 1;

  if (rowBegin <= rowEnd) {
    result.push(...matrix[rowEnd].slice(colBegin, colEnd + 1).reverse());
    rowEnd -= 1;
  }

  if (colBegin <= colEnd) {
    for (let i = rowEnd; i >= rowBegin; i -= 1) {
      result.push(matrix[i][colBegin]);
    }
    colBegin += 1;
  }

  return printSpiral(matrix, rowBegin, rowEnd, colBegin, colEnd, result);
}

const matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

console.log(printSpiral(matrix));
console.log(printSpiralRecursion(matrix));
