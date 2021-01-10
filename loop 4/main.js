document.getElementById("divAdd").addEventListener("click", function (event) {
    event.preventDefault();
    for (var i = 1; i <= 10; i++) {
        if (i % 2 == 0) {
            var div = document.createElement("div")
            div.style.backgroundColor = "red";
            div.style.height = "10px";
            document.getElementById("content").appendChild(div);
        } else {
            var div = document.createElement("div")
            div.style.backgroundColor = "green";
            div.style.height = "10px";
            document.getElementById("content").appendChild(div);
        }
    }
})