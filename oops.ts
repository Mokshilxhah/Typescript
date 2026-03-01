class Chai{
    flavour: string;
    price: number;

    constructor(flavour: string, price: number) {
        this.flavour = flavour;
        this.price = price;
    }
}

let mychai = new Chai("Masala", 20);


/* ================== Access Modifiers ================== */
class student{
    public name: string = "Mokshil";
    private id: number = 12;
    protected gender: string = "other";

    /* Public : Anywhere , 
       Private : Only in Class , 
       Protected : Only in Class and Subclasses 
    */

    reveal(){
        return this.id;
    }
}

let student1 = new student();
student1.name = "Shah";
student1.reveal();
// student1.gender = "male";  Error


// Alternative to Private Using 
class wallet{
    #balance: number = 1000;

    showBalance(){
        return this.#balance;
    }

    /* Getters and Setters are Used to Fetch Priavte Values */
    set balance(value: number){
        if(value > 0){
            this.#balance = value;
        }
    }

    get balance(){
        return this.#balance;
    }
}



/* ================== Abstract Classes ================== */
/* Abstract Classes are used to create a blueprint for other classes.*/
/* They Do not let User Create Object of Abstract Class. */

abstract class Vehicle{
    public abstract run(): void;

}

/* 
    class truck extends Vehicle{
        start(): void{} // Error
    }
*/

class car extends Vehicle{
    run(): void{} // Similar Method is must in inherited Class
}