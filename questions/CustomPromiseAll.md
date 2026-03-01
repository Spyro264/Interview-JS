# Implement Custom Promise.all()

Requirements:

Takes array of promises

Resolves when all succeed

Returns results in same order

Rejects immediately if any promise fails

```
function customPromiseAll(arr){
    return new Promise((res,rej)=>{
        let result = [];
        arr.forEach((item,index)=>{
            item.then((data)=>{
                result[index] = data;
                 if(result.length === arr.length && !result.includes(undefined)){
                    res(result);
                 }
            })
            .catch((err)=>{
                rej(err);
            })
        })
        return result;
    })
}

const p1 = new Promise((res,rej) => res("Result of p1"));
const p2 = new Promise((res, rej) => res("Result of p2"));
const p3 = new Promise((res, rej) => res("Result of p3"));


customPromiseAll([p1,p2,p3])
.then((result)=>{
    console.log(result);
})
.catch((err)=>{
    console.log(err);
})

```