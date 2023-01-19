window.onload = function(){
    //do all bindings here
    var btn= document.getElementById("btnAdd");
    btn.onclick = handeladd;
};
function handeladd(){
    var newtodo= document.getElementById("newtodo").value;
    var todo = document.getElementById('todo');
    var newtodotext= document.createTextNode(newtodo);
    var newli= document.createElement("li");
    newli.appendChild(newtodotext);
    todo.appendChild(newli);
    console.log(newtodo.value);
    var deletebutton= document.createElement("button");
    deletebutton.setAttribute("class","deletebtn");
    deletebutton.appendChild(document.createTextNode("Delete"));
    todo>newli.appendChild(deletebutton).addEventListener("click",removeitem);

}
function removeitem(){
    this.parentNode.remove();
}
// function handeldelete(e){
//     var tag = e.target;
//     var li= tag.parentNode;
//     li.parentNode.removeChild(li);

// }