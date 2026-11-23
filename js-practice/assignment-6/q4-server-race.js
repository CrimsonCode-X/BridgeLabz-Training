// Q4: Concurrent Server Responses
function server(name,delay){return new Promise((resolve,reject)=>setTimeout(()=>Math.random()<0.2?reject(new Error(name+" failed")):resolve(name+" deployment complete"),delay));}
const serverA=server("Server A",2000), serverB=server("Server B",3000);
Promise.all([serverA,serverB]).then(()=>console.log("Deployment completed for all servers")).catch(error=>console.error("A deployment failed:",error.message));
Promise.race([server("Server A",2000),server("Server B",3000)]).then(response=>console.log("Fastest response:",response)).catch(error=>console.error("Race failed:",error.message));