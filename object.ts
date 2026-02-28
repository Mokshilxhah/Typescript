let user = {
    name: "Ayush",
    age: 20,
    isAvailable: true
}


type tea = {
    name: string;
    price: number;
    quantity: number | string;
}

type interfaceTea = {
    arr: string[];
}

let tea1: tea = {name: "Masala Tea", price: 400, quantity: "100ml"}
let tea2: tea = {name: "Green Tea", price: 300, quantity: 100}


type Item = {
    id: number;
    itemName: string;
}

type Address = {
    street: string;
    pin: number;
}

type order = {
    name: string;
    item: Item;
    address: Address;
}

