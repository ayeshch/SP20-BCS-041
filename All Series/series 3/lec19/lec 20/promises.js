function makePizza(flavour){
    return new Promise((resolve,reject) => {
        if(flavour=="fajita") reject ("Fajita is out of stock.");
        else
        setTimeout(function(){
            console.log("preparing pizza");
            console.log(flavour + " pizza.");
        },1000);
    });
}

makePizza("fajita").then(message=>{
    console.log(message);
}).catch(message=>{
    console.log(message);
})