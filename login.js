// REPLACE FULL login.js
// Added Doctor + Admin username/password login

function signup(){

document.getElementById("msg").innerHTML="✅ Account Created Successfully";
document.getElementById("msg").style.color="green";

}

function login(){

let user=document.getElementById("email").value.trim();
let pass=document.getElementById("password").value.trim();
let role=document.getElementById("role").value;
let msg=document.getElementById("msg");

/* DOCTOR LOGIN */

if(role=="doctor"){

if(user=="doctor" && pass=="1234"){

msg.innerHTML="✅ Doctor Login Success";
msg.style.color="green";

setTimeout(function(){
window.location.href="doctor.html";
},1000);

}else{

msg.innerHTML="❌ Wrong Doctor Username / Password";
msg.style.color="red";

}

}

/* ADMIN LOGIN */

else if(role=="admin"){

if(user=="admin" && pass=="admin123"){

msg.innerHTML="✅ Admin Login Success";
msg.style.color="green";

setTimeout(function(){
window.location.href="admin.html";
},1000);

}else{

msg.innerHTML="❌ Wrong Admin Username / Password";
msg.style.color="red";

}

}

/* PATIENT LOGIN */

else{

msg.innerHTML="✅ Patient Login Success";
msg.style.color="green";

setTimeout(function(){
window.location.href="dashboard.html";
},1000);

}

}