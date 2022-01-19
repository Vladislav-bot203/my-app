export class Person {
    _age;
    _name;
    _heigth;
    _weight;
    constructor(name, age, heigth, weight) {
      this._name = name(name);
      this._age = age(age);
      this._heigth = heigth(heigth);
      this._weight = weight(weight);
    }
    introduce() {
      console.log(`Hello, I am ${this._name}. I am ${this._age} years old!`);
    }

    get name(){
        return Person.name;
    }

    get age(){
        return Person.age;
    }

    get heigth(){
        return Person.heigth;
    }

    get weight(){
        return Person.weight;
    }

   set name(value){
    this.name = value;
  }

    set heigth(value){
        if(value<0){
        console.log("errror");
      } else{
        this.height = value;
    }
  }

    set weight(value){
      if(value<0){
        console.log("errror");
      } else{
        this.weight = value;
      }
    }

    set age(value){
      if(value < 0){
        console.log("error");
      } else{
        this.age = value;
      }
    }
   }