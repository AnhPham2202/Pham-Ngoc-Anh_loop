document.getElementById("cal").addEventListener("click", function (event) {
    event.preventDefault();
    var x = parseFloat(document.getElementById("xValue").value);
    var n = parseFloat(document.getElementById("nValue").value);
    var k = 0;
    var result = 0;
    for (var i = 1; i <= n; i++) {
        k = Math.pow(x, i);
        result += k;
    }
    console.log(result);
    document.getElementById("footer").style.display = "block";
    document.getElementById("footer").innerHTML = "Kết quả: " + result;
})