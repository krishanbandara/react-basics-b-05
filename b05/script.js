
// function fetchData(callbackfn){

// console.log("fetching data function triggered");    
// setTimeout(()=>{
// let data ={name:"john",age:30};
// callbackfn(data);
// },2000);

// }

// function handleData(data){
// console.log("handle data function triggered");    
// console.log("data received",data);
// }

// fetchData(handleData);


function delayedGreeting(callback) {
  setTimeout(() => {
    let name = "john";
    callback(name);
  }, 2000);
}

function greeting(name) {
  console.log("wish you", name);
}

delayedGreeting(greeting);




