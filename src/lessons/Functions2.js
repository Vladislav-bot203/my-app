const Functions2 = () => {
  var name = "pavel";
  var age = "1";
  const person = {
    name: "Sunnat",
    age: 19,
    greet: function () {
      console.log(
        `Hello, my name is ${this.name}, I am ${this.age} years old!!!`
      );
    },
    test(country, salary) {
      alert(
        `Ave! My name is ${this.name}. I'm ${this.age}. My salary is ${salary}. This salary is the highest in ${country}`
      );
      return "Xuy";
    },
  };

  const rami = {
    name: "Rami",
    age: 20,
  };
  let hello = person.greet.bind(person);
  hello();
  person.test.call(person, "Tajikiston", "0$");
  person.test.apply(person, ["Tajikiston"]);
  // const {greerArrow, greet}= person;
  //   const greet = person.greet;
  //   person.test()
  //   greet.call({name: "Volodya"});
  //   greet();
  // greerArrow();
  //   person.greetArrow();
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  console.log(
    arr.filter((value, index, arr) => {
      return value % 2 != 0;
    })
  );

  console.log(filter(arr, (value) => value % 2 != 0 ))

  return (
    <div>
      <button onClick={() => person.test.bind(person, "5$", "Таджикистон")()}>
        Нажав на кнопку, володя пососет
      </button>
      <h1>Functions 2.0</h1>
    </div>
  );
};

function filter(list, callBack) {
  const newList = [];
  for (let i = 0; i <= list.length - 1; i++) {
    if (callBack(list[i], i, list)) {
      newList.push(list[i]);
    }
  }
  return newList;
}

export default Functions2;
