/*
    클래스 필드
    클래스 몸체에는 메소드만 선언할 수 있다.
    클래스 바디에 클래스 필드(멤버 변수)를 선언하면 문법 에러가 발생한다.

    constructor 내부에서 선언한 클래스 필드는 클래스가 생성할 인스턴스를 가리키는
    this에 바인딩한다. 이로써 클래스 필드는 클래스가 생성할 인스턴스의 프로퍼티가
    되며, 클래스의 인스턴스를 통해 클래스 외부에서 언제나 참조할 수 있다.(즉 언제나 public이다.)
*/
class Foo {
    // SyntaxError
    name = '';
    constructor() { } 
}

// 클래스 필드의 선언과 초기화는 반드시 constructor 내부에서 실시한다.
class Foo2 {
    constructor(name = '') {
        // public 클래스 필드
        this.name = name; // 클래스 필드의 선언과 초기화
    }
}
const foo = new Foo2('Lee');
console.log(foo);
console.log(foo.name); // 클래스 외부에서 참조할 수 있다.
