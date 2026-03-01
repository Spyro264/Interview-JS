# Compute Function

```
function computeAmount(){
   let total = 0;
   return {
      lacks(val){
        total = total + (val * 100000);
        return this;
      },
      crore(val){
        total = total + (val * 10000000);
        return this
      },
      value(){
        return total;
      }
   }
  
}

const res = computeAmount().lacks(5).crore(2).value();
console.log(res);
```