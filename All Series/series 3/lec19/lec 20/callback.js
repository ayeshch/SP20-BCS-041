// function makepizza(flavour,callback){
//     console.log("Order of pizza recieved.");
//     console.log("preparing pizza");
   
//     setTimeout(function(){
//         callback(flavour + "pizza");
//     },1000);
// }

// function handelPizza(pizza){
//     console.log("Eating "+ pizza);
// }

// makepizza("tikka",handelPizza);

function makepizza(flavour,callback){
    console.log("order of "+flavour +" pizza recieved.");
    console.log("preparing pizza");
    setTimeout(function(){
        callback(flavour +"pizza");
    },1000);

}
function handelPizza(){
    console.log("eating pizza");
}
makepizza("tikka",handelPizza);