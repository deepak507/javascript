// console.log("hello world");

// var a = prompt("what is your age");
// var b = prompt("which year you born");
// alert(b-a);

// function xyz(one, two){
//    console.log(one + two);

// }

// xyz(2, 3);
// function abc (one, two, three){
//     console.log(one + two - three)
// }
// abc(10,2,2);

/* typeof property
index,length,how to change the index value */

// var name = {"45" , "46" , "47" , "48"}
// a[0]


// function Merge(parm1, parm2) {
//     var a = parm1 + " love " + parm2
//     return a;
// }

// var xyz = Merge("I", "coding");
// console.log(xyz);

// function abc() {
//     console.log(2 + 2);
// }

// abc();
// function Deepak(parm1, parm2) {
//     var b = parm1 + " love " + parm2;
//     return b;
// }
// var Deepak = Deepak("I", "coding");

// console.log(Deepak);

// function radial() {
//     console.log(2 + 3);
// }
// radial();

// hasting
// lexical envirnoment

// var a = "sahil";


// var b = "sahil";
// console.log(b);



// Merge("code", "to");


// function Merge(param1, parm2) {
//     console.log(param1 + " merge " + parm2);
// }


// var a = "global"

// function xYz() {
//     var a = "fresh"

//     function child() {
//         console.log(a);
//     }
//     return child;
// }

// var call = xYz();
// xYz();
// console.log(a);



// var a = 5;
// var b = 10

// if (a < 3) {
//     console.log("a is smaler than 10");
// } else if (a < b) {
//     console.log("a is smallter than b");
// } else {
//     console.log("a and b is equal");
// }

// console.log();


// and operator will check both content and print the output
// true and true true
// false and true true
// true and false true
// false and false false


// or operator will check 1st condition is true and then check 2nd condition 
// true and true true
// false and true false
// true and false true
// false and false false

// ( "==") will check value are same
// ( "===") will check all like boolean, string ,numbers
//  arguments ( parm1 , parm2)
function xyz(parm1, parm2) {
    console.log(parm1 + parm2);
}
xyz(2, 3)

// var radialCode = {
//     name: "deepak",
//     age: 21,
//     address: "Hisar"
// }
// var arr = [1, 2, 3, 4, 5, 6]
// console.log(radialCode.name)
// console.log(arr[3])

var radialCode = [{
    name: "deepak",
    age: 21,
    address: "Hisar"
}, {
    name: "shiv",
    age: 25,
    address: "Chd"
}]

// console.log(radialCode[)

// function radial(obj) {
//     var inc = obj[0].age
//     console.log(inc++)
// }
// radial(radialCode)

function comparision(numb1, numb2) {
    if (numb1 > 3 && numb2 > 4) {
        console.log("if condition run")
    } else {
        console.log("else condition run")
    }
}
comparision(2, 7)