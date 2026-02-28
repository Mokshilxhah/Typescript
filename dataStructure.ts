/* ============================ Arrays ==================================== */
let arr: number[] = [1, 2, 3, 4, 5];
let arr2: string[] = ["Ayush", "John", "Doe"];
let arr3: (number | string)[] = [1, "Ayush", 2, "John", 3, "Doe"];

// Array of objects
type User = {
    name: string;
    age: number;
    isAvailable: boolean;
}   

let users: User[] = [
    {name: "Ayush", age: 20, isAvailable: true},
    {name: "John", age: 25, isAvailable: false},
    {name: "Doe", age: 30, isAvailable: true}
]

/* ============================== Enum ======================================= 
  = Standard Practice to use only one Data Type in Enum
  = It is Usually Used when you want User to Restict to a Set of Values
*/

type Direction = "North" | "South" | "East" | "West";
function findDirection(direction: Direction): string {
    return `You are heading ${direction}`;
}   
findDirection("North");
findDirection("South");
// findDirection("Up"); Not Allowed



/* ============================== Tuples ===================================== */
let tuple: [string , number];
tuple = ["Ayush", 20];
tuple = ["Het", 50];
// tuple = [20,"Ayush"]; Order Mismatch Not Allowed

//More Prefered Way
let fullName: [first:string , last:string];
fullName = ["Ayush", "Sharma"];
fullName = ["Het", "Rathod"];




/* =========== When to Use What? =============
    = Use Array when you want to Store Multiple Values of the Same Type
    = Use Enum when you want to Restrict a Variable to a Set of Values
    = Use Tuple when you want to Store Multiple Values of Different Types in a Fixed Order
*/

/* 
    Array → Flexible length, same type
    Enum → Fixed set of named constants
    Tuple → Fixed length, fixed types, fixed order
*/