let person=["Zahid","Wahaj","Ali"];
function testsort(){
    person.sort();
    populateperson();
}
function populateperson(){
$("#person").html(" ");
for(let i=0;i<person.length;i++){
    $("#person").append("<li>"+person[i]+"</li>");
}
}
$(function(){
    populateperson();
})