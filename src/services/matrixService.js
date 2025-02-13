// services/matrixService.js
const matrixService = {
  calculateMatrixStats: (Q, R) => {
      const matrices = [Q, R];
      const flatValues = matrices.flat(2); // Aplanar matrices

      const max = Math.max(...flatValues);
      const min = Math.min(...flatValues);
      const sum = flatValues.reduce((a, b) => a + b, 0);
      const avg = sum / flatValues.length;

      const isDiagonal = matrices.some(matrix => {
          return matrix.every((row, i) => row.every((val, j) => i === j || val === 0));
      });

      return { max, min, sum, avg, isDiagonal };
  }
};

module.exports = matrixService;