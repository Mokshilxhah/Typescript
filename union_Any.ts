/* ========== Union Types ==========  */
let subscriber: string | number = "John";
let stat: 'active' | 'inactive' | 'pending' = 'active';
let mixedArray: (string | number)[] = ["John", "Jane", 25];


/* ========== Any = I dont Care (You can Add Any Values) ==========  */
let randomValue: any;
randomValue = "Hello";
randomValue = 42;
randomValue.toupperCase();


/* ========== Unknown = I dont Care But I want to Check Before Using ==========  */
let unknownValue: unknown;
unknownValue = "Hello";
unknownValue = 42;

// unknownValue.toUpperCase(); // Error: Intailize First
if (typeof unknownValue === "string") {
  unknownValue.toUpperCase();
}


/* ========== Never = It Represents Values That Never Occur ==========  */
function throwError(message: string): never {
    throw new Error(message);
}