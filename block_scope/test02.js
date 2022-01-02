// 변수 중복 선언 금지
var foo = 123;
var foo = 456;  // 중복 선언 허용

let bar = 123;
let bar = 456;  // Uncaught SyntaxError: Identifier 'bar' has already been declared
/*
    var 키워드로는 동일한 이름을 갖는 변수를 중복해서 선언할 수 있었다.
    하지만, let 키워드로는 동일한 이름을 갖는 변수를 중복해서 선언할 수 없다.
    변수를 중복 선언하면 문법 에러가 발생한다.
*/

// 호이스팅
console.log(foo); // undefined
var foo;

console.log(bar); // Error: Uncaught ReferenceError: bar is not defined
let bar;
/*
    자바스크립트는 ES6에서 도입된 let, const를 포함하여 모든 선언을 호이스팅한다.
    호이스팅이란 var 선언문이나 function 선언문 등을 해당 스코프의 선두로 옮긴 것처럼 동작하는 특성을 말한다.

    하지만 var 키워드로 선언된 변수와는 달리 let 키워드로 선언된 변수를 선언문 이전에 참조하면 참조 에러가 발생한다.
    이는 let 키워드로 선언된 변수는 스코프의 시작에서 변수의 선언까지 일시적 사각지대에 빠지기 때문이다.

    var 키워드로 선언된 변수는 선언 단계와 초기화 단계가 한번에 이루어진다.
    즉, 스코프에 변수를 등록하고 메모리에 변수를 위한 공간을 확보한 후, undefined로 초기화 한다.
    따라서 변수 선언문 이전에 변수에 접근하여도 스코프에 변수가 존재하기 때문에 에러가 발생하지 않고 undefined 를 반환한다.
    이후 변수 할당문에 도달하면 비로소 값이 할당된다.

    let 키워드로 선언된 변수는 선언 단계와 초기화 단계가 분리되어 진행된다.
    즉, 스코프에 변수를 등록 하지만 초기화 단계는 변수 선언문에 도달했을 때 이루어진다.
    초기화 이전에 변수에 접근하려고 하면 참조 에러가 발생한다.
    이는 변수가 아직 초기화되지 않았기 때문이다.(변수를 위한 메모리 공간이 아직 확보되지 않음)
    따라서 스코프의 시작 지점부터 초기화 시작 지점까지는 변수를 참조할 수 없다. 
    스코프의 시작 지점부터 초기화 시작 지점까지의 구간을 일시적 사각지대라고 부른다.
*/
// 스코프의 선두에서 선언 단계가 실행된다.
// 아직 변수가 초기화(메모리 공간 확보와 undefined로 초기화)되지 않았다.
// 따라서 변수 선언문 이전에 변수를 참조할 수 없다.
console.log(foo); // ReferenceError: foo is not defined

let foo; // 변수 선언문에서 초기화 단계가 실행된다.
console.log(foo); // undefined

foo = 1; // 할당문에서 할당 단계가 실행된다.
console.log(foo); // 1

/*
    ES6의 let으로 선언된 변수는 블록 레벨 스코프를 가지므로 코드 블록 내에서 선언된 변수 foo는 지역 변수이다. 
    따라서 지역 변수 foo도 해당 스코프에서 호이스팅되고 코드 블록의 선두부터 초기화가 이루어지는 지점까지 일시적 사각지대(TDZ)에 빠진다. 
    따라서 전역 변수 foo의 값이 출력되지 않고 참조 에러(ReferenceError)가 발생한다.
*/
let foo = 1; // 전역 변수

{
  console.log(foo); // ReferenceError: foo is not defined
  let foo = 2; // 지역 변수
}