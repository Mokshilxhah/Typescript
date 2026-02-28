/* ===========  Basic Types ===========  */

// Annotations Simply Means you Implicitly Declare the Type of a Variable
// Inferene Automatically Infers the Type of a Variable Based on its Value


// Annotations
let isDone: boolean = false;   
let age: number = 30;
let pName: string = "John";
let list: number[] = [1, 2, 3];
let tuple: [string, number] = ["Hello", 10];

// Inference
let Status = false;   
let age2: number = 30;


/* Enums =  A special feature that allows you to define a set of named constants
   Example: Directions, status codes, user roles, or card suits
*/
enum Color {Red, Green, Blue};
let c: Color = Color.Green;

