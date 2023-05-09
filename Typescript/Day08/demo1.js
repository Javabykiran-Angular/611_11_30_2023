var a = [2, 3, 4, 5];
// for(let i=0;i<a.length;i++){
//     console.log(`
//         a[${i}]=${a[i]}
//     `)
// }
// console.log(a)
// console.log(a.join("  "));
// console.log(a.join("#"));
// console.log(a.join());
// foreach method
// a.forEach((myvalue,i)=>{
//     console.log(myvalue+" Index i "+i)
// }
// );
// rest parameter function
function display(str) {
    var item = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        item[_i - 1] = arguments[_i];
    }
    console.log("==> " + str);
    console.log("==> " + item);
}
// display(44,52,10,78);
// display(44);
// display('Sumit',100,89,99);
// push & pop
// LIFO => Last In First Out 
// it is array method 
// let a1:number[]=[];
// a1.push(70);
// console.log(a1)
// a1.push(88,100,63);
// console.log(a1);
// let res=a1.pop()
// console.log(a1)
// console.log("Poped value is  "+res);
//splice method 
//u can add/remove data on particular index 
// let a2:number[]=[4,10,9,78,32,6];
// console.log(a2);
// a2.splice(3,0,100);
// console.log(a2);
// a2.splice(2,0,200,300);
// console.log(a2);
// a2.splice(4,1);
// console.log(a2);
//slice 
// it is array method
// it copy a section of data from an array 
var skills = ["Core Java", 'Advnaced Java', 'Spring Boot', 'Hibernate', 'JSP', 'Angular 12', 'Docker', 'AWS', 'Jenking'];
var copiedArray = skills.slice(1, 7);
console.log("\n    Original array\n    ".concat(skills, "\n    -------------------\n    Copied array \n    ").concat(copiedArray, "\n"));
var copiedArray1 = skills.slice(1);
console.log(copiedArray1);
var copiedArray2 = skills.slice();
console.log(copiedArray2.join(" "));
