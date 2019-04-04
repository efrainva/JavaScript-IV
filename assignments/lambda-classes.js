// CODE here for your Lambda Classes

class Person {
constructor(name, age, location, gender) {
this.name = name,
this.age = age,
this.loction = location,
this.gender = gender
}
phrase(){
  return console.log(`Hello my name is ${this.name}, I am from ${this.loction}`);
}

}


class Instructors extends Person{
  constructor(specialty, favLanguage, catchPhrase){
    super();
    this.specialty =  specialty,
    this.favLanguage =  favLanguage,
    this.catchPhrase = catchPhrase
    
  }
  demo(subject){
    return `today we are learing about a ${subject}`;
  }
  grade(student, subject){
    return console.log(`${student.name} receives a perfect score on ${subject}`);
  }
}


class project_Managers {
  constructor(specialty, favLanguage, catchPhrase){
    super();
    this.specialty =  specialty,
    this.favLanguage =  favLanguage,
    this.catchPhrase = catchPhrase
    
  }
  demo(){
    return `today we are learing about a ${subject}`;
  }
  grade(){
    return console.log(`${student.name}revies a perfact score on ${subject}`);
  }
}
// class john extended Instructors({
//   specialty: "talking",
//   favLanguage: "python",
//   catchPhrase: "let it go"
// })


console.log(new Instructors("java","javascript","don't forget the homies"));
// Instructors.prototype.demo = function (){

// }

// class Students

// class project Managers


