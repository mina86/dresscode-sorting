const NAMES = document.body.parentElement.getAttribute('lang') == 'pl' ? {
	'insert': 'Sortowanie przez wstawianie',
	'select': 'Sortowanie przez wybór',
	'bubble': 'Sortowanie bąbelkowe',
	'quick': 'Sortowanie szybkie',
	'heap': 'Sortowanie przez kopcowanie',
} : {
	'insert': 'Insertion sort',
	'select': 'Selection sort',
	'bubble': 'Bubble sort',
	'quick': 'Quick sort',
	'heap': 'Heap sort',
};

registerAlgorithm(NAMES['insert'], (size, cmp, swap) => {
	for (let i = 1; i < size; ++i) {
		for (let j = i; j > 0 && cmp(j - 1, j) > 0; --j) {
			swap(j - 1, j);
		}
	}
});

registerAlgorithm(NAMES['select'], (size, cmp, swap) => {
	for (let i = 0; i < size - 1; ++i) {
		let min = i;
		for (let j = i + 1; j < size; ++j) {
			if (cmp(j, min) < 0) {
				min = j;
			}
		}
		if (min != i) {
			swap(i, min);
		}
	}
});

/* The simplest Bubble sort algorithm which continues going through the
   array until no swaps happen. */
registerAlgorithm(NAMES['bubble'], (size, cmp, swap) => {
	for (let swapped = true; swapped; ) {
		swapped = false;
		for (let i = 1; i < size; ++i) {
			if (cmp(i - 1, i) > 0) {
				swap(i - 1, i);
				swapped = true;
			}
		}
	}
});

/* Improved Bubble sort algorithm which keeps track index at which last swap
   happened and in the next iteration only checks array up to that location. */
registerAlgorithm(NAMES['bubble'] + ', v2.0', (size, cmp, swap) => {
	while (size > 1) {
		let newSize = 0;
		for (let i = 1; i < size; ++i) {
			if (cmp(i - 1, i) > 0) {
				swap(i - 1, i);
				newSize = i;
			}
		}
		size = newSize;
	}
});

registerAlgorithm(NAMES['quick'], (size, _cmp, swap) => {
	const cmp = (i, j) => i == j ? 0 : _cmp(i, j);

	const partition = (lo, hi) => {
		let pivot = lo;
		let i = lo - 1;
		let j = hi + 1;
		for (;;) {
			do {
				++i;
			} while (cmp(i, pivot) < 0);
			do {
				--j;
			} while (cmp(j, pivot) > 0);
			if (i >= j) {
				return j;
			}
			if (pivot == i) {
				pivot = j;
			} else if (pivot == j) {
				pivot = i;
			}
			swap(i, j);
		}
	};

	const quicksort = (lo, hi) => {
		if (lo >= 0 && hi >= 0 && lo < hi) {
			let mid = partition(lo, hi);
			quicksort(lo, mid);
			quicksort(mid + 1, hi);
		}
	};

	quicksort(0, size - 1);
});

registerAlgorithm(NAMES['heap'], (size, cmp, swap) => {
	const parentIdx = idx => ((idx - 1) / 2) | 0;
	const childIdx = (idx, child) => idx * 2 + 1 + (child || 0);

	/* Move parent down until it’s largest than both its children. */
	const siftDown = parent => {
		for (;;) {
			let child = childIdx(parent);
			if (child >= size) {
				break;
			}
			/* If parent has two children, pick the larger one. */
			if (child + 1 < size && cmp(child, child + 1) < 0) {
				child = child + 1;
			}
			if (cmp(parent, child) >= 0) {
				/* Heap property is preserved, we’re done. */
				break;
			}
			/* Parent is smaller than one of the children.  Swap it
			   with the largest child and continue pushing it down
			   if necessary. */
			swap(parent, child);
			parent = child;
		}
	};

	/* Heapify the array.  Start from parent of the last element and sift
	   down. */
	for (let i = parentIdx(size - 1); i >= 0; --i) {
		siftDown(i);
	}

	/* Invariant is that array[0..size] is a max-heap.  In each iteration we
	   pick the top of the heap, put it at the end of the array, fix the
	   heap property at array[0..size-1] and reduce size by one. */
	while (size > 1) {
		size -= 1;
		swap(0, size);
		siftDown(0, size);
	}
});
