function close1() {
  document.getElementById("event-detail").style.display = "none";
}
function close2() {
  document.getElementById("rules").style.display = "none";
}
function close3() {
  document.getElementById("judges").style.display = "none";
}
function close4() {
  document.getElementById("cood").style.display = "none";
}

document.getElementById("event-link").addEventListener("click", myFunction1);
function myFunction1() {
  document.getElementById("event-detail").style.display = "block";
  close2();
  close3();
  close4();
}
//

document.getElementById("rules-link").addEventListener("click", myFunction2);
function myFunction2() {
  document.getElementById("rules").style.display = "block";
  close1();
  close3();
  close4();
}
//
document.getElementById("judges-link").addEventListener("click", myFunction3);
function myFunction3() {
  document.getElementById("judges").style.display = "block";
  close1();
  close2();
  close4();
}
//
document.getElementById("cood-link").addEventListener("click", myFunction4);
function myFunction4() {
  document.getElementById("cood").style.display = "block";
  close1();
  close2();
  close3();
}
