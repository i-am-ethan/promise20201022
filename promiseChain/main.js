function promiseTest4(pay){
  return new Promise((ok,ng)=>{
    if(pay > 100){
      let change = pay -100;
      ok(change);
    }
    ng('お金がたりません');
  })
}
console.log(promiseTest4(80).catch((e)=>{
  console.log(e);
}));

promiseTest4(180).then((change)=>{
  console.log(change);
  return promiseTest4(change);
}).then(change=>{
  console.log(change);
}).catch((e)=>{
  console.log(e);
});