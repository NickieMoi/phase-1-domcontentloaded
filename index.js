// Your code goes here
function domUpdate() {
  document.addEventListener("DOMContentLoaded", function () {
    modifyDom();
  });
}

function modifyDom() {
  document.getElementById("text").innerHTML = "This is really cool";
}
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("text").innerHTML = "This is really cool!";
});