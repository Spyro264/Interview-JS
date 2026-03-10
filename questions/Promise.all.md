# Implement Promise.all()

```
function myPromise(arr = []){
  let count = 0;

  if(arr.length === 0){
    return Promise.resolve([]);
  }

   return new Promise((res,rej)=>{
        arr.map((item,index)=>{
          
          if(item && typeof item.then === "function"){
              item.then((result)=>{
                count++;
                 arr[index] = result; 
                 if(count === arr.length){
                      res(arr);
                 }
              })
              .catch((err)=>{
                 rej(err);
             
              })
          } else{
               arr[index] = item;
               count++
               if(count === arr.length){
                      res(arr);
                 }
          }
           
        })
   })
}

const p0 = Promise.resolve(2);
const p1 = new Promise((resolve, reject) => {
  setTimeout(()=>{
    resolve(3);
  },10);
});
// const p3 = Promise.reject("error of p3");
// p3.catch(() => {}); 


myPromise([p0,p1])
.then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err);
})
```