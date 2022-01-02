var funcs = []; 

/*
i 가 전역변수 이기 때문에 결과가 3이 세번 출력된다.
// 함수의 배열을 생성하는 for 루프의 i는 전역 변수다.
for (var i = 0; i < 3; i++) {
    funcs.push(function () { console.log(i); });
    
} 

// 배열에서 함수를 꺼내어 호출한다.
for (var j = 0; j < 3; j++) {
    funcs[j]();
} 
*/

/*
해결법. 클로저를 활용한 방법
// i는 전역 변수이다.
for(var i = 0; i < 3 ; i++) {
    (function (index) { // index는 자유변수이다.
        funcs.push(function () {console.log(index);});
    }(i));
}

for(var j = 0; j < 3; j++) {
    funcs[j]();
}
*/

/*
해결법. let 키워드를 사용한다.
let으로 선언되어 블록에서만 유효한 지역 변수이면서 자유 변수이다.
i는 자유변수로서 for 루프의 생명주기가 종료되어도 변수 i를 참조하는 함수가
존재하는 한 계속 유지된다.
for(let i = 0; i < 3; i++) {
    funcs.push(function () {console.log(i);});
}

for(var j = 0; j < 3; j++) {
    console.dir(funcs[j]);
    funcs[j]();
}
*/
