var copybtn = document.getElementById("copy-btn");
var link = document.getElementById("link");

copybtn.onclick = function () {
    navigator.clipboard.writeText(link.innerHTML);
    copybtn.innerHTML = "Fait"
    setTimeout(function () {
        copybtn.innerHTML = "Copier"
    }, 3000)
}