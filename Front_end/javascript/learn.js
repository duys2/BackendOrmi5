// 학습, 연습용 js 파일

// function sum(num1, num2, num3) {
//     const result = num1 + num2 + num3;
//     return result;
// }

// console.log(sum(10, 20, 30)); // 60 출력
// console.log(sum(10, 20, '50')); // '60 50' 출력
// console.log(sum(10, 20)); // Error: 인수가 부족합니다.
// console.log(sum(10, 20, 30, 40)); // '60 40' 출력

// (function () { const message = 'Hello, JavaScript!'; console.log(message); })();

// if (wrc > 175) {
//     console.log("리그 폭격");
// }
// else if (wrc > 160) {
//     console.log("리그 최상위권");
// }
// else if (wrc > 130) {
//     console.log("리그 상위권");
// }
// else if (wrc > 100) {
//     console.log("리그 평균");
// }
// else {
//     console.log("리그 평균 이하");
// }

// const My = {
//     name: "ys",
//     age: 26,
//     say: function () {
//         console.log(`안녕하세요, 저는 ${this.name}입니다. ${this.age}살입니다.`);
//     }
// };
// My.say();

// const Player = {
//     hp: 100,
//     moveSpeed: 5,
//     say: function () {
//         console.log("Hello World!"); // Hello World!
//         console.log(this); // Player를 가리킴: {hp: 100, moveSpeed: 5, say: ƒ} 만약 화살표 함수로 했다면 window
//         console.log(this.moveSpeed); // Player의 moveSpeed 프로퍼티: 5
//     }
// }

// const Goblin = {
//     hp: 25,
//     power: 10,
//     attack: function () {
//         console.log("Attack!"); // Attack!
//         Player.hp -= this.power;
//         console.log(this); // Goblin를 가리킴: {hp: 25, power: 10, attack: ƒ}
//         console.log(this.power); // 10: Goblin의 power 프로퍼티
//         console.log(Player.hp); // Player의 hp 프로퍼티 참조
//     }
// }

// // 생성자
// function Person(name, age) {
//     this.name = name;
//     this.age = age;

//     this.introduce = function () {
//         console.log(`안녕하세요, 저는 ${this.name}입니다. ${this.age}살입니다.`);
//     };
// }

// // 생성자로 두 객체 생성
// const person1 = new Person('김기태', 28);
// const person2 = new Person('김성표', 24);

// // 생성자를 통해 생성된 두 객체는 같은 프로퍼티를 공유한다.
// console.log(person1); // Person {name: '김기태', age: 28, introduce: ƒ}
// console.log(person2); // Person {name: '김성표', age: 24, introduce: ƒ}

// // 마찬가지로 같은 메소드를 공유한다.
// console.log(person1.introduce()); // 안녕하세요, 저는 김기태입니다. 28살입니다.
// console.log(person2.introduce()); //안녕하세요, 저는 김성표입니다. 24살입니다.

// function Factory() { } // 생성자 정의
// let instance = new Factory(); // 객체 생성
// instance instanceof Factory // 생성자와 객체의 관계 확인: true 출력

// // 생성자
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
//     this.introduce = function () {
//         console.log(`반갑습니다. 저의 이름은 ${this.name}이고, 나이는 ${this.age}살입니다.`);
//     };
// }

// const man = new Person('서진태', 26); // 생성자로 객체(인스턴스) 생성

// console.log(man.name); // 서진태
// console.log(man.age); // 26
// console.log(man.introduce()); // 반갑습니다. 저의 이름은 서진태이고, 나이는 26살입니다.