// * 숫자형

// let billion = 1000000000;
// let billion = 1_000_000_000;
// let billion = 1e9;

// console.log(billion);

// * paeseInt와 paeseFloat

// let width = '200.123px';
// let width = '20e12345px';
// let width = '20.2345px';

// console.log(typeof width);

// 8가지의 자료형 = 각자 가지고 있는 능력들이 있음 -> method

// parseInt();
// parseFloat();

// parseInt : 정수로 해석하여 정수값만 내보내줌
// 중간에 문자가 오게 되면, 그 앞의 숫자까지만 표출
// console.log(parseInt(width));

// parseFloat : paeseInt과 비슷하지만 소수점까지도 표출해줌
// 중간에 문자가 오게 되면, Infinity 무한대 순환
// console.log(parseFloat(width));

// 0부터 1까지의 난수 반환
console.log(Math.random());
// 0부터 100까지의 난수 반환
console.log(Math.random() * 100);
