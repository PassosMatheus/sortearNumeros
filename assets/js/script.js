function sortear() {
    var n = Math.floor(Math.random() * 100);
    document.getElementById ("numero").innerHTML = n;

if (n <= 50) {
    document.getElementById("numero").style.color = "red";
    document.getElementById ("numero").innerHTML = n
} else if (n > 50 && n <=79) {
    document.getElementById("numero").style.color = "yellow";
    document.getElementById ("numero").innerHTML = n
} 
else {
    document.getElementById("numero").style.color = "blue";
    document.getElementById ("numero").innerHTML = n
} 
}