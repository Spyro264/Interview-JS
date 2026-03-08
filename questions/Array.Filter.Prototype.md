# implement `Array.prototype.filter`

```
Array.prototype.myFilter = function(callback) {
      console.log(Array.isArray(this));

      if(!Array.isArray(this)) return new Error(`${this} is not an array`)
      
      let result = [];
      for(let i = 0 ; i < this.length; i++){
             callback(this[i] , i , this) && result.push(this[i])
      }
      return result;
}

const arr = [1, 2, 3, 4, 5];



const res = arr.myFilter((item)=> item > 2);
console.log({res});


```