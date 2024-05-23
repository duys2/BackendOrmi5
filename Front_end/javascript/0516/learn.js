// 객체의 리터럴 표현은 {}로 감싼다.
const me = {
    // 키: 값  :으로 구분
    name: "ys", // 키와 값의 쌍을 프로퍼티라하고 ,로 구분
    age: 26,
    from: "Korea",
    sayFrom: function () { // 프로퍼티 '값'이 함수라면 메소드
        console.log("I'm from Korea!");
    },
    sayAge() { // 이렇게 function 키워드를 생략할 수도 있다.
        console.log("I am 26 years old.");
    }
}

/* 사용 및 결과값. 코드 설명은 위에 주석, 결과값은 오른쪽에 주석 표시 */

// 속성에 접근하려면 객체명.속성이름(키);
console.log(me.age); // 26

// 속성을 추가하려면 객체명.추가할 속성 이름 = 할당할 값;
me.university = "Daegu University";
console.log(me.university); // Daegu University

// 삭제하려면 delete
delete me.university; // 만약 삭제 후 출력하려면? undefined가 출력됨

// in 연산자로 특정 프로퍼티가 객체 내에 존재하는지 판별 가능
console.log('university' in me); // false

// 메소드 호출
me.sayFrom(); // I'm from Korea!
me.sayAge(); // I am 26 years old.


console.log(me.hasOwnProperty('car'));
