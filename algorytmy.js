
// Przykładowy kod pokazujący jak dodać algorytm oraz w jaki sposób wygląda
// wykorzystanie zmiennej rozmiar oraz funkcji porownaj i zamien.  „Algorytm”
// nie ma za zadanie posortować elementów, więc wątpliwe jest, że w efekcie
// tablica będzie posortowana.
zarejestrujAlgorytm('Przykład', function(rozmiar, porownaj, zamien) {
    switch (porownaj(0, 1)) {
    case -1:
        // Pierwszy element (t.j. element o indeksie 0) jest mniejszy od
        // drugiego (t.j. elementu o indeksie 1).  Zamień drugi i ostatnio
        // element miejscami.
        zamien(1, rozmiar - 1);
        break;

    case 0:
        // Pierwszy i drugi element są sobie równe.  Zamień dwa ostatnie
        // elementy miejscami.
        zamien(rozmiar - 1, rozmiar - 2);
        break;

    case 1:
        // Pierwszy element jest większy od drugiego.  Zamień drugi i trzeci
        // element miejscami, ale tylko jeżeli są co najmniej trzy elementy.
        if (rozmiar > 2) {
            zamien(1, 2);
        }
        break;
    }

    // Jeżeli mamy nieparzystą liczbę elementów, zamień elementy wokół środka.
    // W przeciwnym wypadku, zamień skrajne elementy.
    if (rozmiar % 2 == 1) {
        zamien((rozmiar - 1) / 2 - 1, (rozmiar - 1) / 2 + 1);
    } else {
        zamien(0, rozmiar - 1);
    }

    // Jeżeli pierwszy element jest mniejszy od ostatniego, zamień je miejscami.
    if (porownaj(0, rozmiar - 1) < 0) {
        zamien(0, rozmiar - 1);
    }

    // Jeżeli drugi element jest większy od przedostatniego, zamień je
    // miejscami.
    if (porownaj(1, rozmiar - 2) > 0) {
        zamien(1, rozmiar - 2);
    }
});

// Kolejny przykład, który tym razem miesza kolejność elementów.
zarejestrujAlgorytm('Mieszaj', function(rozmiar, porownaj, zamien) {
    for (var i = 0; i < rozmiar - 1; ++i) {
        zamien(i, i + Math.floor(Math.random() * (rozmiar - i)));
    }
});

// I jeszcze algorytm do odwracania kolejności elementów.
zarejestrujAlgorytm('Odwróć', function(rozmiar, porownaj, zamien) {
    for (var i = 0, j = rozmiar - 1; i < j; ++i, --j) {
        zamien(i, j);
    }
});
