/*
    클래스 상속
    클래스 상속은 코드 재사용 관점에서 매우 유용하다.
    새롭게 정의할 클래스가 기존에 있는 클래스와 매우 유사하다면, 상속을 통해 그대로 사용하되
    다른 점만 구현하면 된다.
    코드 재사용은 개발 비용을 현저히 줄일 수 있는 잠재력이 있으므로 매우 중요하다.

    오버라이딩
    상위 클래스가 가지고 있는 메소드를 하위 클래스가 재정의하여 사용하는 방식이다.

    오버로딩
    매개변수의 타입 또는 갯수가 다른, 같은 이름의 메소드를 구현하고 매개변수에 의해 메소드를
    구별하여 호출하는 방식이다.
    자바스크립트는 오버로딩을 지원하지 않지만 arguments 객체를 사용하여 구현할 수 있다.

    extends 키워드
    extends 키워드는 부모 클래스를 상속받는 자식 클래스를 정의할 때 사용한다.

    super 키워드
    super 키워드는 부모 클래스를 참조할 때 또는 부모 클래스의 constructor를 호출할 때 사용한다.
    super 메소드는 자식 class의 constructor 내부에서 부모 클래스의 constructor를 호출한다.
    즉, 부모 클래스의 인스턴스를 생성한다. 자식 클래스의 constructor에서 super()를 호출하지 않으면
    this에 대한 참조 에러가 발생한다.

    static 메소드와 prototype 메소드의 상속
    프로토타입 관점에서 바라보면 자식 클래스의 [[Prototype]] 내부 슬롯이 가리키는 프로토타입 객체는 부모 클래스 이다.

*/
// extends 키워드
// 부모 클래스
class Circle {
    constructor(radius) {
      this.radius = radius; // 반지름
    }
  
    // 원의 지름
    getDiameter() {
      return 2 * this.radius;
    }
  
    // 원의 둘레
    getPerimeter() {
      return 2 * Math.PI * this.radius;
    }
  
    // 원의 넓이
    getArea() {
      return Math.PI * Math.pow(this.radius, 2);
    }
}

// 자식 클래스
class Cylinder extends Circle {
    constructor(radius, height) {
        // super 메소드는 부모 클래스의 constructor를 호출하면서 인수를 전달한다.
        super(radius);
        this.height = height;
    }

    // 원통의 넓이: 부모 클래스의 getArea 메소드를 오버라이딩하였다.
    getArea() {
        // (원통의 높이 * 원의 둘레) + (2 * 원의 넓이)
        // super 키워드는 부모 클래스(Base Class)에 대한 참조
        return (this.height * super.getPerimeter()) + (2 * super.getArea());
    }

    // 원통의 부피
    getVolume() {
        // super 키워드는 부모 클래스(Base Class)에 대한 참조
        return super.getArea() * this.height;
    }
}

// 반지름이 2, 높이가 10인 원통
const cylinder = new Cylinder(2, 10);

// 원의 지름
console.log(cylinder.getDiameter());  // 4
// 원의 둘레
console.log(cylinder.getPerimeter()); // 12.566370614359172
// 원통의 넓이
console.log(cylinder.getArea());      // 150.79644737231007
// 원통의 부피
console.log(cylinder.getVolume());    // 125.66370614359172

// cylinder는 Cylinder 클래스의 인스턴스이다.
console.log(cylinder instanceof Cylinder); // true
// cylinder는 Circle 클래스의 인스턴스이다.
console.log(cylinder instanceof Circle);   // true

/*
    프로토타입 체인은 특정 객체의 프로퍼티나 메소드에 접근하려고 할 때 프로퍼티 또는
    메소드가 없다면 [[Prototype]] 내부 슬롯이 가리키는 링크를 따라 자신의 부모 역할을
    하는 프로토타입 객체의 프로퍼티나 메소드를 차례대로 검색한다. 그리고 검색에 성공하면
    그 프로퍼티나 메소드를 사용한다.
*/
console.log(cylinder.__proto__ === Cylinder.prototype); // true
console.log(Cylinder.prototype.__proto__ === Circle.prototype); // true
console.log(Circle.prototype.__proto__ === Object.prototype); // true
console.log(Object.prototype.__proto__ === null); // true

// super 키워드 오류
class Parent {}

class Child extends Parent {
  // ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor
  constructor() {}
}

const child = new Child();
// super 메소드를 호출하기 이전에는 this를 참조할 수 없다.
// super 키워드는 부모 클래스에 대한 참조이다. 부모 클래스의 필드 또는 메소드를 참조하기 위해 사용한다.

//----------------------------------
class Parent {}

class Child extends Parent {}

console.log(Child.__proto__ === Parent); // true
console.log(Child.prototype.__proto__ === Parent.prototype); // true

class Parent {
    static staticMethod() {
      return 'staticMethod';
    }
}

class Child extends Parent {}

console.log(Parent.staticMethod()); // 'staticMethod'
console.log(Child.staticMethod());  // 'staticMethod'

// Prototype chain 에 의해 부모 클래스의 정적 메소드도 상속된다.
/*
    자식 클래스의 정적 메소드 내부에서도 super 키워드를 사용하여 부모 클래스의 정적 메소드를 호출할 수 있다.
    이는 자식 클래스는 프로토타입 체인에 의해 부모 클래스의 정적 메소드를 참조할 수 있기 때문이다.

    하지만 자식 클래스의 일반 메소드 내부에서는 super 키워드를 사용하여 부모 클래스의 정적 메소드를 호출할 수 없다.
    이는 자식 클래스의 인스턴스는 프로토타입 체인에 의해 부모 클래스의 정적 메소드를 참조할 수 없기 때문이다.
*/
class Parent {
    static staticMethod() {
      return 'Hello';
    }
}

class Child extends Parent {
    static staticMethod() {
        return `${super.staticMethod()} wolrd`;
    }

    prototypeMethod() {
        return `${super.staticMethod()} wolrd`;
    }   
}

console.log(Parent.staticMethod()); // 'Hello'
console.log(Child.staticMethod());  // 'Hello wolrd'
console.log(new Child().prototypeMethod());
// TypeError: (intermediate value).staticMethod is not a function