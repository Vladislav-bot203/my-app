const Functions = () => {
  // sayHello();
  // function sayHello() {
  //   console.log("hello, bitches");
  // }
  // sayHello();

  // const greet = () => console.log("Salam, Brat");
  // const greet = function (){console.log("Salam, Brat");}
// функцию декларатион можно вызвть до и после ее инициализации, в то время как функцию эксрпессион можно вызывать только после ее инициализации
  // this в функтион декларатион не видит объект, и работает только в том случае, если создана внутри самого объекта

// function greet(name) {
  //   console.log("hello, " + name);
  // }
  // let name = "valera";
  // greet(name);

  // const person = {
  //     name: "Sunnat",
  //     age:19,
  //     job:"cucker",
  //     sex: "shemale",
  //     iq: 12,
  //     country: "Tajikistan",
  //     id: 1,
  // }

  // function personGreet(person, onSuccess) {
  //     console.log(`Hello, ${person.name}, ${person.age} years, ${person.iq} iq, ${person.job} job, ${person.sex}`);
  //     onSuccess();
  //     return person.id;
  // }

  // function onSuccess() {
  //     console.log("Я вызвался");
  // }
  // function personGreet({age, job, sex, iq, country, id, name}) {
  //   console.log(`Hello, ${name}`);
  //     return id;
  // }

  // let personId = personGreet(person, () =>console.log("я вызвался") );
  const list = [1, 2, 3, 4];
  let val = reduce(list, (prevVal, curVal, index) => prevVal + curVal);
  console.log(val);
  const newList = map(list, (value, index, arr) => value * value);
  // const newList = list.map((value) => value++);
  console.log(newList);
  return <h1>functions</h1>;
};

function map(list, callBack) {
  const newArr = [];
  for (let i = 0; i <= list.length - 1; i++) {
    newArr.push(callBack(list[i], i, list));
  }
  return newArr;
}

function reduce(list, callBack, initialValue = list[0]) {
  let value = initialValue;
  console.log(initialValue);
  for (let i = initialValue === undefined ? 1 : 0; i <= list.length - 1; i++) {
    value = callBack(value, list[i], i);
  }
  return value;
}

export default Functions;
