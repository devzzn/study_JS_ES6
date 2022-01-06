/*
    constructor는 인스턴스를 생성하고 클래스 필드를 초기화하기 위한 특수한 메소드이다.
    
    constructor는 클래스 내에 한 개만 존재할 수 있으며 만약 클래스가 2개 이상의 constructor를
    포함하면 문법 에러가 발생한다.
    인스턴스를 생성할 때 new 연산자와 함께 호출하는 것이 바로 constructor이며 constructor의 
    파라미터에 전달한 값은 클래스 필드에 할당한다.

    constructor는 생략할 수 있다.
    constructor를 생략하면 클래스에 constructor() {}를 포함한 것과 동일하게 동작한다.
    즉, 빈 객체를 생성한다. 따라서 인스턴스에 프로퍼티를 추가하려면 인스턴스를 생성한 이후, 프로퍼티를 동적으로 추가해야 한다.

    constructor는 인스턴스 생성과 동시에 클래스 필드의 생성과 초기화를 실행한다.
    따라서 클래스 필드를 초기화해야 한다면 constructor를 생략해서 안된다.

    클래스 필드
    클래스 내부의 캡슐화된 변수를 말한다. 
    데이터 멤버 또는 멤버 변수라고도 부른다.
    클래스 필드는 인스턴스의 프로퍼티 또는 정적 프로퍼티가 될 수 있다.
    자바스크립트의 생성자 함수에서 this에 추가한 프로퍼티를 클래스 기반 객체지향 언어에서는 클래스 필드라 한다.
*/
// 클래스 선언문
class Person {
    // constructor(생성자). 이름을 바꿀 수 없다.
    constructor(name) {
        // this는 클래스가 생성할 인스턴스를 가리킨다.
        // _name은 클래스 필드이다.
        this._name = name;
    }
}

// 인스턴스 생성
const me = new Person('Lee');
console.log(me);

// ----------------------------------------------------
class Foo {}

const foo = new Foo();
console.log(foo);

// 프로퍼티 동적 할당 및 초기화
foo.num = 1;
console.log(foo);

//----------------------------------------------------
class Foo2 {
    // constructor는 인스턴스의 생성과 동시에 클래스 필드의 생성과 초기화를 실행한다.
    constructor(num) {
        this.num = num;
    }
}

const foo2 = new Foo2(1);
console.log(foo2);