

document.getElementById("minInt").addEventListener("click", function () {
    var number = 0;
    var sum = 0;
    while (sum <= 1000) {
        number++;
        sum += number;
    }
    document.getElementById("footer").style.display = "block";
    document.getElementById("footer").innerHTML = "Số nguyên dương nhỏ nhất thoả điều kiện là: " + number + "</br>Với tổng là: " + sum;
})