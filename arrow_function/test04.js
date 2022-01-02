/*
    메소드
    화살표 함수로 메소드를 정의하는 것은 피해야 한다.
*/

/*
const person = {
    name: 'Lee',
    sayHi: () => console.log(`Hi ${this.name}`)
};

person.sayHi();

    위 예제의 경우, 메소드로 정의한 화살표 함수 내부의 this는 메소드를 소유한 객체,
    즉 메소드를 호출한 객체를 가리키지 않고 상위 컨택스트인 전역 객체 window를 가리킨다.
    따라서 화살표 함수로 메소드를 정의하는 것은 바람직하지 않다.

    아래 예제는 ES6의 축약 메소드 표현이다.

const person = {
    name: 'Lee',
    sayHi() {
        console.log(`Hi ${this.name}`);
    }
};

person.sayHi();
*/
/*
const person = {
    name: 'Lee',
};

Object.prototype.sayHi = () => console.log(`Hi ${this.name}`);

person.sayHi(); // Hi undefined

    위 예제는 잘못된 예제이다.
    화살표 함수로 객체의 메소드를 정의하였을때 발생한다.
    따라서 prototype에 메소드를 할당하는 경우, 일반 함수를 할당한다.

    아래 예제는 일반 함수를 할당한 것이다.
*/
const person = {
    name: 'Lee',
};
  
Object.prototype.sayHi = function() {
    console.log(`Hi ${this.name}`);
};
  
person.sayHi(); // Hi Lee