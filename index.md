Start: XXX

Termin nadsyłania rozwiązań: XXX

Jednym z najważniejszych problemów w informatyce jest
sortowanie, t.j. ustawienie zadanych elementów w kolejności rosnącej
lub malejącej (dokładniej w kolejności niemalejącej lub nierosnącej).

Przykładowo, w dzienniku szkolnym, uczniowie są zazwyczaj posortowani
według nazwiska począwszy od Anny Andersson, poprzez Ernesta Nemeczeka
i Ijona Tichecho, aż do Uli Zalewskiej.  W informatyce powiemy, że
nazwisko Andersson „jest mniejsze” od Nemeczek (gdyż litera A jest
w alfabecie przed literą N).

Twoim zadaniem będzie zaimplementować sortowanie bąbelkowe, jeden
z prostszych algorytmów sortowania.


## Zanim przystąpisz do rozwiązywania

Jeżeli jeszcze tego nie zrobiłaś, na stronie
[DressCode](https://events.withgoogle.com/dresscode/) kliknij przycisk
„[Zarejestruj się](https://events.withgoogle.com/dresscode/registrations/new/)”
i wypełnij krótki formularz rejestracyjny.  Następnie [powiedz nam coś
o sobie](https://docs.google.com/a/google.com/forms/d/1jXBF3TUIn83r6SgXRT3dLofvoAJCcSf5tZev6TZfBn0/viewform)
w krótkiej anonimowej ankiecie.  Ankieta posłuży nam do jak
najlepszego dostosowania formy DressCode do Twoich preferencji.


## Zadanie

Pobierz na swój komputer plik [`sortowanie.html`](https://github.com/mina86/dresscode-sorting/raw/master/sortowanie.html).
Jeżeli otworzysz ten plik w przeglądarce (np. Chrome, Firefox, Safari,
Internet Explorer), zobaczysz prosty formularz, jednak pole „— wybierz
algorytm —” nie posiada żadnych opcji do wyboru przez co próba
rozpoczęcia demonstracji kończy się niepowodzeniem.

![Pusty formularz](docs/empty-form.png)

Twoim zadaniem jest stworzenie pliku `algorytmy.js`, w którym
zaimplementujesz algorytm sortowanie bąbelkowego.

Aby ułatwić ten cel, przygotowaliśmy plik [`algorytmy.js`](https://github.com/mina86/dresscode-sorting/raw/master/algorytmy.js),
który możesz wykorzystać jako szablon rozwiązania.  Do edycji
wystarczy prosty edytor tekstu—taki jak Notatnik (Windows), TextEdit
(MacOS), czy gedit (Linux).  Możesz użyć również bardziej
zaawansowanych edytorów—np. [Atom](https://atom.io/) czy [Sublime
Text](http://www.sublimetext.com/), które podkreślą składnię
JavaScript.  Po każdej edycji odśwież otwarty w przeglądarce plik
`sortowanie.html`, tak by zobaczyć zmiany.

Poniższy film przedstawia jak strona wygląda z kilkoma
zaimplementowanymi algorytmami:

<iframe width="480" height="480" frameborder="0" allowfullscreen
        src="https://www.youtube.com/embed/hrrjGsfpEwg"></iframe>


## Szczegóły interfejsu

Plik [`algorytmy.js`](https://github.com/mina86/dresscode-sorting/raw/master/algorytmy.js)
zawiera trzy przykładowe algorytmy.  Nie porządkują one elementów,
a jedynie pokazują w jaki sposób na nich operować.

Po rozwiązaniu zadania, Twój plik `algorytmy.js` powinien zawierać
następujące wywołanie funkcji `zarejestrujAlgorytm`:

    zarejestrujAlgorytm(
        'Sortowanie bąbelkowe',
        function(rozmiar, porownaj, zamien) {
            // … Twoja implementacja sortowania bąbelkowego …
        }
    );

W implementacji możesz korzystać ze:

* zmiennej `rozmiar`,
* funkcji `porownaj(i, j)` oraz
* funkcji `zamien(i, j)`.

Zmienna `rozmiar` określa ile elementów należy posortować.  Odpowiada
ona polu „Liczba elementów” w formularzu.

**Uwaga**! Elementy są numerowane od zero.  Oznacza to, że pierwszy
element leży na pozycji o numerze 0, a ostatni na pozycji
`rozmiar - 1`.  Próby operowania na elementach spoza tego zakresu będą
skutkować błędnym zakończeniem algorytmu.

Funkcji `porownaj(i, j)` porównuje element na pozycji `i` z elementem
na pozycji `j`.  Jeżeli element na pozycji `i` jest mniejszy wynikiem
porównania jest -1; jeżeli elementy są równe, wynikiem jest 0; jeżeli
element na pozycji `i` jest większy, wynikiem jest 1.  W szczególności
oznacza to, że:

* `porownaj(i, i) == 0` oraz
* `porownaj(i, j) == -porownaj(j, i)`.

No i na koniec, funkcji `zamien(i, j)` zamienia elementy na pozycji
`i` oraz `j` miejscami.  Funkcja działa poprawnie również, gdy `i`
oraz `j` są sobie równe.

Dla przykładu, wyobraźmy sobie, że mamy do czynienia z tablicą `[3, 1,
1]`.  Wówczas:

* `rozmiar == 3`,
* `porownaj(0, 1) == 1` (gdyż `3 > 1`),
* `porownaj(1, 2) == 0` (gdyż `1 == 1`),
* `porownaj(2, 0) == -1` (gdyż `1 < 3`) i jednocześnie
* wywołanie `zamien(0, 2)` zamieni tablicę do postaci `[1, 1, 3]`.


## Sortowanie przez wybór i wstawianie

Zanim przystąpisz do implementacji sortowania bąbelkowego, sugerujemy
najpierw zaimplementować sortowanie przez wybór oraz sortowanie przez
wstawianie.  Na filmie załączonym powyżej, są to dwa pierwsze
zaprezentowane algorytmy.

### Sortowanie przez wybór

Sortowanie przez wybór działa poprzez wielokrotne wyszukiwanie
najmniejszego elementu z malejącego „końca” tablicy.  Algorytm można
opisać następująco:

1. Niech `i = 0`.
2. Znajdź najmniejszy element spośród elementów `i`…`rozmiar-1`
   i umieść go na pozycji `i`.  W tym celu:
      i. Niech `j = i` oraz `min = i`.
     ii. Zwiększ `j` o jeden.  Jeżeli `j ≥ rozmiar`, skocz do kroku 3.
    iii. Jeżeli element na pozycji `j` jest mniejszy od tego na pozycji
         `min`, niech `min = j`.
     iv. Skocz do kroku ii.
3. Zamień element na pozycji `i` z elementem na pozycji `min`.
4. Zwiększ `i` o jeden.  Jeżeli `i < rozmiar`, skocz do kroku 2.

### Sortowanie przez wstawianie

Sortowanie przez wstawianie działa poprzez krokowe sortowanie coraz to
większej tablicy wstawiając element z końca na odpowiednie miejsce
(stąd nazwa).  Metoda jest często porównywana z sortowaniem kart do
gry, gdy bierze się ze stołu po jednej karcie.  Algorytm można opisać
następująco:

1. Niech `i = 1`.
2. Jeżeli `i ≥ rozmiar`, zakończ algorytm.  Tablica jest posortowana.
3. Wstaw element na pozycji `i` na poprawną pozycję spośród elementów
   `0`…`i`.  W tym celu:
      i. Niech `j = i`.
     ii. Zmniejsz `j` o jeden.  Jeżeli `j < 0`, skocz do kroku 4.
    iii. Jeżeli element na pozycji `j` nie jest większy od elementu na
         pozycji `j+1`, skocz do kroku 4.
     iv. Zamień elementy na pozycji `j` oraz `j+1` miejscami.
      v. Skocz do kroku ii.
4. Zwiększ `i` o jeden.
5. Skocz do kroku 2.


## Sortowanie bąbelkowe

Sortowanie bąbelkowe jest trochę bardziej skomplikowanym algorytmem.
Nazwa wywodzi się od porównania do bąbelków powietrza poruszających
się w górę w akwarium z wodą.

Algorytm porównuje ze sobą kolejne pary sąsiadujących ze sobą
elementów i zamienia je jeżeli nie są one w odpowiedniej kolejności.
Wykonując tę operację na całej tablicy dostatecznie wiele razy
powoduje, że elementy stają się uporządkowane.

Algorytm wygląda następująco:

1. Niech `n = rozmiar`.
2. Wykonaj pojedyncze przejście „bąbelkowania”, w tym celu:
      i. Niech `i = 0`.
     ii. Zwiększ `i` o jeden.  Jeżeli `i ≥ rozmiar`, skocz do kroku 3.
    iii. Jeżeli element na pozycji `i` jest mniejszy od elementu na
         pozycji `i - 1`, zamień elementy miejscami.
     iv. Skocz do kroku ii.
3. Zmniejsz `n` o jeden.  Jeżeli `n > 0`, skocz do kroku 2.

### Optymalizacje

Ale uwaga! Powyżej opisany algorytm można zoptymalizować
przyśpieszając jego działanie.

1. Po każdym kolejnym przejściu wewnętrznej pętli
   (t.j. „bąbelkowania”), kolejne największe elementy umieszczane są
   na poprawnej pozycji.  Fakt ten można wykorzystać modyfikując
   przejścia „bąbelkowania” tak, aby zamiast za każdym razem operować
   na elementach `0`…`rozmiar-1`, operowała na elementach z zakresu
   `0`…`n-1`.

2. Algorytm należy dodatkowo zmodyfikować w ten sposób, że powinien on
   zakończyć działanie jeżeli wewnętrzna pętla nie dokonała żadnych
   zamian.

   Dla przykładu, jeżeli elementy byłyby od razu uporządkowane,
   implementacja powyższego algorytmu pracowicie porównywałaby ze sobą
   elementy nie wykonując żadnych zamian miejsc.

Dopiero po zaimplementowaniu sortowania bąbelkowego z tymi dwoma
ulepszeniami, zadanie zostanie uznane za rozwiązane.


## Wysyłanie rozwiązań

XXX


## Dla ambitnych

Jeżeli zainteresował Cię temat sortowania, zachęcamy do implementacji
innych algorytmów takich jak sortowanie szybkie, czy sortowanie przez
kopcowanie.

Niestety z powodu limitacji kodu odpowiedzialnego za animacje, nie
wszystkie algorytmy mogą zostać zaimplementowane.  Np. sortowanie
przez scalanie wymaga dodatkowej tymczasowej tablicy, czego skrypt nie
udostępnia, a sortowanie kubełkowe wymaga znajomości wartości
elementów.
