/*
    정적 메소드
    클래스의 정적(static) 메소드를 정의할 때 static 키워드를 사용한다.
    정적 메소드는 클래스의 인스턴스가 아닌 클래스 이름으로 호출한다.
    따라서 클래스의 인스턴스를 생성하지 않아도 호출할 수 있다.

    클래스의 정적 메소드는 인스턴스로 호출할 수 없다. 이것은 정적 메소드는 this를 사용할 
    수 없다는 것을 의미한다. 일반 메소드 내부에서 this는 클래스의 인스턴스를 가리키며, 
    메소드 내부에서 this를 사용한다는 것은 클래스의 인스턴스의 생성을 전제로 하는 것이다.

    정적 메소드는 클래스 이름으로 호출하기 때문에 클래스의 인스턴스를 생성하지 않아도 
    사용할 수 있다. 단, 정적 메소드는 this를 사용할 수 없다. 달리 말하면 메소드 내부에서 this를
    사용할 필요가 없는 메소드는 정적 메소드로 만들 수 있다. 정적 메소드는 Math 객체의 
    메소드처럼 애플리케이션 전역에서 사용할 유틸리티 함수를 생성할 때 주로 사용한다.

*/
class Foo {
    constructor(prop) {
      this.prop = prop;
    }
  
    static staticMethod() {
      /*
      정적 메소드는 this를 사용할 수 없다.
      정적 메소드 내부에서 this는 클래스의 인스턴스가 아닌 클래스 자신을 가리킨다.
      */
      return 'staticMethod';
    }
  
    prototypeMethod() {
      return this.prop;
    }
}

// 정적 메소드는 클래스 이름으로 호출한다.
console.log(Foo.staticMethod());

const foo = new Foo(123);
// 정적 메소드는 인스턴스로 호출할 수 없다.
console.log(foo.staticMethod()); // Uncaught TypeError: foo.staticMethod is not a function

//-------------------------
// 클래스도 함수이다.
class Foo {}

console.log(typeof Foo); // function

