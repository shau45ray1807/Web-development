console.log("Hey, this tutorial 55 of JavaScript");

// var a = 10;
// var b = 15;
// var c = "Shauray"
let a = 10;
// a = a + 1; This is allowed 
let b = 15;
let c = "Shauray"
// var 45a = "Rohit Sharma" [This is not allowed in JavaScript beacuse of variables cannot satart with number] 

// console.log(a + b + 45)
// console.log(typeof a, typeof b, typeof c)

// let hota hai block scope toh jo block ke under decaler kiya gaya hoga usko hi show karega bahar wala nahi
{
    let a = 45;
    console.log(a)
}

console.log(a)
// not allowed in JavaScript because of the variable a1 is declared as a constant using the 'const' keyword, which means its value cannot be changed of after it has been assigned. In, this case, your are trying to reassing a new value to a1, which is not allowed and will result in a TypeError.

// const a1 = 10;
// a1 = a1 + 1;


let x = "Shauray";
let y = 45;
let z = 4.05;
const p = true;
let q = undefined;
let r = null;

console.log(x, y, z, p, q, r);
console.log(typeof x, typeof y, typeof z, typeof p, typeof q, typeof r);

let o = {
    name: "Shauray",
    "Jod Code": 4500,
    "is_handsome": true
}

console.log(o);
o.salary = "100crores";
console.log(o);
o.salary = "500crores"
console.log(o)
