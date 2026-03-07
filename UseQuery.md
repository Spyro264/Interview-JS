# Implement useQuery 

```
 let prevDevs = null;
  let cachedResponse = null;

async function useQuery(fn ,  deps=[]){
 
  const response = {
      loading: false,
      data:null,
      error:null
  }

 
   function execute(){
         response.loading = true;
         return  fn().then((res)=>{
         response.loading = false;
         response.data = res ;
         response.error = null;
         cachedResponse = {...response};
         return response;
     })
     .catch((err)=>{
         response.loading = false;
         response.data =  null;
         response.error = err;
         cachedResponse = {...response};
         return response;
     })
     
  }

   function run(newDeps){
       if(!prevDevs || newDeps.length !== prevDevs.length || newDeps.some((dep , index) => dep !== prevDevs[index])){
            console.log("dependencies changed");
            prevDevs = [...newDeps]
            return execute();
       } else{
            console.log("dependencies not changed");
            return Promise.resolve(cachedResponse);
       }
   }
  
  return run(deps);
  
}



function fetchData(){
      return new Promise((res,rej)=>{
            return Math.random() > 0.5 ? res("success") : rej("error")
      })
}

useQuery(fetchData , [1,8]).then(({loading , data , error}) => {
    console.log({loading , data , error});
});


useQuery(fetchData , [1,8]).then((res)=>{
    console.log("second",res);
});

useQuery(fetchData , [1,8]).then((res)=>{
    console.log("second",res);
});

```