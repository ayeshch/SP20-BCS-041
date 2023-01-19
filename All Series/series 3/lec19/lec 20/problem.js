// function makepizza(flavour){
//     setTimeout(function(){
//         console.log("preparing pizza");
//         return "preparing" +flavour+ "pizza";
//     }, 1000);
//     return "order recieved" +flavour+ "pizza";
// }

function makepizza(flavour){
    setTimeout(function(){
        console.log("preparing pizza");
        return "preparing" +flavour+ "pizza";
    },1000);
    return "order recieved" +flavour+ "pizza";
}
console.log(makepizza("tikka"));