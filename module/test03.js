/*
    import 키워드
    모듈에서 공개(export)한 대상을 로드하려면 import 키워드를 사용한다.
    모듈이 export한 식별자로 import하며 ES6 모듈의 파일 확장자를 생략할 수 없다.
*/
// app.mjs
// 같은 폴더 내의 lib.mjs 모듈을 로드.
// lib.mjs 모듈이 export한 식별자로 import한다.
// ES6 모듈의 파일 확장자를 생략할 수 없다.
import { pi, square, Person } from './lib.mjs';

console.log(pi);         // 3.141592653589793
console.log(square(10)); // 100
console.log(new Person('Lee')); // Person { name: 'Lee' }

// --------------------------------------------------------------
// 모듈이 export한 식별자를 각각 지정하지 않고 하나의 이름으로 한꺼번에 import할 수도 있다. 
// 이때 import되는 식별자는 as 뒤에 지정한 이름의 객체에 프로퍼티로 할당된다.
// app.mjs
import * as lib from './lib.mjs';

console.log(lib.pi);         // 3.141592653589793
console.log(lib.square(10)); // 100
console.log(new lib.Person('Lee')); // Person { name: 'Lee' }

//---------------------------------------------------------------
// app.mjs
import { pi as PI, square as sq, Person as P } from './lib.mjs';

console.log(PI);    // 3.141592653589793
console.log(sq(2)); // 4
console.log(new P('Kim')); // Person { name: 'Kim' }

//-------------------------------------------------------------------
// 모듈에서 하나만을 export 할 때는 default 키워드를 사용할 수 있다.
// lib.mjs
export default function (x) {
    return x * x;
}

//-------------------------------------------------------------------
// default를 사용하는 경우, var, let, const는 사용할 수 없다.
// lib.mjs
export default () => {};
// => OK

// export default const foo = () => {};
// => SyntaxError: Unexpected token 'const'

//--------------------------------------------------------------------
// default 키워드와 함께 export한 모듈은 {} 없이 임의의 이름으로 import한다.
// app.mjs
import square from './lib.mjs';

console.log(square(3)); // 9

//---------------------------------------------------------------------
// 브라우저가 지원하는 ES6 모듈 기능을 이용하여 import와 export가 동작
/*
    // lib.mjs
export default x => x * x;
// app.mjs
// 브라우저 환경에서는 모듈의 파일 확장자를 생략할 수 없다.
// 모듈의 파일 확장자는 .mjs를 권장한다.
import square from './lib.mjs';

console.log(square(10)); // 100
<!DOCTYPE html>
<html>
<body>
  <script type="module" src="./lib.js"></script>
  <script type="module" src="./app.js"></script>
</body>
</html>

콘솔에 100 출력 됨.
*/