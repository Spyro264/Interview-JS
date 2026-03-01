# You need to fetch data from three different API endpoints in parallel. Some of these requests might fail. Explain the differences between Promise.all(), Promise.allSettled(), and Promise.any(). When would you use each one, and why?

- Promise.all() : which takes array of promises and runs them in parallel . if all succeed returns array of results . if one fails returns immediately

- Promise.any() : takes array of promises returns the first successfull promise , rejects only when all promises fail

- Promise.allSettled() : takes array of promises waits till all finishes  , returns result of both success and failure