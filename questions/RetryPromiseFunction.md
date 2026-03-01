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