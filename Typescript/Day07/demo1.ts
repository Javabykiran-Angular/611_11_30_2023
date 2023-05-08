//Anonymous function
// function does not have any name 

    let temp1= function (){
        console.log("Anonymous function is called ")
    }

    // temp1();

    let temp2=function (a:number,b:number):number{
        return (a+b)
    }

    // let res=temp2(6,4)
    // console.log("Result is "+res);

    //Fat Arrow function / Arrow function 
    // it is advanced version of Anonymous function

   let temp3= ()=>{
        console.log("Fat Arrow Function Is called ")
    }

    // temp3();


    let temp4=(a:number,b:number):number =>{
        return (a+b);
    }

//  console.log(`
//                 Addition is ${temp4(7,10)}
//         `)

// optional parameter function

function add4(a:number,b?:number){
    console.log("Value of a is "+a)// 7
    console.log("Value of b is "+b) // undefined
    console.log("Addition of a+b is "+(a+b!)) // NAN => not a number
}

// add4(7)

// add4(7,9)

function add5(a?:number,b?:number){
    console.log("Value of a is "+a)// 7
    console.log("Value of b is "+b) // undefined
    console.log("Addition of a+b is "+(a!+b!)) // NAN => not a number
}

// add5()
// add5(10)

//default parameter function

function add6(a:number,b:number=20){
    console.log("Value of a is "+a)// 10
    console.log("Value of b is "+b) // 20
    console.log("Addition of a+b is "+(a+b!)) // 30
}

// add6(10)

function add7(a:number=40,b:number){
    console.log("Value of a is "+a)// 1
    console.log("Value of b is "+b) // 6
    console.log("Addition of a+b is "+(a+b!)) // 7
}

// add7(1,6)

    let temp5=(a:number,b:number=70)=>{
    console.log("Value of a is "+a)// 1
    console.log("Value of b is "+b) // 6
    console.log("Addition of a+b is "+(a+b!))
    }

    // temp5(9);

    function add8(a:number=40,b?:number){
        console.log("Value of a is "+a)// 100
        console.log("Value of b is "+b) // undefined
        console.log("Addition of a+b is "+(a+b!)) //NAN => not a number 
    }

    // add8(100)

    
