/*############################## This code is written by Norhan El-Deeb @2019 ###################################*/

    var number = document.getElementById('number');
    var pass = document.getElementById('pass');
    var erro= document.getElementById('error');
    

 function check(){

    if(number.value.trim()=="" || pass.value.trim()==""){
         erro.innerHTML="*Please fill in the blanks ";
         return false;
    
     }else{
         erro.style.display= "none";
         number.value="";
         pass.value="";
         window.location="config.html";
         return false;
     }

 }

    


