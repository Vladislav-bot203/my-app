import { useEffect } from "react";

const Promises = () => {
  useEffect(() => {
    work().then(() => console.log("Works done"));
  },
  [])
  //     console.log("Начинаю оценивать работу");
  //     setTimeout(() => {console.log("Приступаю к работе");
  //     setTimeout(() => console.log("Work is done"), 2000);
  //   }, 3000);

  // const work = new Promise((resolve, reject) => {
  //     console.log("Начинаю оценивать работу");
  //     setTimeout(()=> {console.log("Приступаю к работе");
  //     setTimeout(()=> console.log("Work is done!"), 2000);
  // }, 3000);
  // })

  // одновременно вызываются 3 консоль лога. 1й выводится сразу, второй выводится через 2 секунды, третий - через3

  //   const promise = new Promise((resolve, reject) => {
  // setTimeout(()=> resolve('foo'), 300)
  //   });

  //   promise.then((value) => {
  //     console.log(value);
  //   }, () => console.error("Ohhh shiiit"))


  // getPromise().then((resolve, reject = null) => {
  //   if (reject == null) {
  //     console.log(`Потребуется ${resolve / 1000} секунд`);
  //     console.log("Приступаю к работе!");
  //     setTimeout(() => console.log("Work is done!!!"), resolve);
  //   } else {
  //     console.log(reject);
  //   }
  // });

  return <h1> Promises</h1>;
};

async function estimate() {
  // const work = new Promise((resolve, reject) => {
  //   const probability = getRandomValue(1, 100);
  //   console.log("Начинаю оценивать работу");
  //   setTimeout(() => {
  //     if (probability > 33) {
  //       resolve(getRandomValue(1000, 5000));
  //     } else {
  //       reject("Otstan");
  //     }
  //   }, 3000);
  // });
  // return work;
  const time = getRandomValue(1000, 5000);
  console.log("Начинаю оценивать работу");
  await delay(3000);

if(getRandomValue(1,100) >33){
  return time;
}else {
  throw "jopa";
}

}
async function work(){ 
try{
    const time = await estimate();
    console.log(`Потребуется ${time / 1000} секунд`);
    await delay(time);

    console.log("Приступаю к работе!");
    await delay(2500);
  } catch(error){
    console.error(error);
  }

    }
  




async function delay(time){
 return new Promise((resolve) => setTimeout(()=> resolve(), time ))  
}



function getRandomValue(min, max) {
  return Math.random() * (max - min + 1) + min;
}

export default Promises;
