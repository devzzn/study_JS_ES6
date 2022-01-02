/*
    function 키워드로 생성한 일반 함수와 화살표 함수의 가장 큰 차이점은 this이다.
*/
/*
    일반 함수의 this
    자바스크립트의 경우 함수 호출 방식에 의해 this에 바인딩할 어떤 객체가 동적으로 결정된다.
    다시 말해, 함수를 선언할 때 this에 바인딩할 객체가 정적으로 결정되는 것이 아니고,
    함수를 호출할 때 함수가 어떻게 호출되었는지에 따라 this에 바인딩할 객체가 동적으로 결정된다.

    콜백 함수 내부의 this는 전역 객체 window를 가리킨다.
*/
/*
function Prefixer(prefix) {
    this.prefix = prefix;
}

Prefixer.prototype.prefixArray = function (arr) {
    // A
    return arr.map(function (x) {
        return this.prefix + ' ' + x; // B
    });
};

var pre = new Prefixer('Hi');
console.log(pre.prefixArray(['Lee', 'Kim'])); // ['undefined Lee', 'undefined Kim']

    A 지점에서의 this는 생성자 함수 Prefixer가 생성한 객체, 즉 생성자 함수의 인스턴스이다.
    B 지점에서 사용한 this 는 아마도 생성자 함수 Prefixer가 생성한 객체 (위 예제의 경우 pre)
    일 것으로 기대하였겠지만, 이곳에서 this는 전역 객체 window를 가리킨다. 이는 생성자 함수와
    객체의 메소드를 제외한 모든 함수(내부 함수, 콜백 함수 포함)내부의 this는 전역 객체를 가리키기
    때문이다.
*/

// 해결 1 : that = this
/*
function Prefixer(prefix){
    this.prefix = prefix;
}

Prefixer.prototype.prefixArray = function (arr) {
    var that = this; // this : Prefixer 생성자 함수의 인스턴스
    return arr.map(function (x) {
        return that.prefix + ' ' + x;
    });
};

var pre = new Prefixer('Hi');
console.log(pre.prefixArray(['Lee', 'Kim']));
*/

// 해결 2 : map(func, this)
/*
function Prefixer(prefix) {
    this.prefix = prefix;
}

Prefixer.prototype.prefixArray = function (arr) {
    return arr.map(function (x) {
        return this.prefix + ' ' + x;
    }, this); // this: Prefixer 생성자 함수의 인스턴스
};

var pre = new Prefixer('Hi');
console.log(pre.prefixArray(['Lee', 'Kim']));
*/

// 해결 3 : bind(this) ES5
/*
function Prefixer(prefix) {
    this.prefix = prefix;
}

Prefixer.prototype.prefixArray = function (arr) {
    return arr.map(function (x) {
        return this.prefix + ' ' + x;
    }.bind(this)); // this: Prefixer 생성자 함수의 인스턴스
};

var pre = new Prefixer('Hi');
console.log(pre.prefixArray(['Lee', 'Kim']));
*/
//------------------------------------------------------------------
/*
    화살표 함수는 함수를 선언할 때 this에 바인딩할 객체가 정적으로 결정된다.
    동적으로 결정되는 일반 함수와는 달리 화살표 함수의 this 언제나 상위 스코프의 this를 가리킨다.
    이를 Lexical this라 한다. 
    화살표 함수의 this 바인딩 객체 결정 방식은 함수의 상위 스코프를 결정하는 방식인 렉시컬 스코프와 유사하다.

    화살표 함수는 call, apply, bind 메소드를 사용하여 this를 변경할 수 없다.
*/

function Prefixer(prefix) {
    this.prefix = prefix;
}

Prefixer.prototype.prefixArray = function (arr) {
    // this는 상위 스코프인 prefixArray 메소드 내의 this를 가리킨다.
    return arr.map(x => `${this.prefix} ${x}`);
};

const pre = new Prefixer('Hi');
console.log(pre.prefixArray(['Lee', 'Kim']));

window.x = 1;
const normal = function () { return this.x; };
const arrow = () => this.x;

console.log(normal.call({ x: 10 })); // 10
console.log(arrow.call({ x: 10 }));  // 1



