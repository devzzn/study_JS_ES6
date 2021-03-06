/*
    2019년 5월
    TC39 프로세스의 stage 3 단계에 있는 Class field declarations proposal 과
    Static class features에는 클래스에 관련한 몇가지 표준안이 제안되었다.

    # Field declarations
    # Private field
    # Static public fields

    Chrome 72 이상, Node.js(버전 12 이상)
*/  
class Foo {
    x = 1;            // Field declaration
    #p = 0;           // Private field
    static y = 20;    // Static public field
    static #sp = 30;  // Static private field
    // 2019/5 : Chrome 미구현
    // static #sm() {    // Static private method
    //   console.log('static private method');
    // }
  
    bar() {
      this.#p = 10; // private 필드 참조
      // this.p = 10; // 새로운 public p 필드를 동적 추가한다.
      return this.#p;
    }
}

const foo = new Foo();
console.log(foo); // Foo&nbsp;{#p: 10, x: 1}

console.log(foo.x); // 1
// console.log(foo.#p); // SyntaxError: Undefined private field #p: must be declared in an enclosing class
console.log(Foo.y); // 20
// console.log(Foo.#sp); // SyntaxError: Undefined private field #sp: must be declared in an enclosing class
console.log(foo.bar()); // 10