trenutniDatum();

function trenutniDatum() {
    var date = new Date();
    const datum = date.toDateString().split(" ")[1] + " " + date.toDateString().split(" ")[3];
    document.getElementById("copyright-datum").innerText = "© " + datum + " MicanDesign";
}