/*############################## This code is written by Norhan El-Deeb @2019 ###################################*/

var fill_1 = document.getElementById('fill_1');
var fill_2 = document.getElementById('fill_2');
var fill_3 = document.getElementById('fill_3');
var fill_4 = document.getElementById('fill_4');
var erro= document.getElementById('error');
var erro_2= document.getElementById('error_2');
var x = document.getElementById("msg");


function check(){

    if(fill_1.value.trim()=="" || fill_2.value.trim()=="" || fill_3.value.trim()=="" || fill_4.value.trim()==""){
        erro.innerHTML="*Please fill in the blanks ";
        return false;
    }
    if(fill_2.value!=fill_3.value){

        erro_2.innerHTML="**Passowrd does not match";
        erro.style.display= "none";
        return false;

    }else{
        erro.style.display= "none";
        fill_1.value="";
        fill_2.value="";
        fill_3.value="";
        fill_4.value="";     
        x.className = "show";
        setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
        return false;
    }
   
}




