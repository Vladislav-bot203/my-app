const ObjectLesson = () => {
  console.log("ti pidor");

  const person = {
    name: "Valera",
    age: 12,
    gender: "female",
    country: "uganda",
  };

  function createUser(name, age, gender, country) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.country = country;
  }

  person.age = 11;
  person["age"] = 10;

  delete person.gender;

  const person1 = new createUser("Sunnat", 9, "dog", "Tadjikistan");
  const person2 = new createUser("Rami", 20, "mashina", "Belarus");
  const person3 = new createUser("VladOs", 20, "No Gender", "Belarus");
  const person4 = new createUser("Volodya", 19, "chmo", "Belarus");

  const personList = [person1, person2, person3, person4];
  console.log(personList);

  let average =
    personList.reduce((prev, cur) => {
      return prev + cur.age;
    }, 0) / personList.length;

  console.log(average);

  personList.sort((a, b) => (a.name >= b.name ? 1 : -1));
  console.log(personList);
  const newPersonList = personList.map((person) => {
    return person.name + person.country;
  });
  console.log(newPersonList);

  const newPersonListAgain = personList.map((person, index) => {
    return { id: index, ...person, age: person.age + 1 };
  });
  console.log(newPersonListAgain);
  return <h1>Hi </h1>;
};

export default ObjectLesson;
