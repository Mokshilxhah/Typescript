/* Type Assertion : 
    Means You Forcefully Tell the Compiler What my Data Type is
*/

let response: any = "Ok";
let pname = response as string;

let userInput = document.getElementById("UserInput") as HTMLInputElement;