/*
    class 키워드
    클래스 이름은 생성자 함수와 마찬가지로 파스칼 케이스를 사용하는 것이 일반적이다.
    파스칼 케이스를 사용하지 않아도 에러가 발생하지 않는다.

    클래스는 클래스 선언문 이전에 참조할 수 없다.

    클래스는 var 키워드로 선언한 변수처럼 호이스팅 되지 않고 let, const 키워드로 선언한
    변수처럼 호이스팅 된다. 따라서 클래스 선언문 이전에 일시적 사각지대에 빠지기 때문에
    호이스팅이 발생하지 않는것처럼 동작한다.

    일반적이지 않지만, 표현식으로도 클래스를 정의할 수 있다. 함수와 마찬가지로 클래스는 이름을 가질 수도
    갖지 않을 수도 있다. 이때 클래스가 할당된 변수를 사용해 클래스를 생성하지 않고 기명 클래스의 클래스 이름을
    사용해 클래스를 생성하면 에러가 발생한다. 이는 함수와 마찬가지로 클래스 표현식에서 사용한 클래스 이름은
    외부 코드에서 접근 불가능하기 때문이다.
*/
class Person {
    // constructor 생성자
    constructor(name) {
        this._name = name;
    }

    sayHi() {
        console.log(`Hi ${this._name}`);
    }
}

// 인스턴스 생성
const me = new Person('Lee');
me.sayHi();//Hi Lee

console.log(me instanceof Person); //true

// --------------------------------------------
// 클래스명 MyClass는 함수 표현식과 동일하게 클래스 몸체 내부에서만 유효한 식별자이다.
const Foo = class MyClass {};

const foo = new Foo();
console.log(foo); // MyClass {}

new MyClass();