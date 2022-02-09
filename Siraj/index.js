  let sum=0;
function addNumber(num){
    for(let i=0;i<=num;i++){
        sum=sum+i;
         if(i%2==0)
          console.log(i+" is even number")
       else console.log(i+" is odd number")
    }
    return console.log(sum);
}


function table(num){
  console.log("table of "+num) 
   for(let i=0;i<10;i++)
    {
        console.log(num*(i+1))
    }
}
undefined
table(2)


arr=[1,2,3,"a",false]
(5) [1, 2, 3, 'a', false]
for(let i=0;i<=arr.length;i++)
{
    console.log(typeof arr[i])
}


https://github.com/speedcuber911/newton-1/blob/master/index.js


let arr=[];
for(let i=0;i<=10;i++){
    arr.push(i+1);
}
11
arr["length"]
11
console.log(arr)
VM472:1 (11) [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
undefined


let arr=[1,2,3,4,5,6,7,8,9,10]
let sum=0;  
for(let i=0;i<=arr.length;i++){
    sum+=i;
}
55
console.log(sum)
VM779:1 55




let arr=[1,2,3,4,5,6,7,8,9,10];
 for(let i=0;i<arr.length;i++){
     if(arr[i]%2==0)
         console.log(arr[i]+" is the even element oft thus arry ")
   else
 console.log(arr[i]+" is the odd element of this arry")
}
VM1982:6 1 is the odd element of this arry
VM1982:4 2 is the even element oft thus arry 
VM1982:6 3 is the odd element of this arry
VM1982:4 4 is the even element oft thus arry 
VM1982:6 5 is the odd element of this arry
VM1982:4 6 is the even element oft thus arry 
VM1982:6 7 is the odd element of this arry
VM1982:4 8 is the even element oft thus arry 
VM1982:6 9 is the odd element of this arry
VM1982:4 10 is the even element oft thus arry 




let arr=[1,2,3,4,5,6,7,8,9,10];
 for(let i=0;i<arr.length;i++){
     (arr[i]%2==0)?console.log(arr[i]+" is even"):console.log(arr[i]+" is odd")
   
}
VM2262:3 1 is odd
VM2262:3 2 is even
VM2262:3 3 is odd
VM2262:3 4 is even
VM2262:3 5 is odd
VM2262:3 6 is even
VM2262:3 7 is odd
VM2262:3 8 is even
VM2262:3 9 is odd
VM2262:3 10 is even



let arr=[1,2,3,4,5,6,7,8,9]
 for(let i=0;i<6;i++){
     arr.pop();
 }
4
arr
(3) [1, 2, 3]


let arr=[1,2,3,4,5,6,7,8,9]
 for(let i=0;i<3;i++){
     arr.shift();
 }

console.log(arr)
VM3076:6 (6) [4, 5, 6, 7, 8, 9]

let arr=[1,2,3,4,5,6,7,8,9]
 for(let i=0;i<3;i++){
     arr.unshift(8);
 }

console.log(arr)
VM3098:6 (12) [8, 8, 8, 1, 2, 3, 4, 5, 6, 7, 8, 9]
undefined


let arr=[1,2,3,4,5,6,7,8,9]
 for(let i=0;i<3;i++){
     arr.push(8);
 }

console.log(arr)
VM3144:6 (12) [1, 2, 3, 4, 5, 6, 7, 8, 9, 8, 8, 8]


let arr=[1,2,3,4,5,6,7,8,9]
for(let i=0;i<3;i++)
{ arr.shift()
  arr.pop()
}
console.log(arr)
VM339:6 
(3) [4, 5, 6]
0: 4
1: 5
2: 6
length: 3





let arr=["musta","bb","london",1,2,3,4]
     let str='';
for(let i=0;i<arr.length;i++){
    str+=arr[i];
}
'mustabblondon1234'



let arr=[1,2,3,4,5,6,7,8]

function findNum(num){ 

for(let i=0;i<arr.length;i++){
   if(arr[i]===num){
     console.log("the number is exist in the arry")
    }

}
 
}
undefined
findNum(8)
VM1663:6 the number is exist in the arry



let arr=[1,2,3,4,5,6,7,8,9,10,11]
ss=arr.slice(2,8)
console.log(ss)
console.log(arr)
VM2251:3 (6) [3, 4, 5, 6, 7, 8]
VM2251:4 (11) [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

let arr=[1,2,3,4,5,6,7,8,9,10,11]
ss=arr.slice(0,3)
console.log(ss)
VM1925:3 (3) [1, 2, 3]
undefined
let arr=[1,2,3,4,5,6,7,8,9,10,11]
ss=arr.slice(0,8)
console.log(ss)
VM1939:3 (8) [1, 2, 3, 4, 5, 6, 7, 8]
undefined
let arr=[1,2,3,4,5,6,7,8,9,10,11]
ss=arr.slice(2,8)
console.log(ss)
VM1960:3 (6) [3, 4, 5, 6, 7, 8]




let arr=[1,2,3,4,5,6,7,8,9,10,11]
spl=arr.splice(0,1)
[1]
let arr=[1,2,3,4,5,6,7,8,9,10,11]
spl=arr.splice(0,1)
console.log(spl)
VM2135:3 [1]
undefined
let arr=[1,2,3,4,5,6,7,8,9,10,11]
spl=arr.splice(0,1)
console.log(spl)
console.log(arr)


VM2174:3 [1]
VM2174:4 (10) [2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
undefined
let arr=[1,2,3,4,5,6,7,8,9,10,11]
spl=arr.splice(2,3)
console.log(spl)
console.log(arr)


VM2190:3 (3) [3, 4, 5]
VM2190:4 (8) [1, 2, 6, 7, 8, 9, 10, 11]
undefined
let arr=[1,2,3,4,5,6,7,8,9,10,11]
spl=arr.splice(2,0)
console.log(spl)
console.log(arr)


VM2199:3 []
VM2199:4 (11) [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
undefined
let arr=[1,2,3,4,5,6,7,8,9,10,11]
spl=arr.splice(2,1)
console.log(spl)
console.log(arr)


VM2211:3 [3]
VM2211:4 (10) [1, 2, 4, 5, 6, 7, 8, 9, 10, 11]



function tableOf(number,till){
 console.log("the table of"+number+ "till"+till)
        for(let i=0;i<till;i++){
            console.log(number*(i+1))
        }
}
undefined
tableOf(6,15)
VM2922:2 the table of6till15
VM2922:4 6
VM2922:4 12
VM2922:4 18
VM2922:4 24
VM2922:4 30
VM2922:4 36
VM2922:4 42
VM2922:4 48
VM2922:4 54
VM2922:4 60
VM2922:4 66
VM2922:4 72
VM2922:4 78
VM2922:4 84
VM2922:4 90




let a=4;
let b="25"
console.log(a+b);
VM3164:3 425
undefined
let a=4;
let b=true
console.log(a+b);
VM3178:3 5
undefined
let a=4;
let b=false
console.log(a+b);
VM3193:3 4
undefined
let a="44";
let b=77;
console.log(a+b);
VM3211:3 4477
undefined
let a="siraj";
let b=6
console.log(a+b);
VM3234:3 siraj6
undefined
let a="7";
let b=6
console.log(a-b);
VM3254:3 1
undefined
let a="7";
let b="5"
console.log(a-b);
VM3261:3 2
undefined
let a=7;
let b="5"
console.log(a-b);
VM3266:3 2
undefined




let str="sirajul mondal"
undefined
subs=str.substr()
console.log(subs)
VM3703:2 sirajul mondal
undefined
subs=str.substr(2,5)
console.log(subs)
VM3714:2 rajul



subs=str.toLocaleLowerCase()
console.log(subs)
VM3760:2 sirajul mondal
undefined
subs=str.toLocaleUpperCase()
console.log(subs)
VM3784:2 SIRAJUL MON



Arrow functions allow us to write shorter function syntax:

let myFunction=(a,b)=>  a*b;
undefined
var hello=function(){
  return "hellow world";}
undefined
hello
ƒ (){
  return "hellow world";}
hello()
'hellow world'
var hello=function(a,b){
  return "hellow world"+ a*b;
}
undefined
hello(5,6)
'hellow world30'
var hello=function(a,b){
  return "hellow world " + a*b;
}
undefined
hello(5,6)
'hellow world 30'
function hello(a,b){
  return "hellow world "+a*b;
}
undefined
hello(5,6)
'hellow world 30'



let hello2=()=> {
return "hellow world";
}
undefined
hello2
()=> {
return "hellow world";
}
hello2()
'hellow world'
var hellow3=()=> "hellow world"
undefined
hellow3()
'hellow world'


let fun=(val) => "value is = "+val;
undefined
fun(88)
'value is = 88'
let fun2= val => "for one parameter there is no used to parenthesisi "+val;
undefined
fun2(100)
'for one parameter there is no used to parenthesisi 100'


Arrow function is one of the features introduced in the ES6 version of JavaScript. It allows you to create functions in a cleaner way compared to regular functions. For example,

let x= (a,b)=> a*b;




let fun4=()=> console.log("empty parameter or argument");
undefined
fun4()
VM1195:1 empty parameter or argument
undefined
let fun5 = x => console.log("one argument");
undefined
fun5("hellow")
VM1357:1 one argument
undefined
let fun5 = x => console.log("one argument" + x);
undefined
fun5("hellow")
VM1516:1 one argumenthellow
undefined
let fun5 = x => console.log("one argument "  + x);
undefined
fun5("hellow")
VM1537:1 one argument hellow
undefined



var age=20;
let ageC = (age>18)?console.log("adult"):console
VM1688:2 adult
undefined
var age=20;
let ageC = (age>18)?console.log("adult"):console.log("baby");
VM1728:2 adult
undefined
var age=20;
let ageC = (age>18)?()=> console.log("adult"):()=> console.log("baby");
undefined
ageC()

VM1740:2 adult


let addition = (a,b) =>{
  let result =a+b;
   return result; 
}

undefined
addition(4,5)
9
console.log(addition)
VM1998:1 (a,b) =>{
  let result =a+b;
   return result; 
}
undefined
let finalResult=addition(4,5)
undefined
console.log(finalResult)
VM2117:1 9



let reverseString = (str) => str.split("")
undefined
reverseString("sirajul")
(7) ['s', 'i', 'r', 'a', 'j', 'u', 'l']



let splt=reverseString("sirajul")
undefined
let rev=splt.reverse()
undefined
console.log(rev)
VM2516:1 (7) ['l', 'u', 'j', 'a', 'r', 'i', 's']
undefined

let joint= rev.join("")
undefined
console.log(joint)
VM2639:1 lujaris
undefined

let strRev = str => str.split("").reverse().join("")
undefined
console.log(strRev("sirajul mondal"))
VM2865:1 ladnom lujaris
un

forEach() is an iteration method, and it is mainly used for the serial execution of functionality against a list of elements.



let arr=[1,2,3,4,5,6,7,8,9]
 arr.forEach((elem,index) => {
    if(elem%2==1) 
    console.log(elem,"is at index ", index);

 })
VM3177:4 1 'is at index ' 0
VM3177:4 3 'is at index ' 2
VM3177:4 5 'is at index ' 4
VM3177:4 7 'is at index ' 6
VM3177:4 9 'is at index ' 8



let arr=[1,2,3,4,5,6,7,8,9]
let countThenoofodd=0; 
arr.forEach((elem,index) => {
    if(elem%2==1) 
    countThenoofodd++;
    console.log(elem,"is at index ", index);

 })
console.log("The number of odd is = "+countThenoofodd)
VM3394:6 1 'is at index ' 0
VM3394:6 2 'is at index ' 1
VM3394:6 3 'is at index ' 2
VM3394:6 4 'is at index ' 3
VM3394:6 5 'is at index ' 4
VM3394:6 6 'is at index ' 5
VM3394:6 7 'is at index ' 6
VM3394:6 8 'is at index ' 7
VM3394:6 9 'is at index ' 8
VM3394:9 The number of odd is = 5
undefined




The filter() method creates a new array filled with elements that pass a test provided by a function.

The filter() method does not execute the function for empty elements.

The filter() method does not change the original array.



const ages=[12,25,5,44,70]
const result=ages.filter(cheikAdult)

function cheikAdult(age){
 return age >= 18;
}
undefined
console.log(result)
VM3821:1 (3) [25, 44, 70]



const ages=[12,25,5,44,70]
const result=ages.filter( age =>{ return age >=18})
undefined
console.log(result)
VM4026:1 (3) [25, 44, 70]




map() creates a new array from calling a function for every array element.

map() calls a function once for each element in an array.

map() does not execute the function for empty elements.

map() does not change the original array.


let arr=[1,2,3,4,5,6]
const result=arr.map(elem =>{return 3*elem})
undefined
console.log(result)
VM4260:1 (6) [3, 6, 9, 12, 15, 18]
undefined


The find() method returns the value of the first element that passes a test.

The find() method executes a function for each array element.

The find() method retuns undefined if no elements are found.

The find() method does not execute the function for empty elements.

The find() method does not change the original array.



let arr=[1,2,3,4,5,6]
const result=arr.find(elem =>{return elem >5 })
console.log(result)
 6


let arr=[11,22,33,44,55,66,77]
const resultIndex=arr.findIndex(el => {return el>25})
undefined
console.log(resultIndex)
 2



let arr=[1,2,3,4,5,6,7,8,9]
const result=arr.some(el => {return el>2})
undefined
console.log(result)
 true
undefined
let arr=[1,2,3,4,5,6,7,8,9]
const result=arr.some(el =>  el%2)
undefined
console.log(result)
 true



 let arr=[1,2,3,4,5,6,7,8,9]
const result=arr.every(el => el>2)
undefined
console.log(result)
false
undefined
let arr=[1,2,3,4,5,6,7,8,9]
const result=arr.every(el => el%2)
undefined
console.log(result)
 false





let closerM= num1 => num2=> num1+num2
undefined
closerM(5)(6)
11






//math

console.log(Math.round(5.55))
6
console.log(Math.round(5.25))
5

console.log(Math.ceil(5.85))//if 5.0 then it will be 5 but if 5.1-5.9 then it will be 6
6
console.log(Math.ceil(5.11))
6

console.log(Math.floor(5.1))//it return a decimal value
5
console.log(Math.floor(5.9))
5

console.log(Math.trunc(5.9))
VM5875:1 5
undefined
console.log(Math.trunc(5.1))
VM5884:1 5
undefined
console.log(Math.trunc(5.1341))
VM5895:1 console.log(Math.trunc(5.9))
VM5875:1 5
undefined
console.log(Math.trunc(5.1))
VM5884:1 5
undefined
console.log(Math.trunc(5.1341))
5
console.log(Math.sign(5.1341))
1
console.log(Math.sign(5.1341))
1
console.log(Math.sign(-5.1341))
-1

console.log(Math.pow(5,2))
VM6070:1 25

console.log(Math.sqrt(5,2))
VM6110:1 2.23606797749979

console.log(Math.max(5,2))
VM6147:1 5
undefined
console.log(Math.min(5,2))
VM6173:1 2


console.log(Math.random(5,2))
VM6219:1 0.5681748976727372
undefined
console.log(Math.random(5,2))
VM6224:1 0.6768359893426807
undefined
console.log(Math.random(5,2))
VM6229:1 0.6969464488174442
undefined
console.log(Math.random(5,2))
VM6234:1 0.9587985176437206 



let arr=[1,2,3,4,5,6,7]
 arr.reduce((acc,el)=>{
     if(el%2==0){
       acc.push(el)
    } 
return acc;
 },[])
(3) [2, 4, 6]


The reduce() method executes a reducer function for array element.

The reduce() method returns a single value: the function's accumulated result.

The reduce() method does not execute the function for empty array elements.

The reduce() method does not change the original array.


 function nafis(num1){
  return function nafis2(num2){
     return num1+num2;
  }
}

undefined
nafis()
ƒ nafis2(num2){
     return num1+num2;
  }
nafis(5)
ƒ nafis2(num2){
     return num1+num2;
  }
nafis(5)(10)
15


Closures
A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function’s scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.


function functionOuter(){
  let sum1=5;
     return function functionInner(){
       let sum2=8;
         return sum1+sum2;
     }
}
undefined
functionOuter()
ƒ functionInner(){
       let sum2=8;
         return sum1+sum2;
     }
functionOuter()()
13



All HTML documents must start with a <!DOCTYPE> declaration.

The declaration is not an HTML tag. It is an "information" to the browser about what document type to expect.

In HTML 5, the declaration is simple:

<!DOCTYPE html>


What is The Viewport?
The viewport is the user's visible area of a web page.

The viewport varies with the device, and will be smaller on a mobile phone than on a computer screen.

Before tablets and mobile phones, web pages were designed only for computer screens, and it was common for web pages to have a static design and a fixed size.

Then, when we started surfing the internet using tablets and mobile phones, fixed size web pages were too large to fit the viewport. To fix this, browsers on those devices scaled down the entire web page to fit the screen.

This was not perfect!! But a quick fix.



The <meta> tag defines metadata about an HTML document. Metadata is data (information) about data.

<meta> tags always go inside the <head> element, and are typically used to specify character set, page description, keywords, author of the document, and viewport settings.

Metadata will not be displayed on the page, but is machine parsable.

Metadata is used by browsers (how to display content or reload page), search engines (keywords), and other web services.

There is a method to let web designers take control over the viewport (the user's visible area of a web page), through the <meta> tag (See "Setting The Viewport" example below).



<p>The meter element is used to display a gauge:</p>

<label for="disk_c">Disk usage C:</label>
<meter id="disk_c" value="2" min="0" max="10">2 out of 10</meter><br>

<label for="disk_d">Disk usage D:</label>
<meter id="disk_d" value="0.6">60%</meter>

<p><strong>Note:</strong> The meter tag is not supported in Edge 12 (or earlier).</p>

