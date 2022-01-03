/*
    매개변수 기본값
    함수를 호출할 때 매개변수의 개수만큼 인수를 전달하는 것이 일반적이지만
    그렇지 않은 경우에도 에러가 발생하지 않는다.
    함수는 매개변수의 개수와 인수의 개수를 체크하지 않으며, 인수가 부족한 경우
    매개변수의 값은 undefined이다.
*/
function sum(x, y) {
    return x + y;
}
  
console.log(sum(1)); // NaN
/*
    ES6
    매개변수 기본값을 사용하여 함수 내에서 수행하던 인수 체크 및 초기화를 간소화
    할 수 있다. 매개변수 기본값은 매개변수에 인수를 전달하지 않았을 경우에만 유효하다.
*/
function sum2(x=0, y =0) {
    return x + y;
}

console.log(sum2(4));

// 매개변수 기본값은 함수 정의 시 선언한 매개변수 개수를 나타내는 함수 객체의 
// length 프로퍼티와 arguments 객체에 영향을 주지 않는다.
function foo(x, y = 0) {
    console.log(arguments);
}

console.log(foo.length);

foo(1);