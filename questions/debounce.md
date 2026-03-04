# Implement debounce

```
function debounce(fun , delay){
   let count = 0;
   let timer = null;

   return function(...args){

    if(count === 0){
         count++; 
        return fun(...args);
    }else{
     if(timer) clearTimeout(timer);
     return new Promise((res)=>{
        timer = setTimeout(()=>{
            res(fun(...args))
        },delay)
     })
    }

   }
}

function hello(data  , wait){
    return new Promise((res,rej)=>{
       setTimeout(()=>{
          res(data);
       },wait)
    })
}



const debounced = debounce(hello,2000)
debounced("i" , 1000).then(res => console.log(res))
setTimeout(()=>{
   debounced("ip" , 3000).then(res => console.log(res))
},2000)

setTimeout(()=>{
debounced("ips" , 1000).then(res => console.log(res))
},3000)

```