// * 함수 선언문 (function declaration)
// 함수 선언문은 함수의 선언 이전에 함수를 호출해 사용할 수 있다.
// 함수 내에 선언한 변수는(local variable) 함수 안에서만 접근할 수 있다.
// 함수 내부에선 함수 외부의 변수(outer variable)에 접근할 수 있다.

function eatFood1(food) {
  return `${food} 을(를) 맛있게 먹습니다.`;
}

const breakfast = eatFood1('닭가슴살');

console.log(breakfast);

// * 함수 표현식 (function expression)
// 자바스크립트는 함수를 특별한 종류의 '값'으로 취급한다.
// 따라서 함수도 값처럼 할당, 복사, 선언을 할 수 있다.
// 함수 표현식은 함수의 선언 이전에 함수를 호출해 사용할 수 있다.

// * 화살표 함수 (arrow function)
// 화살표 함수는 본문이 한 줄인 함수를 작성할 때 유용하다.
// 화살표 함수는 리턴문을 생략할 수 있다.

// * 콜백 함수 (callback function)
// 콜백 함수는 다른 함수에 전달되어 나중에 실행되는 함수를 가리킨다.
// 콜백 함수는 함수를 변수로 전달하고, 이를 다른 함수 내에서 호출하여 작업을 수행할 때 주로 사용된다.
