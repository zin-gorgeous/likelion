// TODO)) array : 배열
// * 배열의 특징
// 1. 순서가 있다
// 2. length가 있다

let arr = ['html', 'css', 'js', 'react', 'vue'];

// console.log(arr);

// 배열의 개수를 알고 싶을 때
// arr.length

// ! ----------- 원형 파괴 메서드 -----------

// * push : 배열의 마지막 요소를 추가
// arr.push('go');

// * pop : 배열의 마지막 요소를 제거
// arr.pop();

// * shift : 배열의 첫 번째 요소를 제거
// arr.shift();

// * unshift : 배열의 첫 번째 요소를 추가
// arr.unshift('go');

// * splice
// 1번째부터 3번째까지 제거
// arr.splice(1, 3);
// 1번째부터 3번째까지 제거하고, go, js 추가
// arr.splice(1, 3, 'go', 'js');

// ! ----------- 원형 파괴 메서드 -----------

// ? 원형을 파괴하지 않고 새로운 무언가를 만들 때 사용(어려움..★)

// * map : 배열을 순환해서 새로운 배열을 만들 때
let map = arr.map(function (item, index) {
  // 모든 item을 순환
  // console.log(item);
  // console.log(item, index);
  // return item + 1;
  return `언어의 이름 : ${item}`;
});

// console.log(map);

// * filter

let number = [10, 100, 1000, 20, 5, 6, 35, 50];

let filter = number.filter(function (item) {
  return item > 10;
});

// let filter = arr.filter(function (item) {
//   return item === 'css';
// });

// console.log(filter);

// * reduce
// acc(accumulate) : 누적하다.
// cur(current) : 현재값
let reduce = number.reduce(function (acc, cur) {
  return acc + cur;
}, 0);

console.log(reduce);

// ? 원형을 파괴하지 않고 새로운 무언가를 만들 때 사용(어려움..★)

// console.log(arr);
