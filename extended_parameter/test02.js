/*
    Rest 파라미터
    매개변수 이름 앞에 세개의 점을 붙여서 정의한 매개변수를 의미.
    함수에 전달된 인수들의 목록을 배열로 전달받는다.
*/
function foo(...rest) {
    console.log(Array.isArray(rest)); //true
    console.log(rest); // [1, 2, 3, 4, 5]
}

foo(1,2,3,4,5);

// Rest 파라미터는 이름 그대로 먼저 선언된 파라미터에 할당된 인수를 제외한 나머지
// 인수들이 모두 배열에 담겨 할당된다.
// 따라서 Rest 파라미터는 반드시 마지막 파라미터여야 한다.
function bar(param1, param2, ...rest) {
    console.log(param1);
    console.log(param2);
    console.log(rest);
}

bar(1, 2, 3, 4, 5);

// Rest 파라미터는 함수 정의 시 선언한 매개변수 개수를 나타내는 함수 객체의 length 프로퍼티에 영향을 주지 않는다.
function foo(...rest) {}
console.log(foo.length); // 0

function bar(x, ...rest) {}
console.log(bar.length); // 1

function baz(x, y, ...rest) {}
console.log(baz.length); // 2