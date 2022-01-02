/*
    화살표 함수는 익명 함수로만 사용할 수 있다.
    따라서 화살표 함수를 호출하기 위해서는 함수 표현식을 사용한다.
*/
// ES5
var pow = function (x) {return x * x};
console.log(pow(10));

// ES6
const pow2 = x => x * x;
console.log(pow2(7));

// 콜백함수
// ES5
var arr = [1, 2, 3];
var pow3 = arr.map(function (x) {
    return x * x;
})
console.log(pow3);

// ES6
const pow4 = arr.map(x => x * x);
console.log(pow4)