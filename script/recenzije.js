$("#dugme-potvrdi").click(function () {

    tekstImePrezime = "Vase ime i prezime: " + document.getElementById("polje-ime").value + ' ' + document.getElementById("polje-prezime").value + '\n';
    tekstEmail = "E-mail: " + document.getElementById("polje-email").value + '\n'
    tekstTelefon = "Telefon: " + document.getElementById("polje-telefon").value + '\n'
    tekstDatum = "Datum posete: " + document.getElementById("polje-dan").value + '.' + document.getElementById("polje-mesec").value + '.' + document.getElementById("polje-godina").value + "." + '\n'

    pol = document.getElementsByName('pol');
    tekstPol = "Pol: "
    for (i = 0; i < pol.length; i++) {
        if (pol[i].checked)
            tekstPol += pol[i].value + '\n';
    }

    oceneHrana = document.getElementsByName('hrana');
    oceneObjekat = document.getElementsByName('objekat');
    oceneLokacija = document.getElementsByName('lokacija');
    oceneGostoprimstvo = document.getElementsByName('gostoprimstvo');
    oceneIzbor = document.getElementsByName('izbor-hrane');
    tekstOcene = "Ocene: \n";
    tekstHrana = "        Hrana: ";
    tekstObjekat = "        Objekat: ";
    tekstLokacija = "        Lokacija: ";
    tekstGostoprimstvo = "        Gostoprimstvo: ";
    tekstIzbor = "        Izbor hrane: ";

    for (i = 0; i < 5; i++) {
        if (oceneHrana[i].checked)
            tekstHrana += oceneHrana[i].value + '\n';

        if (oceneObjekat[i].checked)
            tekstObjekat += oceneObjekat[i].value + '\n';

        if (oceneLokacija[i].checked)
            tekstLokacija += oceneLokacija[i].value + '\n';

        if (oceneGostoprimstvo[i].checked)
            tekstGostoprimstvo += oceneGostoprimstvo[i].value + '\n';

        if (oceneIzbor[i].checked)
            tekstIzbor += oceneIzbor[i].value + '\n';
    }

    tekstOcene += tekstHrana + tekstObjekat + tekstLokacija + tekstGostoprimstvo + tekstIzbor;

    tekstKontakt = "Nacin kontaktiranja: ";

    tipoviKontakta = document.querySelectorAll(".tip-kontakta input");
    for (i = 0; i < tipoviKontakta.length; i++) {
        if (tipoviKontakta[i].checked)
            tekstKontakt += tipoviKontakta[i].value + " ";
    }
    tekstKontakt += '\n';

    tekstArea = "Komentar: " + document.getElementById("polje-recenzija").value + '\n';



    tekstPopUp = tekstImePrezime + tekstEmail + tekstTelefon + tekstDatum + tekstPol + tekstOcene + tekstKontakt + tekstArea;

    alert(tekstPopUp);
})