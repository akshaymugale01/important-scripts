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