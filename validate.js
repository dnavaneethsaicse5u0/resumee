function validate(){
let n=document.getElementById("Name").value;
if(n==""){
alert("enter valid name");
return false;
}
alert("form filled successfully");
return true;
}