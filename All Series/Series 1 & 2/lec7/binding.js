console.log("Starting")
function handelAddnewtodo(){

    console.log("Handling add new todo button.");
}
function dobindings(){
    //call when sara document is prepare
    console.log("Do bindings")
    var btn= document.getElementById("btnAdd");
    btn.onclick = handelAddnewtodo();
}

//dobindings();  will no do bindings as document is yet not loaded of html as js already executed
window.onload = dobindings;
console.log("finishing");
//as an anonumus function call
// window.onload = function(){
    //do all bindings here
//     var btn= document.getElementById("btnAdd");
//     btn.onclick = function(){
  //  console.log("Handling add new todo button.");
//};
// };
