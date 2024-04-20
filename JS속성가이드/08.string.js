// * 문자열
// ''
// ""
// `` : 백틱, ES6 문법부터 허용

// let name = 'tiger';
// let age = 25;

let name = prompt('당신의 이름은?');
let age = prompt('당신의 나이는?');

// console.log('안녕 나는 tiger야 내 나이는 25살이야');

// ES5 문법
// console.log('안녕 나는 ' + name + '야 내 나이는 ' + age + '살이야');

// ES6 문법 - template literal
// console.log(`안녕 나는 name이야 내 나이는 age살이야`);
console.log(`안녕 나는 ${name}이야 내 나이는 ${age}살이야`);

// ***

// TODO)) includes : 부분 문자열 포함 여부 검사

let str = 'Widget with id';

// str
// console = 'Widget with id'

// str.includes('id');
// console = true

// str.includes('tiger');
// console = false

// str.includes('with');
// console = true

// if (str.includes('id')) {
//   pass~
// } else {
//   pass~
// }

// TODO)) startsWith, endsWith

// * str.startsWith : 특정 문자열로 시작하는지
// * str.endsWith : 특정 문자열로 끝나는지 여부 확인

// str.startsWith('Wid');
// str.endsWith('get');

// TODO)) 부분 문자열 추출하기 - substring, substr, slice

// let str = "stringify"
// * str.slice(0, 5) : 'strin' 0번째부터 5번째 위치까지 (5번째 위치의 글자는 포함 X)
// * str.slice(0, 1) : 's' 0번째부터 1번째 위치까지 (1번째 위치의 글자는 포함 X)

// slide(start, end) : start부터 end까지(end는 미포함), 음수 허용
// substring(start, end) : start와 end 사이, 음수는 0으로 취급
// substr(start, length) : start부터 length개의 글자, 음수 허용

// * substr는 요즘 사용하지 않는 추세
// 사용 빈도: slice >>> substring >>>>>>>>>>>> substr
