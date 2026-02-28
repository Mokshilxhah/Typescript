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
const user2: user = { username: "Mokshil" , bio: "I am Happy"}