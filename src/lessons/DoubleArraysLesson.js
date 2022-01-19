const DoubleArraysLessons = () => {
  const array = [
    [2, 3, 4, 5],
    [12, 55, 22, 11],
    [2, 99, 44, 100],
    [12345, 243, 23, 1234],
  ];
  array[3][3] = -array[3][3];

  array.forEach((element) => {
    console.log(
      element.forEach((value) => {
        console.log(value);
      })
    );
  });

  array.forEach((element, i) => {
    element.forEach((value, j, array) => {
      if (i % 2 === 0 && j % 2 === 0) {
        array[j] *= 1000;
      } else if (i % 2 !== 0 && j % 2 !== 0) {
        array[j] = Math.pow(value, 4);
      }
    });
  });
  console.log(array);

  const arraySort = array.map((element) => {
    return element.filter((element) => {
      return element % 1000 !== 0;
    });
  });
  console.log(arraySort);

  const sumArr = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
  ];

  let a = sumArr.reduce((total, arr, index) => {
    if (index % 2 !== 0) {
      return (
        total +
        arr.reduce((total, value, index) => {
          return total + value;
        }, 0)
      );
    } else {
      return total;
    }
  }, 0);

  console.log(a);

  let sunnat = {
    name: "Sunnat",
    group_id: 12,
    budget: true,
  }

  function createLesson(name, marks){
    this.name = name;
    this.marks = marks;
  }

  const lesson1 = new createLesson("Geography", [10,9,8,9] );
  const lesson2 = new createLesson("Programming", [4,6,3,8,9]);
  const lesson3 = new createLesson("Chemistry", [10,10,10,10]);

  let lessons = [lesson1, lesson2, lesson3];

  sunnat.lessons = lessons;
  
  sunnat.lessons.forEach((lesson, index) => {
    console.log(lesson.name + ": ");
    lesson.marks.forEach((mark) => {
      console.log(mark);
    });
 });

let rami = {...sunnat,lessons: sunnat.lessons.map((lesson, index) => {
 return {...lesson, name: lesson.name.toUpperCase()};
})};
sunnat.name = "Sunnat Lox";
console.log(sunnat);
console.log(rami);  
 
rami = {...rami, lessons: rami.lessons.map((lesson) => {
    return {...lesson, average: lesson.marks.reduce((total, value) => {
      return total+value;
    },0)/lesson.marks.length}
})}

console.log(rami);


const Kolyan = { 
  name: "kolyan",
  group_id: 1,
  budjet: false,
}

const subject1 = new createLesson("Minecraft", [1,1,1,2,3,5]);
const subject2 = new createLesson("PE", [10,10,10,10,10]);
const subject3 = new createLesson("Management", [1,10,9,8]);

let subjects = [subject1, subject2, subject3];

Kolyan.subjects= subjects;

for (let key in Kolyan.subjects) {
  Kolyan.subjects[key].average=0;
    for (let index in Kolyan.subjects[key].marks) {
      if(index < Kolyan.subjects[key].marks.length -1){
        Kolyan.subjects[key].average += Kolyan.subjects[key].marks[index];
      } else {
        Kolyan.subjects[key].average += Kolyan.subjects[key].marks[index];
        Kolyan.subjects[key].average /= Kolyan.subjects[key].marks.length;
      }   
      }
    } 

console.log(Kolyan);






  return <h1>DoubleArraysLessons</h1>;
};




export default DoubleArraysLessons;
