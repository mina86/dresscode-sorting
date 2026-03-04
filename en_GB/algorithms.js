
// Example code demonstrating how to add algorithms and how to use size variable
// and compare and swap functions.  This demonstration algorithm does not
// attempt to sort the elements, so it is doubtful the table will be sorted once
// its finished.
registerAlgorithm('Example', function(size, compare, swap) {
    switch (compare(0, 1)) {
    case -1:
        // The first element (i.e. element at index 0) is less than the second
        // one (i.e. element at index 1).  Swap the second and the last
        // elements.
        swap(1, size - 1);
        break;

    case 0:
        // The first and second elements are equal.  Swap the last two elements.
        swap(size - 1, size - 2);
        break;

    case 1:
        // The first element is greater than the second one.  Swap the second
        // and the third elements but make sure there are at least three
        // elements.
        if (size > 2) {
            swap(1, 2);
        }
        break;
    }

    // If there’s odd number of elements, swap elements around the middle.
    // Otherwise, swap the first and the last elements.
    if (size % 2 == 1) {
        swap((size - 1) / 2 - 1, (size - 1) / 2 + 1);
    } else {
        swap(0, size - 1);
    }

    // If the first element is less than the last one, swap them.
    if (compare(0, size - 1) < 0) {
        swap(0, size - 1);
    }

    // If the second element is greater than the last-but-one, swap them.
    if (compare(1, size - 2) > 0) {
        swap(1, size - 2);
    }
});

// Another example which shuffles the elements.
zarejestrujAlgorytm('Shuffle', function(size, compare, swap) {
    for (var i = 0; i < size - 1; ++i) {
        swap(i, i + Math.floor(Math.random() * (size - i)));
    }
});

// And a final example which reverses order of the elements.
zarejestrujAlgorytm('Reverse', function(size, compare, swap) {
    for (var i = 0, j = size - 1; i < j; ++i, --j) {
        swap(i, j);
    }
});
