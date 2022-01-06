/*
    export 키워드
    모듈은 독자적 모듈 스코프를 갖기 때문에 모듈 안에 선언한 모든 식별자는 기본적으로 해당 모듈
    내부에서만 참조할 수 있다. 만약 모듈 안에 선언한 식별자를 외부에 공개하여 다른 모듈들이 
    참조할 수 있게 하고 싶다면 export 키워드를 사용한다.

    선언된 변수, 함수, 클래스 모두 export할 수 있다.
*/
// lib.mjs
// 변수의 공개
export const pi = Math.PI;

// 함수의 공개
export function square(x) {
  return x * x;
}

// 클래스의 공개
export class Person {
  constructor(name) {
    this.name = name;
  }
}
// -------------------------------------------------------------------
// 선언문 앞에 매번 export 키워드를 붙이는 것이 싫다면 export 대상을 모아 하나의 객체로 구성하여 한번에 export할 수도 있다.
// 변수, 함수 클래스를 하나의 객체로 구성하여 공개
// lib.mjs
const pi = Math.PI;

function square(x) {
  return x * x;
}

class Person {
  constructor(name) {
    this.name = name;
  }
}
export { pi, square, Person };
