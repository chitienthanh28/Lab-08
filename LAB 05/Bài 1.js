function tongGiaTri(...a) {
  return a.reduce((total, value) => total + value, 0);
}

const result1 = tongGiaTri(1, 3, 5, 6, 7);
const result2 = tongGiaTri(10, 15, 20);

console.log(result1);
console.log(result2);
