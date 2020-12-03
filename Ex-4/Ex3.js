let Arr = [1,2,3,4,5];
console.log(Arr)
let getFirst = function(){ 
Arr[0]= n = parseInt(document.getElementById('number').value) ;
console.log(Arr)
document.getElementById("demo").innerHTML = Arr
}
// Ex4
let last = Arr.length -1
let getLast = function(){ 
    Arr[last]= n = parseInt(document.getElementById('number1').value) ;
    console.log(Arr)
    document.getElementById("demo1").innerHTML = Arr
    }
// Ex5
let arrString = ['Vũ','Hùng','23','Tuổi']
console.log(arrString.toString())
console.log(arrString.join("+"))
// Ex6
const num=window.prompt();
const str = num.toString();
const result = [str[0]];

for(let x=1; x<str.length; x++)
  {
    if((str[x-1]%2 == 0) && (str[x]%2 == 0))
     {
      result.push('-', str[x]);
     }
    else
     {
      result.push(str[x]);
     }
  }
console.log(result.join(''));
// Ex7
let strs = window.prompt();
const UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const LOWER = 'abcdefghijklmnopqrstuvwxyz';
const results = [];
  
  for(let x=0; x<strs.length; x++)
  {
    if(UPPER.includes(strs[x]))
    {
      results.push(strs[x].toLowerCase());
    }
    else if(LOWER.includes(strs[x]))
    {
      results.push(strs[x].toUpperCase());
    }
    else 
    {
      results.push(strs[x]);
    }
  }
console.log(results.join(''));
// Ex8
var array = [1, 2, 3, 4, 5, 6],
    s = 0,
    p = 1,
    i;
for (i = 0; i < array.length; i += 1) 
   {
    s += array[i];
    p *= array[i];
    }
console.log('Tổng : '+s + ' Tích :  ' +p); 

// FUNCTION WITH OBJECT:


