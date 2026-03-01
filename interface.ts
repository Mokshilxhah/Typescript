/* Interface just Create a Blueprint for object and class 
    It is used to define the structure of an object or class.
    Functions can also be defined in an interface. 
*/

/* Why Interface is Mostly Used in Typescript ?
    1. It is used to define the structure of an object or class.
    2. It is used to define the structure of a function and an Array.
*/


interface cupsize{
    size:'small'| 'medium'| 'large'
}
class chai implements cupsize{
    size : 'small'| 'medium'| 'large' =  "large";
}


interface user{
    username: string;
    bio?: string;
}
const user1: user = { username: "Shah"};
const user2: user = { username: "Mokshil" , bio: "I am Happy"};


interface teaMachine{
/* Signature */
    start(): void;
    stop(): void;
}
let machine1: teaMachine = {
    start(){console.log("Machine Started");},
    stop(){console.log("Machine Stopped");}
}
/* 
    let machine2: teaMachine = {
        start(){console.log("Machine Started");} // Error : Both Methods should be implemented
    }
*/


/* Index Signature */
interface chaiRatings{
    [flavour: string]: number; /* Simply Means Diffrent Chai Types and number Ratings */
}

let chai1 : chaiRatings = {
    "Masala": 5,
    "Ginger": 4,
    "Normal": 5.5,
    // "Lemon": "Quite Good" // Error : Only Value Allowed
}


// Merging Interface
interface A {name: string}
interface B {age : number}
interface C extends A ,B{}
