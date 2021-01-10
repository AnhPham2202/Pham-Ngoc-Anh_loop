document.getElementById("cal").addEventListener("click", function (event) {
    event.preventDefault();
    var number = parseInt(document.getElementById("number").value);
    var factorial = 1;
    var k = 0;
    for (var i = 1; i <= number; i++) {
        factorial *= i;
    }
    document.getElementById("footer").style.display = "block";
    document.getElementById("footer").innerHTML = "Giai thừa của n: " + factorial;
})