window.onload = function () {
    const serv = GetURLParam("server");
    document.getElementsByTagName("title")[0].innerHTML = serv ? serv : "MC Map Viewer"
}