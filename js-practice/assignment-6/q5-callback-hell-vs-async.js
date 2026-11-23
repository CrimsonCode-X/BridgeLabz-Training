// Q5: Refactor Callback Hell
function stageCallback(name,next){setTimeout(()=>{console.log(name);next();},1000);}
console.log("Nested callbacks:");
stageCallback("design",()=>stageCallback("build",()=>stageCallback("test",()=>stageCallback("deploy",()=>stageCallback("celebrate",()=>console.log("Callback pipeline complete"))))));
function stage(name){return new Promise(resolve=>setTimeout(()=>{console.log(name);resolve();},1000));}
async function runCleanPipeline(){console.log("\\nAsync/await pipeline:");await stage("design");await stage("build");await stage("test");await stage("deploy");await stage("celebrate");console.log("Async pipeline complete");}
// async/await expresses sequential asynchronous work in a readable, linear style,
// avoids deeply nested callbacks, and makes error handling easier with try/catch.
setTimeout(runCleanPipeline,5500);