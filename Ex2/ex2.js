// Ex1
let dresser = ['socks','shirts','pants'];
console.log([dresser[2]]);
// Ex2
let odds = [1,3,5,7,9];
let sum = (A,B) => A+B;
console.log(odds.reduce(sum));

// Ex3

var firstName ='Neil';
var middleName = 'deGrasse';
var lastNam = 'Tyson';
var Scientist = [firstName,middleName,lastNam];
console.log(Scientist)

// Ex4,5,6,7,8,9.10

let people=['Teddy','Cathy','Bobby']
console.log(people)
people['1'] = 'Petter'
console.log(people)
people.push('Barry')
console.log(people)
people.unshift('Alice')
console.log(people)
people.splice(3,0,'Jonh','James')
console.log(people)
people.splice(4,1,['Jame',27])
console.log(people)
people.splice(2,1)
people.splice(4,1)
console.log(people)
console.log(people[Math.floor(Math.random() * 7)])
// Ex10


var string = "https://mindx.edu.vn/course/data-for-everyone";
console.log(string)
console.log("Chuỗi cần lấy là: " + string.slice(8, 20));
console.log(string.replace("data-for-everyone", "dataforeveryone"))