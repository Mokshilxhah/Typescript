/* Generics are Usually Used when we want to write reusable code 
    that works with multiple types 
*/

function wrap<T>(value : T): T[]{
    return [value];
}
wrap(10);
wrap("Hello");
wrap({name: "Mokshil", age: 20});


function pair<A, B>(value1 : A, value2: B): [A,B]{
/* Singles Not Allowed in Pair Functions */
    return [value1, value2];
}
pair(2,10);
pair("Hello","World");
pair({name: "Mokshil", age: 20},{name: "Mokshil", age: 20});


interface Box<T>{
    content : T;
}
let box1: Box<number> = {content: 10};
let box2: Box<string> = {content: "Hello"};
// let box3: Box<string> = {content: 23}; // Error