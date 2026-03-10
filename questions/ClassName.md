# implement a function that conditionally joins css class name together

-
```
 function classNames(...args) {
  let result = "";

  args.forEach((item) => {

    // strings
    if (typeof item === "string" && item) {
      result += item + " ";
    }

    // numbers (ignore 0)
    if (typeof item === "number" && item) {
      result += item + " ";
    }

    // arrays
    if (Array.isArray(item)) {
      result += classNames(...item) + " ";
    }

    // objects
    if (typeof item === "object" && item !== null && !Array.isArray(item)) {
      for (let key in item) {
        if (item[key]) {
          result += key + " ";
        }
      }
    }

  });

  return result.trim();
}

console.log(classNames("foo","bar",{foo:true , bar:false}));
```