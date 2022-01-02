/*
    생성자 함수
    화살표 함수는 생성자 함수로 사용할 수 없다.
    생성자 함수는 prototype 프로퍼티를 가지며 prototype 프로퍼티가 가리키는 프로토타입
    객체의 constructor를 사용한다. 하지만 화살표 함수는 prototype 프로퍼티를 가지고 있지 않다.
*/
const Foo = () => {};

// 화살표 함수는 prototype 프로퍼티가 없다
console.log(Foo.hasOwnProperty('prototype')); // false

const foo = new Foo(); // TypeError: Foo is not a constructor

/*
    addEventListener 함수의 콜백 함수
    addEventListener 함수의 콜백 함수를 화살표 함수로 정의하면 this가 상위
    컨텍스트인 전역 객체 window를 가리킨다.

    따라서 addEvnetListener 함수의 콜백 함수 내에서 this를 사용하는 경우,
    function 키워드로 정의한 일반함수를 사용해야 한다.
    일반 함수로 정의된 addEvnetListener 함수의 콜백 함수 내부의 this는
    이벤트 리스너에 바인딩된 요소(currentTarget)를 가리킨다.
*/
/*
// Bad
var button = document.getElementById('myButton');

button.addEventListener('click', () => {
  console.log(this === window); // => true
  this.innerHTML = 'Clicked button';
});
*/
var button = document.getElementById('myButton');

button.addEventListener('click', function() {
  console.log(this === button); // => true
  this.innerHTML = 'Clicked button';
});