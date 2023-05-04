
var a1,a2,a3;
var a_1,a$1;

//data types 
// number(int,long,short,double,float),string(""/''),boolean(true/false)
// any(number,string,boolean) 
// void => it is neutral data type => it does not point anything
// misec. null & undefined => it act as  data type as well as value 

var a:number=10;   // forward declration & defination

// console.log('value of a is '+a);

var str!:string;
// console.log('Value of str is '+str)

var b=20;
// console.log(`
//         Value of b is ${b}
// `);

/*
var myany:any;
myany=2.5;
console.log("value of myany is "+myany);
myany='Sumit';
console.log("value of myany is "+myany);
myany=true;
console.log("value of myany is "+myany);

var b1;
*/

//type assertion
// data type => any/Object/Unknown

// 1 Angle Bracket => it is used in ts file 
// 2 as syntax => it is used in html file as well as in ts file 

var d:any;

// 1 Angle Bracket

var temp=(<string> d);
// temp.
 
// 2 as syntax 


var temp1=(d as string);
// temp1.

//Operators
// Airthmathic => +,-,/,*,%
// logical => &&,||
//bitwise => &,|,~,!,<<,>>,^
//relational => >,<,<=,>=
// conditional => !=,==(it checks value of variable),===(strongly equality => it checks value as well as data type of that variable )
// ternary => condition?Expression1:expression2
//unary =>  post/pre ++/-- (inc/dec) ++a/a--
//assignment => = , +=,-=,*=,/=,%=
