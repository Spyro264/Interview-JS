# You have a promise chain that fetches user data and then their posts. The chain has .then() callbacks nested inside each other. Explain how you would refactor this to async/await, and what are the main benefits of doing so?

```

function fetchUSer(){
    return new Promise((res,rej)=>{
        res(100)
    })
}

function fetchPosts(id){
    return new Promise((res,rej)=>{
        res([1,2,3,4,5])
    })
}

// promise chaining

fetchUSer()
.then((id)=>{
    console.log(id)
    return fetchPosts(id)
})
.then((posts)=>{
   
})
.catch((err)=>{
    console.log(err)
})

// with async await

async function displayPosts(){
    try{
        const id = await fetchUSer();
        const posts = await fetchPosts(id);
        return posts
    }catch(err){
        console.log(err)
    }
}

displayPosts().then((res)=>{
    console.log(res)
})
```