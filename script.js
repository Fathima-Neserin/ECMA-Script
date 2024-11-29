// ******************************************************************************************
// var,let & const
// * values of variables decalred by var and let can be changed
// * const remains same as normal javascript, once it is assigned to a variable, the value cannot be changed
var myName = "Fathima";
console.log(myName);
 myName = "Nezrin";
console.log(myName);

let Name = "Fathima";
console.log(Name);
 Name = "Nezrin";
console.log(Name);

const name = "Fathima";
console.log(name);
//  name = "Nezrin";
// console.log(name);

// * outside of the blocks(curly braces) values assigned by let and const cannot accessable.only var access the values anywhere(global variable);

var age = 23;
function mentionAge(){
    if(age == 23){
        console.log(age);
     }
    console.log(age);    
}
mentionAge();
 
var Age = 28;
function mentionAge(){
    if(1){
        let Age = 23
        console.log(Age);
   }
    console.log(Age);    
}
mentionAge();

// **************************************************************************************

// Arrow Funtions
// * Simplified the way of writing function codes
// * We can write even in a single line
// * Don't use return and curly braces when you writing the arrow function in a single line

const multiply = (x, y) => {
    return x * y ;
}
console.log(multiply(5,2));

const mult = (a,b) => a*b ;
console.log(mult(10,10));

// ***************************************************************************************

// for/ of
// * Loop statement
// * simplified way of loops(for,while,do-while)
// giving iterated values foes iterable data structures(Arrays & Strins)

// const colors = [ "Red", "Green", "Blue", "Orange", "Yellow"];

// For loop method
// for(var i = 0; i<colors.length; i++){
//     console.log(colors[i]);
    
// }
const colors = ["Red", "Green", "Blue", "Orange", "Yellow"];

for (let i of colors) {
    console.log(i);
}

const fullName = "Fathima Nezrin";
for(let i of fullName){
    console.log(i);
    
}

// *****************************************************************************************

// Default Parametres
// * used if we forgot to give the values 
// * giving default value to arguments(parametres)
// * will get required result instead of undefined or NaN results

const add = (m,n = 4) => {
    return m+n;
}
console.log(add(5));

// ******************************************************************************************

// Reset Parameter
// * allows a function to treat indefinite number of arguments as an array

const summation = (...a) => {
    console.log(a);
    console.log(a.length);
    console.log(a.push(11));
    console.log(a);
    console.log(a.pop());
    console.log(a);

    let total = 0;
    for(let i of a){
        total+=i;
        console.log(total);
    }
}
summation(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)

// **********************************************************************************************

// Spread Parameter
// simplified method of concatenation

let arr1 = [ "C", "D", "E"];
let arr2 = [ "F", "G", "H"];
const arr3 = [...arr1,...arr2];
console.log(arr3);
const arr4 = ["A", "B", ...arr3];
console.log(arr4);
const arr5 = [...arr4, "I", "J", "K"];
console.log(arr5);
console.log(arr5.pop());
console.log(arr5);

// *************************************************************************************************

// Template Literals
// usage of back ticks in console log just like single quotes or double quotes
let nickName = "Nezri";
let currAge = 23;
console.log(`My name is ${nickName} and  I am ${currAge} years old.`);
 

