const arr: number[] | undefined = [1, 2, 3];

console.log('Typeof de array:', typeof arr);
console.log('Instaceof de array:', arr instanceof Array);
console.log('Array.isArray():', Array.isArray(arr));

if (Array.isArray(arr)) {
  arr.map((item) => {
    console.log(item);
  });
}
