function Name(name: string | number){
    if(typeof name === "string"){
    return `Hello ${name}`;
    } 
    return `Name ${name} looks like a number`;
}


function orderChai(size: 'small' | 'medium' | 'large' | number){
    if(size === 'small'){
        return "Cutting Chai";
    }else if(size === "medium" || size === "large"){
        return "You Ordered Regular Size Chai";
    }else{
        return `Your no of Ordered Chai is ${size}`;
    }
}


class Kulhad{
    serve(){
        return "Serving Chai in Kulhad";
    }
}

class Masala_Chai{
    serve(){
        return "Serving Chai in Masala Chai";
    }
}

function serveChai(chai: Kulhad | Masala_Chai){
    if(chai instanceof Kulhad){
        return chai.serve();
    }
}


type masalaChai = {
    type: 'masala', 
    amount: number
};

type cuttingChai = {
    type: 'cutting', 
    amount: number
};

type normal = {
    type: 'chai', 
    amount: number
};

function Makechai(order: masalaChai | cuttingChai | normal){
    switch(order.type){
        case "masala": return 'This is Masala Chai'; break;
        case "cutting": return 'This is Cutting Chai'; break;
        case "chai": return 'This is Normal Chai'; break;
    }       
}

