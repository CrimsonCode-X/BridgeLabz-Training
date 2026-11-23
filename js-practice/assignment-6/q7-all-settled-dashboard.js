// Q7: Promise.allSettled dashboard with timing
function loadProfile(){return new Promise((resolve,reject)=>setTimeout(()=>Math.random()<0.25?reject(new Error("Profile unavailable")):resolve("Profile Loaded"),2000));}
function loadPosts(){return new Promise((resolve,reject)=>setTimeout(()=>Math.random()<0.25?reject(new Error("Posts unavailable")):resolve("Posts Loaded"),1500));}
function loadMessages(){return new Promise((resolve,reject)=>setTimeout(()=>Math.random()<0.25?reject(new Error("Messages unavailable")):resolve("Messages Loaded"),1000));}
async function loadDashboard(){const start=Date.now();const results=await Promise.allSettled([loadProfile(),loadPosts(),loadMessages()]);results.forEach((result,index)=>console.log(["Profile","Posts","Messages"][index],result.status,result.status==="fulfilled"?result.value:result.reason.message));console.log("Total time:",((Date.now()-start)/1000).toFixed(2),"seconds");}
loadDashboard();