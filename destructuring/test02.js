/*
    객체 디스트럭처링

    ES5에서 객체의 각 프로퍼티를 객체로부터 디스트럭처링하여 변수에 할당하기
    위해서는 프로퍼티 이름(키)을 사용해야 한다.

    ES6의 객체 디스트럭처링은 객체의 각 프로퍼티를 객체로부터 추출하여 변수 리스트에
    할당한다.
    이때 할당 기준은 프로퍼티 이름(키)이다.
*/
// ES5
var obj = { firstName: 'Ungmo', lastName: 'Lee' };

var firstName = obj.firstName;
var lastName  = obj.lastName;

console.log(firstName, lastName); // Ungmo Lee

// ES6 Destructuring
const obj = { firstName: 'Ungmo', lastName: 'Lee' };

// 프로퍼티 키를 기준으로 디스트럭처링 할당이 이루어진다. 순서는 의미가 없다.
// 변수 lastName, firstName가 선언되고 obj(initializer(초기화자))가 Destructuring(비구조화, 파괴)되어 할당된다.
const { lastName, firstName } = obj;

console.log(firstName, lastName); // Ungmo Lee

//----------------------
// 객체 디스트럭처링을 위해서는 할당 연산자 왼쪽에 객체 형태의 변수 리스트가 필요하다.
// 프로퍼티 키가 prop1인 프로퍼티의 값을 변수 p1에 할당
// 프로퍼티 키가 prop2인 프로퍼티의 값을 변수 p2에 할당
const { prop1: p1, prop2: p2 } = { prop1: 'a', prop2: 'b' };
console.log(p1, p2); // 'a' 'b'
console.log({ prop1: p1, prop2: p2 }); // { prop1: 'a', prop2: 'b' }

// 아래는 위의 축약형이다
const { prop1, prop2 } = { prop1: 'a', prop2: 'b' };
console.log({ prop1, prop2 }); // { prop1: 'a', prop2: 'b' }

// default value
const { prop1, prop2, prop3 = 'c' } = { prop1: 'a', prop2: 'b' };
console.log({ prop1, prop2, prop3 }); // { prop1: 'a', prop2: 'b', prop3: 'c' }

//--------------------------------
// 객체 디스트럭처링은 객체에서 프로퍼티 이름(키)으로 필요한 프로퍼티 값만을 추출할 수 있다.
const todos = [
    { id: 1, content: 'HTML', completed: true },
    { id: 2, content: 'CSS', completed: false },
    { id: 3, content: 'JS', completed: false }
];

// todos 배열의 요소인 객체로부터 completed 프로퍼티만을 추출한다.
const completedTodos = todos.filter(({ completed }) => completed);
console.log(completedTodos); // [ { id: 1, content: 'HTML', completed: true } ]

//---------------------------------------
// Array.prototype.filter 메소드의 콜백 함수는 대상 배열(todos)을 순회하며 첫 번째 인자로 대상 배열의 요소를 받는다. 
// 이때 필요한 프로퍼티(completed 프로퍼티)만을 추출할 수 있다.
const person = {
    name: 'Lee',
    address: {
      zipCode: '03068',
      city: 'Seoul'
    }
};

const { address: { city } } = person;
console.log(city); // 'Seoul'
