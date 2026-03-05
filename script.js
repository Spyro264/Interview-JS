const p1 = new Promise((res,rej) => Math.random() > 0.5 ? res('Success') : rej('Failure'));
const p2 = new Promise((res,rej) => Math.random() > 0.5 ? res('Success') : rej('Failure'));
const p3 = new Promise((res,rej) => Math.random() > 0.5 ? res('Success') : rej('Failure'));

Promise.all([p1,p2,p3]).then((res)=>{
      console.log('All promises resolved:', res);
})
.catch((err)=>{
      console.log('At least one promise rejected:', err);
})