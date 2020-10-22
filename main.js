//promise
function promiseTest1(){
  return new Promise((ok)=>{
    ok('プロミス1です');
  });
}
console.log(promiseTest1());

const promiseTest2 = new Promise((ok)=>{
  ok('プロミス2');
});
console.log(promiseTest2);

function testPromise3(input){
  return new Promise((ok)=>{
    ok(`プロミス${input}です`);
  });
}
console.log(testPromise3('太郎'));


