/*
    메소드 축약 표현
    ES5에서 메소드를 선언하려면 프로퍼티 값으로 함수 선언식을 할당한다.
    ES6에서는 메소드를 선언할 때, function 키워드를 생략한 축약 표현을 사용할 수 있다.
*/
// ES5
var obj = {
    name: 'Lee',
    sayHi: function() {
      console.log('Hi! ' + this.name);
    }
  };
  
  obj.sayHi(); // Hi! Lee

// ES6
const obj = {
    name: 'Lee',
    // 메소드 축약 표현
    sayHi() {
      console.log('Hi! ' + this.name);
    }
};
  
obj.sayHi(); // Hi! Lee