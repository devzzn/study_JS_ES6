/*
    ES5에서는 인자의 개수를 사전에 알 수 없는 가변 인자 함수의 경우, arguments 객체를 통해 인수를 확인한다.
    arguments 객체는 함수 호출 시 전달된 인수들의 정보를 담고 있는 순회가능한 유사 배열 객체이며
    함수 내부에서 지역 변수처럼 사용할 수 있다.
*/
// ES5
var foo = function () {
    console.log(arguments);
};
  
foo(1, 2); // { '0': 1, '1': 2 }

/*
    가변 인자 함수는 파라미터를 통해 인수를 전달받는 것이 불가능하므로 arguments 객체를 활용하여 인수를 전달받는다.
    하지만 arguments 객체는 유사 배열 객체이므로 배열 메소드를 사용하려면 Function.prototype.call을 사용해야 하는 번거로움이 있다.
*/
function sum() {
    var array = Array.prototype.slice.call(arguments);
    return array.reduce(function (pre, cur) {
        return pre + cur;
    });
}
console.log(sum(1, 2, 3, 4, 5)); // 15

/*
    ES6에서는 rest 파라미터를 사용하여 가변 인자의 목록을 배열로 전달받을 수 있다.
    이를 통해 유사 배열인 arguments 객체를 배열로 변환하는 번거로움을 피할 수 있다.


    하지만 ES6 화살표 함수에는 함수 객체의 arguments 프로퍼티가 없다. 따라서 화살표 함수로
    가변 인자 함수를 구현해야 할 때는 반드시 rest 파라미터를 사용해야 한다.
 */
// ES6
function sum(...args) {
    console.log(arguments); // Arguments(5) [1, 2, 3, 4, 5, callee: (...), Symbol(Symbol.iterator): ƒ]
    console.log(Array.isArray(args)); // true
    return args.reduce((pre, cur) => pre + cur);
}
console.log(sum(1, 2, 3, 4, 5)); // 15

var normalFunc = function () {};
console.log(normalFunc.hasOwnProperty('arguments')); // true

const arrowFunc = () => {};
console.log(arrowFunc.hasOwnProperty('arguments')); // false