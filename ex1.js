//Ex1,2,3,4
function ex1234() {
    let hour = 60 * 60;
    let day = hour * 24;
    let year = 360 * day;
    let userAge = document.getElementById("nhap").value;
    console.log(typeof userAge);
    let kq = userAge * year;
    console.log(kq);
    alert("Số tuổi của bạn tinh bằng giây là :" + kq);
}

// ***************************
// Ex5


// Ex6
function Ex6() {
    let Celrius = document.getElementById("celrius").value;


    let kqq = Celrius * 1.8 + 32;
    console.log(kqq);
    alert("Nhiệt độ được đổi ra F : " + kqq);
}

function Ex7() {

    let a = parseInt(document.getElementById("canha").value);
    
    console.log(typeof a);
    let b = document.getElementById("canhb").value;

    let c = document.getElementById("canhc").value;
    let kq = a * 1 + b * 1 + c * 1;


    alert("Chu vi tam giác là: " + kq);
}

function Ex8() {
    let String = document.getElementById("string").value;
    let res = String.toLocaleLowerCase();
    console.log(res);
    let upp = String.toUpperCase();
    console.log(upp);
    let f = String[0].toUpperCase() + String.substr(1);
    console.log(f);
    let fword = String.substr(0, 5);
    console.log(fword);
    let fletter = String.substr(0,1);
    console.log(fletter);

}
function Ex9(){
    let Name = document.getElementById("Name").value;
    alert("Xin chào "+ Name);
}
function Ex10(){
     console.log(typeof 1);

console.log(typeof 'halo');

console.log(typeof true);

console.log(typeof null);
console.log(typeof undefined);
}