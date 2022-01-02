// 전역 객체는 모든 객체의 유일한 최상위 객체를 의미하며 global 객체를 의미한다.
// var 키워드로 선언된 변수를 전역 변수로 사용하면 전역 객체의 프로퍼티가 된다.
var foo = 123; // 전역변수
console.log(window.foo); // 123

let foo = 123; //전역번수
console.log(window.foo); //undefined