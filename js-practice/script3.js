// Async: setTimeout, setInterval, fetch, event
// Web API - fetch, call stack, event loop, microtask queue, macrotask queue, 

// console.log("Start");

// // function getUser(callback){
// //     setTimeout(()=> {
// //         console.log("User Data...");
// //         callback()
// //     },2000);
// // }

// // function getUserBankDetails(callback){
// //     setTimeout(()=>{
// //         console.log("User Bank Details");
// //         callback()
// //     }, 1000);
// // }

// // function getUserInc(){
// //     setTimeout(()=>{
// //         console.log("User Insurance Data")
// //     }, 3000)
// // }

// // //console.log("End");

// // // function getUser(){
// // // setTimeout(()=>{
// // //     console.log("User Data...")
// // // }, 2000);
// // // }

// // // function getUserBankDetail(){
// // // setTimeout(()=>{
// // //     console.log("User Bank Details:")
// // // }, 1000);
// // // }

// // // callback, promise, async await

// // getUser(()=> {
// //     getUserBankDetails(()=>{
//         getUserInc()
//     })
// })

// console.log("End");

// // promise
// let mypromise = new Promise((resolve, reject)=>{
//     let age = 10;
//     if(age > 18){
//         resolve("age is valid")
//     }else{
//         reject("age is invalid")
//     }
// });

// mypromise
// .then(()=>{
//     console.log(msg)
// })
// .catch((err)=>{
//     console.log(err)
// })

console.log("start");

function getUser(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("user data...");
        },2000);
    })
}

function getUserBankDetails(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("user bank details...");
            resolve();
        }, 1000);
    })
}

function getUserInc(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("user insurance data...");
            resolve();
        }, 3000);
    })
}

getUser()
.then(()=>{
    return getUserBankDetails();
})
.then(()=>{
    return 
})