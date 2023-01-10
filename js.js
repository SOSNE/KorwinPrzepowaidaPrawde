function KorwinIsTalking(){

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const rand = []
    for (let i=1; i<=6;i++){
    rand.push(getRandomInt( 0, 11 ))
    }
    const teksty = [
        [
            "Panie Marszałku Wysoka Izbo",
            "Chciałbym zwrócić uwagę na podstawowe rzeczy",
            "Po pierwsze",
            "Przeżywam czasami szok",
            "Proszę zwrócić uwagę że",
            "I tak mam trzy razy mniej czasu",
            "więc proszę mi pozwolić powiedzieć",
            "Państwo się się śmieją ale",
            "Ja nie potrzebowałem edukacji seksualnej żeby wiedzieć że",
            "No niestety",
            "Gdzie leży przyczyna problemu? Ja państwu powiem",
            "Państwo chyba nie widzą że",
            "Oświadczam kategorycznie",
        ],
        [
            "Wszystkie kobiety",
            "Hitler kumpel Kraśniewskiego",
            "Homosie",
            "Studenci i Studentki",
            "właściciele niewolników",
            "związkowcy",
            "tak zwane dzieci kwiaty",
            "rozmaici urzędnicy",
            "federaści",
            "ateiści",
            "ci durnie i złodzieje",
            "ludzie wybrani głosami meneli spod budki z piwem",
            "agenci obcych służb",
        ],
        [
            "po przeczytaniu Manifestu komunistycznego",
            'którymi się brzydzę',
            "których nienawidzę",
            "czyli taka żydokomuna",
            "odkąd zniesiono karę śmierci",
            "którymi pogardzam",
            "na polecenie Brukseli",
            "posłusznie",
            "bezmyślnie",
            "z nieprawdopodobną pogardą dla człowieka",
            "za wszelką cenę",
            "za pieniądze podatników",
            "w ramach postępu",
        ],
        [
            "udają homoseksualistów",
            "niszczą rodzinę",
            "idą do polityki",
            "zakazują góralom robienia oscypków",
            "organizują paraolimpiady",
            "wprowadzają ustrój w którym raz na cztery lata można wybrać sobie pana",
            "ustawiają fotoradary",
            "wprowadzają dotacje",
            "podnoszą wiek emerytalny",
            "odbierają dzieci rodzicom",
            "nawołują do podniesienia podatków",
            "głoszą brednię o globalnym ociepleniu",
            "nie dopuszczają prawicy do władzy",
        ],
        [
            "żeby poddawać wszystkich tresurze",
            "bo taka jest Ich natura",
            "bo chcą wszystko kontrolować",
            "bo nie rozumieją że socjalizm nie działa",
            "żeby wreszcie zapanował socjalizm",
            "zamiast pozwolić ludziom zarabiać",
            "żeby wyrwać kobiety z domu",
            "bo głupich jest więcej niż mądrych",
            "bo chcą tworzyć raj na ziemi",
            "bo dzięki temu mogą brać łapówki",
            "żeby mężczyźni przestall być agresywni",
            "żeby nie opłacało się mieć dzieci",
            "bo bez tego (tfu) demokracja nie może istnieć",
        ],
        [
            "Polska jest do tego zobowiązana",
            "co ma zresztą tyle samo w szachach dla debili",
            "co zostało dokładnie zaplanowane w Magdalence przez śp. generała Kiszczaka",
            "i trzeba być idiotą żeby ten system popierać",
            "ale nawet ja jeszcze dożyję normalnych czasów",
            "co dowodzi że wyskrobano nie tych co trzeba",
            "a zwykłym ludziom wmawiają że coś nie działa",
            "cóż chcieliście (tfu) demokracji to macie",
            "dlatego trzeba zlikwidować koryto a nie zmieniać świnie",
            "a wystarczyłoby przestać wypłacać zasiłki",
            'I właśnie dlatego Europa umiera',
            "o czym się nie mówi",
            "dlatego w społeczeństwie jest równość a powinno być rozwarstwienie",
        ],
    ]
    console.log(rand[1]);

    document.getElementById("nr1").innerHTML = teksty[ 0 ] [ rand[0] ] + " "+ teksty[ 1 ] [ rand[1] ]
        + " "+ teksty[ 2 ] [ rand[2] ]+ " "+ teksty[ 3 ] [ rand[3] ]+ " "+ teksty[ 4 ] [ rand[4] ]
        + " "+ teksty[ 5 ] [ rand[5] ];
    console.log("sssss");
}