// USE ONLY THIS SCRIPT in doctor.html
// Real-time patient data only
// No old saved demo data

setInterval(loadPatients,1000);

function loadPatients(){

let patients =
JSON.parse(localStorage.getItem("patients")) || [];

/* COUNTS */

document.getElementById("appointCount").innerHTML =
patients.length + " Patients Today";

document.getElementById("requestCount").innerHTML =
patients.length + " New Requests";

let critical = patients.filter(p=>p.emergency==true);

document.getElementById("emergencyCount").innerHTML =
critical.length + " Critical Alerts";

/* DROPDOWN */

let select=document.getElementById("patientSelect");

select.innerHTML =
'<option value="">Select Patient</option>';

patients.forEach(function(p){

select.innerHTML +=
'<option value="'+p.name+'">'+p.name+' - '+p.symptom+'</option>';

});

}

/* APPOINTMENTS */

function viewSchedule(){

let patients =
JSON.parse(localStorage.getItem("patients")) || [];

let txt="📅 TODAY APPOINTMENTS\n\n";

patients.forEach(function(p,i){

txt += (i+1)+". "+p.name+" - "+p.symptom+"\n";

});

if(patients.length==0){
txt="No Patients Logged In";
}

alert(txt);

}

/* REQUESTS */

function openRequests(){

let patients =
JSON.parse(localStorage.getItem("patients")) || [];

let txt="🧑‍⚕ PATIENT REQUESTS\n\n";

patients.forEach(function(p,i){

txt += (i+1)+". "+p.name+" - "+p.symptom+"\n";

});

if(patients.length==0){
txt="No Requests Available";
}

alert(txt);

}

/* EMERGENCY */

function emergencyNow(){

let patients =
JSON.parse(localStorage.getItem("patients")) || [];

let critical =
patients.filter(p=>p.emergency==true);

let txt="🚨 EMERGENCY CASES\n\n";

critical.forEach(function(p,i){

txt += (i+1)+". "+p.name+" - "+p.symptom+"\n";

});

if(critical.length==0){
txt="No Emergency Cases";
}

alert(txt);

}

/* DETAILS */

function showPatientDetails(){

let patients =
JSON.parse(localStorage.getItem("patients")) || [];

let name=document.getElementById("patientSelect").value;
let box=document.getElementById("patientInfo");

let patient = patients.find(p=>p.name==name);

if(!patient){
box.innerHTML="";
return;
}

box.innerHTML=
"<h3>"+patient.name+"</h3>"+
"<p>Problem: "+patient.symptom+"</p>"+
"<ul><li>Take Rest</li><li>Drink Water</li><li>Consult Doctor</li></ul>";

document.getElementById("patientName").value=patient.name;

}