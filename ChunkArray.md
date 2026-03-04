# Implement Chunk Array

// input chunk([1,2,3,4] , 2) -> [[1,2],[3,4]]
// input chunk([1,2,3,4,5] , 2) -> [[1,2],[3,4],[5]]

```
 // with for loop and slice method
 function chunkArr(array , size){
   let result = [];

   for(let i=0 ; i< array.length ; i+=size){
       let chunk = array.slice(i , i+size);
       result.push(chunk);
   }
   return result;

 }

console.log( chunkArr([1,2,3,4,5] , 1));


// with while loop and splice method
function chunkArr(array, size) {
     let arr = [...array];
     let result =[];
     while(arr.length > 0){
        let chunk = arr.splice(0,size);
        result.push(chunk);
     }
     return result;
}

console.log(chunkArr([1,2,3,4,5], 4));
```