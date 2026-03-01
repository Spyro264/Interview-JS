# This Output

```
var obj ={
  helloWorld:function(){
    return "Hello World" + this.name;
  },
  name:"nagaraj"
}

var obj2 = {
  helloword:obj.helloWorld, // this.name will become rakesh
  name:"rakesh"
}

console.log(obj2.helloword()); // this === obj2

// intrnally it looks like this

// var obj2 = {
//   helloword:function(){
//     return "Hello World" + this.name;
//   },
//   name:"rakesh"
// }

// so here when we call obj2.helloword() 
// this will become this === obj2

// so in the obj2 we HashChangeEvent
// return "Hello World" + this.name; this is obj2 means obj2.name which is rakeshk
```