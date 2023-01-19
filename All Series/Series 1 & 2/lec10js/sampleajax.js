console.log('Code starting.');
$(function(){
    console.log('Doing Bindings.');
    $('#load').click(sendAjax);

})

function sendAjax(){
    console.log("Ajax request send.");
    $.get('students.txt',handelResponse);
    console.log("Request  send!");
}
function handelResponse(response){
    console.log('Response recieved.');
   $('#result').empty();
   $('#result').append(response);

}
console.log('code finished.');
// $(function(){
   
//     $('#load').click(function(){
//         $.get('students.txt',function(response){
//             $('#result').empty();
//             $('#result').append(response);
         
//         });
//     });

// })