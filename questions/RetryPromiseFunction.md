# Interviewr asked me to wrie an rery function which should takes fn , delay and ,axAttempts a sparameters when the api response is failed it needs to try 3 times refetchiung then show the failed message

- My Approach


```

function fetchData() {
    return new Promise((res, rej) => {
        const status = Math.random() > 0.5 ? 500 : 500;

        if (status === 200) {
            res("Data fetched successfully");
        } else {
            rej("Failed to fetch data");
        }
    });
}

// First attempt
fetchData()
    .then((res) => {
        console.log("First try success:", res);
    })
    .catch((err) => {
        console.log("First try failed:", err);

        retryFetch(fetchData, 1000, 3)
            .then((res) => {
                console.log("Retry success:", res);
            })
            .catch((err) => {
                console.log("Retry failed:", err);
            });
    });

function retryFetch(fn, delay, maxAttempts) {
    return new Promise((resolve, reject) => {
        let attempts = 0;

        function attempt() {
            fn()
                .then((res) => {
                    resolve(res);
                })
                .catch((err) => {
                    attempts++;

                    if (attempts > maxAttempts) {
                        return reject("Max attempts reached. Failed to fetch data.");
                    }
                    console.log("retrying",attempts);
                    
                    setTimeout(attempt, delay);
                });
        }

        attempt();
    });
}
```



```
function fetchData() {
     return new Promise((res,rej)=>{
        return Math.random() > 0.5 ?  rej("failed intentionally") : rej("Error Fetching Data");
     })
}

fetchData()
.then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err);
    retryFetch(fetchData,3);
})

function retryFetch(fn , retrues) {
    let attempts = 0;

    function retryAttempt(){
        fn()
        .then((resuklt)=>{
            console.log(resuklt);
        })
        .catch((err)=>{
            if(attempts < retrues){
                attempts++;
                console.log(`Retrying... Attempt ${attempts}`);
               return  retryAttempt();
            }else{
                console.log(`Failed after ${retrues} attempts: ${err}`);
            }

        })
    }
    retryAttempt();
}


// function retryFetch(fn , retries){
//      return new Promise((res,rej)=>{
//         let attempts=0;
//         function attempt() {
//             fn()
//             .then((result)=>{
//                 res(result)
//             })
//             .catch((err)=>{
//                 if(attempts < retries){
//                     attempts++;
//                     console.log(`Retrying... Attempt ${attempts}`);
//                     attempt();
//                 } else{
//                     rej(`Failed after ${retries} attempts: ${err}`);
//                 }
//             })
//         }
//         attempt();
//      })
// }
```