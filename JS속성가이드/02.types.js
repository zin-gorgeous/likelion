// * 숫자
// let n = 123;
// let n2 = 123n;
let age = 25;

// * 문자
// let name = 'tiger' (작은 따옴표)
// let name = "tiger" (큰 따옴표)
// let name = `tiger` (백틱)
let name = 'tiger';

// * 불린
let kind = false;

// * 객체 {} 안에 있어야 함
let user = {
  age: 25,
  name: 'tiger',
  kind: false,
};

// 변수의 타입을 확인하는 방법
// typeof age;
// console.log(typeof user);
// console.log(typeof (age));
console.log(typeof 1 + 2);
console.log(typeof (1 + 2));

// null과 undefined
// null : 존재하지 않는, 비어 있는, 알 수 없는 값
// undefined : 값이 할당되지 않은 상태

// 배열 array

// 함수 function

console.log(user);

// null = object? 하위호환성을 위해 남겨둔 오류
console.log(typeof null);
