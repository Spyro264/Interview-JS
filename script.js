function count () {
   let count = 0;

   function fn(){
      count++;
      return count;
   }
   fn.reset = function () {
      count = 0;
   }
   return fn;
   
}


const counter = count();
console.log(counter());
console.log(counter());
console.log(counter());
counter.reset();
console.log(counter());
console.log(counter());
console.log(counter());







