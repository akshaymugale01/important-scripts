//Encapsulation
//Blue Print
class HotelBusiness {
    //Method For initializing
    constructor (name, loc){
        this.name = name;
        this.loc = loc;
    }
    
    display(){
        console.log(`${this.name} is located in ${this.loc}`)
    }
}

let LaturHotel = new HotelBusiness ("Latur Hotel", "Latur/MH/Ind");
let MumHotel = new HotelBusiness ("Mum Hotel", "Mum/MH/Ind");

LaturHotel.display()
MumHotel.display();

//Create Sub CLass / ChildClass

class MotelBusiness extends HotelBusiness {
    constructor (name, loc , value){
        super (name, loc);
        this.value = value; 
    }
    
    displayDetails(){
        console.log(`${this.name} located in ${this.loc} has value is ${this.value}`)
    }
}

let motel1 = new MotelBusiness ('Kolhapuri Tadka', 'Omerga', '16000$')

motel1.displayDetails();
motel1.display();


// class HotelModel{
//     constructor(name, id){
//         this.name = name;
//         this.id = id;
//     }
    
//     display(){
//         console.log(`${this.name} has id no ${this.id} is located in pune`)
//     }
// }

// let Id1 = new HotelModel("Taj","1221");
// Id1.display();

// let id2 = new HotelModel('7/12','410401');
// id2.display();


// class Motel extends HotelModel {
//     constructor (name, id, special){
//         super (name, id);
//         this.special = special;
//     }
//     display(){
//         console.log(`Hotel ${this.name} has pin code ${this.id} has special item is ${this.special}`);
//     }
// }

// let item1 = new Motel('kinara', 410401, 'Fish Fry');
// item1.display();

//////////////////////////

//Object destructor

let obj ={
    name : "Akshay",
    age : 23 ,
    salary : 900000
}

const {name, age, salary} = obj;

console.log(name)
console.log(age)
console.log(salary)

let arr = [11,12,13,14,15]

const[a,...b] = arr; //spread operator

console.log(a)
console.log(b)