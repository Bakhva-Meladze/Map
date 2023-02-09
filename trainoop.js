
 const Person = function (name,year) {
    this.name =name;
    this.year = year;
}
Person.prototype.calc = function (year) {
    if(year) {
        this.year = year;
    }
}
Person.prototype.show = function (){
    console.log(2009 - this.year);
};
Person.prototype.names =function (name){
    this.name = name;

    console.log(this.name);
}
 const Jhon = new Person('Jhonas',1998);
 Jhon.show();
 Jhon.calc(1999);
 Jhon.show();
 console.log(Person.prototype);

 /*child*/
 const Student = function (name,year) {
     this.name= name;
     this.year = year;

 }
 Student.prototype = Object.create(Person.prototype);
 const timy = new Student('timmy',2001);
 timy.show();
 timy.calc(2000);
 timy.show();
 console.log(timy);

 const Personproto = {
     init(name){
         this.name = name;
         console.log("main_"+name);
     }

 }

 const house = Object.create(Personproto);
 house.introd= function () {
 }
 house.init = function (name) {
     Personproto.init.call(this,name);
     console.log("not main_"+ name);

 }
 const jecky = Object.create(house);
 jecky.init('teddy rodinson');
 console.log(jecky);


 console.log("__________________________________________________________________________");
class Personcl {

    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
     get cal(){
        return console.log(2009 - this.year);
    }
    calc(yearof) {
        if(yearof) {
            this.year = yearof;
        }
    }
    names() {
        console.log(this.name);
    }
}
const Jeck = new Personcl('Jeck',1998);
Jeck.cal;
Jeck.calc(2000);
Jeck.cal;
Jeck.names();


class studentCl extends Personcl{
    constructor(name,year) {
        super(name,year);
    }
}
const student = new studentCl('student',1995);
console.log(studentCl.prototype);
student.names();





