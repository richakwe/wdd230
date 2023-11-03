var count = 7; // The delay in seconds before redirecting.
var redirect = "https://richakwe.github.io/wdd230/chamber/join.html"; // The redirection's landing page.
function countDown() {
if(count >= 0){
document.getElementById("timer").innerHTML = count--;
setTimeout("countDown()", 1000);
}else{
window.location.href = redirect;
}
}
countDown()