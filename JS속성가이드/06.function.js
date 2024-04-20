// * 함수

function showMessage() {
  // 콘솔 창에 출력 용도
  // console.log('안녕 난 자바스크립트야');

  // 실제 이 값을 내뱉어서 어딘가 사용할 용도
  return '안녕 난 자바스크립트야';

  // return이 없으면 콘솔창에 안 나타남
  // '안녕 난 자바스크립트야';
}

// showMessage();
// console.log(showMessage());

// 인자 (parameter)
function sum(a, b) {
  // return
  // 1 + 2;
  // * 결과를 얻고자 한다면 return을 붙여줘야함
  // return 1 + 2;
  return a + b;
}

// sum();

let number = sum(10, 20); // 인수 (argument)

console.log(number);
