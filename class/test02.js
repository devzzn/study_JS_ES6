// new 연산자와 함께 클래스 이름을 호출하면 클래스의 인스턴스가 생성된다.
class Foo {}
const foo = new Foo();
/*
    위 코드에서 new 연산자와 함께 호출한 Foo는 클래스 이름이 아니라 constructor(생성자)이다.
    표현식이 아닌 선언식으로 정의한 클래스의 이름은 constructor와 동일하다.
*/
console.log(Object.getPrototypeOf(foo).constructor === Foo);

// new 연산자를 사용하지 않고 constructor를 호출하면 타입 에러가 발생한다.
// constructor는 new 연산자 없이 호출할 수 없다.
const foo2 = Foo(); // 오류 발생

