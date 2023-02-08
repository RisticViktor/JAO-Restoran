$(".nav-link").click(function () {
    const tekst = this.innerText;
    switch (tekst) {
        case "Meni":
            window.open("meni.html", "_self");
            break;
        case "O nama":
            window.open("o-nama.html", "_self");
            break;
        case "Hall of fame":
            window.open("hall-of-fame.html", "_self");
            break;
        case "Recenzije":
            window.open("recenzije.html", "_self");
            break;
    }
})

funkcijaDodeleBoje();

$(".nav-logo").click(function () {
    window.open("index.html", "_self");
})


$(".burger").click(function () {
    setTimeout(function () {
        $("#ikonica-burger").toggleClass("fa-bars");
        $("#ikonica-burger").toggleClass("fa-x");

        $(".container").toggleClass("container-veci");
        $(".header").toggleClass("header-veci");
        $(".nav-bar").toggleClass("nav-bar-isti");
        $(".content").toggleClass("content-veci");

        $(".burger-menu").toggleClass("burger-menu-clicked");
    }, 40);
})

$(".burger-div").click(function () {
    const tekst = this.innerText;

    switch (tekst) {
        case "Meni":
            window.open("meni.html", "_self");
            break;
        case "O nama":
            window.open("o-nama.html", "_self");
            break;
        case "Hall of fame":
            window.open("hall-of-fame.html", "_self");
            break;
        case "Recenzije":
            window.open("recenzije.html", "_self");
            break;
    }
})

function funkcijaDodeleBoje() {
    const tekst = document.title;

    switch (tekst) {
        case "Meni - Kafana Jao":
            $(".burger-meni").toggleClass("boja-trenutne-stranice");
            $(".link-meni").toggleClass("boja-trenutne-stranice");
            break;
        case "O nama - Kafana Jao":
            $(".burger-o-nama").toggleClass("boja-trenutne-stranice");
            $(".link-o-nama").toggleClass("boja-trenutne-stranice");
            break;
        case "Hall of fame - Kafana Jao":
            $(".burger-hall-of-fame").toggleClass("boja-trenutne-stranice");
            $(".link-hall-of-fame").toggleClass("boja-trenutne-stranice");
            break;
        case "Recenzije - Kafana Jao":
            $(".burger-recenzije").toggleClass("boja-trenutne-stranice");
            $(".link-recenzije").toggleClass("boja-trenutne-stranice");
            break;
    }
}