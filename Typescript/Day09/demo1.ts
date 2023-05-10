//json Object => java script object notation
// key & value format 

let jsonObj={
    id:9,
    'fname':'Sumit',
    lname:'Raokhande'
}

// 1 dot operator
// 2 square operator


// 1 dot operator

// console.log(`
//     Id          :: ${jsonObj.id}
//     First name  :: ${jsonObj.fname}
//     Last name   :: ${jsonObj.lname}
// `);

// 2 square operator

// console.log(`
// ----------Using Square-------------
//     ID          :: ${jsonObj["id"]}
//     First Name  :: ${jsonObj['fname']}
//     Last name   :: ${jsonObj["lname"]}
// `)


//Array of object

let arrobj=[
    {
        id:9,
        'fname':'Sumit',
        lname:'Raokhande',
        country:{
            cid:1,
            cname:"India"
        },
        month:["Jan",'Sept','Dec'],
        result:[
            {
                subj:"M1",
                marks:40
            },
            {
                subj:"M2",
                marks:45
            },
            {
                subj:"M3",
                marks:55
            }
        ]
    },
    {
        id:6,
        'fname':'Kiran',
        lname:'Raokhande',
        country:{
            cid:2,
            cname:"US"
        },
        month:["Feb",'Aug','Nov'],
        result:[
            {
                subj:"M1",
                marks:45
            },
            {
                subj:"M2",
                marks:48
            },
            {
                subj:"M3",
                marks:65
            }
        ]
    },
    {
        id:3,
        'fname':'Spruha',
        lname:'Raokhande',
        country:{
            cid:3,
            cname:"Japan"
        },
        month:["April",'July','Oct'],
        result:[
            {
                subj:"M1",
                marks:50
            },
            {
                subj:"M2",
                marks:55
            },
            {
                subj:"M3",
                marks:85
            }
        ]
    }
];


// console.log(`
//     ID          :: ${arrobj[1].id}
//     First Name  :: ${arrobj[1].fname}
//     Last name   :: ${arrobj[1].lname}
// `);

for(let i=0;i<arrobj.length;i++){
    console.log(`
        ID          :: ${arrobj[i].id}
        First Name  :: ${arrobj[i].fname}
        Last name   :: ${arrobj[i].lname} 
        Country     :: ${arrobj[i].country.cname}
        Month       :: ${arrobj[i].month.join(" ")}
        -----------Result--------------------
    `);

    // for(let j=0;j<arrobj[i].result.length;j++){
    //     console.log(`
    //         Subject     :: ${arrobj[i].result[j].subj}
    //         Marks       :: ${arrobj[i].result[j].marks}
    //     `)
    // }

    arrobj[i].result.forEach((myvalue)=>{
            console.log(`
                Subject     :: ${myvalue.subj}
                marks       :: ${myvalue.marks}
            `)
    });

}