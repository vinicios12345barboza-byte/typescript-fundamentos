// let numbers: readonly number[] = [1, 2, 3, 4, 5];
// let numbers: ReadonlyArray<number> = [1, 2, 3, 4, 5];

let numbers: readonly [number, number, number, number, number] = [
  1, 2, 3, 4, 5,
];
// numbers[0] = 30;

let numbersCopy = numbers.map((item) => item * 2);

console.log(numbers);
console.log(numbersCopy);

export default () => {};
