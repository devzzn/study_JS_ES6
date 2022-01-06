/*
    getter
    클래스 필드에 접근할 때마다 클래스 필드의 값을 조작하는 행위가 필요할 때 사용
    getter 는 메소드 이름 앞에 get키워드를 사용해 정의한다.
    이때 메소드 이름은 클래스 필드 이름처럼 사용된다. 다시 말해 getter는 호출하는 것이
    아니라 프로퍼티처럼 참조하는 형식으로 사용하며 참조 시에 메소드가 호출된다.
    getter는 이름 그대로 무언가를 취득할 때 사용하므로 반드시 무언가를 반환해야 한다.
*/
class Foo {
    constructor(arr = []) {
        this._arr = arr;
    }

    // getter : get 키워드 뒤에 오는 메소드 이름 firstElem은 클래스 필드 이름처럼 사용한다.
    get firstElem() {
        // getter는 반드시 무언가를 반환해야 한다.
        return this._arr.length ? this._arr[0] : null;
    }
}

const foo = new Foo([1,2]);
// 필드 firstElem에 접근하면 getter가 호출된다.
console.log(foo.firstElem);

/*
    setter
    setter는 클래스 필드에 값을 할당할 때마다 클래스 필드의 값을 조작하는 행위가 필요할 때 사용한다.
    setter는 메소드 이름 앞에 set 키워드를 사용해 정의한다.
    이때 메소드 이름은 클래스 필드 이름처럼 사용된다. 다시 말해 setter는 호출하는 것이 아니라
    프로퍼티처럼 값을 할당하는 형식으로 사용하며 할당 시에 메소드가 호출된다.
*/
class Foo2 {
    constructor(arr = []) {
        this._arr = arr;
    }

    // getter : get 키워드 뒤에 오는 메소드 이름 firstElem은 클래스 필드 이름처럼 사용한다.
    get firstElem() {
        // getter는 반드시 무언가를 반환해야 한다.
        return this._arr.length ? this._arr[0] : null;
    }

    // setter : set 키워드 뒤에 오는 메소드 이름 firstElem은 클래스 필드 이름처럼 사용된다.
    set firstElem(elem) {
        // ...this._arr은 this._arr를 개별 요소로 분리한다.
        this._arr = [elem, ...this._arr];
    }
}

const foo2 = new Foo2([1,2]);

// 클래스 필드 lastElem에 값을 할당하면 setter가 호출된다.
foo2.firstElem = 100;
console.log(foo2.firstElem); // 100

//-------------------------------------------------------
// getter와 setter는 클래스에서 새롭게 도입된 기능이 아니다.
// getter와 setter는 접근자 프로퍼티 이다.
// _arr은 데이터 프로퍼티이다.
console.log(Object.getOwnPropertyDescriptor(foo, '_arr'));
// {value: Array(2), writable: true, enumerable: true, configurable: true}

// firstElem은 접근자 프로퍼티이다. 접근자 프로퍼티는 프로토타입의 프로퍼티이다.
console.log(Object.getOwnPropertyDescriptor(Foo.prototype, 'firstElem'));
// {get: ƒ, set: ƒ, enumerable: false, configurable: true}
