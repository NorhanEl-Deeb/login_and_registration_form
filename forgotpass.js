/*############################## This code is written by Norhan El-Deeb @2019 ###################################*/

function check(){

    var fill = document.getElementById('fill');
    var erro= document.getElementById('error');
    var x = document.getElementById("msg");

    if(fill.value.trim()==""){
        erro.innerHTML="*Please enter your Email ";
        return false;
    }else{
        erro.style.display= "none";
        fill.value="";     
        x.className = "show";
        setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
        return false;
    }
}




