//Anonymous function
// function does not have any name 
var temp1 = function () {
    console.log("Anonymous function is called ");
};
// temp1();
var temp2 = function (a, b) {
    return (a + b);
};
// let res=temp2(6,4)
// console.log("Result is "+res);
//Fat Arrow function / Arrow function 
// it is advanced version of Anonymous function
var temp3 = function () {
    console.log("Fat Arrow Function Is called ");
};
// temp3();
var temp4 = function (a, b) {
    return (a + b);
};
//  console.log(`
//                 Addition is ${temp4(7,10)}
//         `)
// optional parameter function
function add4(a, b) {
    console.log("Value of a is " + a); // 7
    console.log("Value of b is " + b); // undefined
    console.log("Addition of a+b is " + (a + b)); // NAN => not a number
}
// add4(7)
// add4(7,9)
function add5(a, b) {
    console.log("Value of a is " + a); // 7
    console.log("Value of b is " + b); // undefined
    console.log("Addition of a+b is " + (a + b)); // NAN => not a number
}
// add5()
// add5(10)
//default parameter function
function add6(a, b) {
    if (b === void 0) { b = 20; }
    console.log("Value of a is " + a); // 10
    console.log("Value of b is " + b); // 20
    console.log("Addition of a+b is " + (a + b)); // 30
}
// add6(10)
function add7(a, b) {
    if (a === void 0) { a = 40; }
    console.log("Value of a is " + a); // 1
    console.log("Value of b is " + b); // 6
    console.log("Addition of a+b is " + (a + b)); // 7
}
// add7(1,6)
var temp5 = function (a, b) {
    if (b === void 0) { b = 70; }
    console.log("Value of a is " + a); // 1
    console.log("Value of b is " + b); // 6
    console.log("Addition of a+b is " + (a + b));
};
// temp5(9);
function add8(a, b) {
    if (a === void 0) { a = 40; }
    console.log("Value of a is " + a); // 100
    console.log("Value of b is " + b); // undefined
    console.log("Addition of a+b is " + (a + b)); //NAN => not a number 
}
add8(100);
