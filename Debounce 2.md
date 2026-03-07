# Implement debounce with Cancel and Flush methods

```

function debounce(func , wait){
      let timer = null;
      let lastArgs ;
      
           function debounced(...args){
            lastArgs = args; 
            if(timer) clearTimeout(timer);
            timer = setTimeout(()=>{
                 func(...args); 
            },wait)
      }

      debounced.cancel = function(){
            if(timer) clearTimeout(timer);
            timer = null;
            console.log("cancelled");
            
      }

      debounced.flush = function(){
            if(timer) {
                 clearTimeout(timer);
                 timer = null;
                 func(...lastArgs);
                 lastArgs = null;
            };
           
      }

      return debounced;
}

function hello(name){
      console.log(`Hello ${name}`);   
}

const fun = debounce(hello,3000);
fun("World");
fun("Everyone");
fun("hehehehe")
fun.flush();

```