# classnames is a commonly-used utility in modern front end applications to conditionally join CSS class names together. If you've written React applications, you likely have used a similar library.

Implement the classnames function.

Examples

classNames('foo', 'bar'); // 'foo bar'
classNames('foo', { bar: true }); // 'foo bar'
classNames({ 'foo-bar': true }); // 'foo-bar'
classNames({ 'foo-bar': false }); // ''
classNames({ foo: true }, { bar: true }); // 'foo bar'
classNames({ foo: true, bar: true }); // 'foo bar'
classNames({ foo: true, bar: false, qux: true }); // 'foo qux'


```
function classNames(...classes){
      const arr = [...classes]; 
      let result = "";

      arr.forEach((item)=>{
           if(typeof item === "string" && item ) result += item + " ";

           if(Array.isArray(item)){
                 result = result + classNames(...item) + " ";
           }

           if(typeof item === "object" ){
                for(let key in item){
                  if(item[key] === true && item[key] !== null && item[key] !== undefined && item[key] !== "" ) {
                        result = result + key + " ";
                  }
                }
           }
      })
      return result.trim();
}



console.log(classNames("foo")); 


```