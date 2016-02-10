/**
 * Sorting algorithms demonstration framework.
 * Copyright Google, Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License.  You may obtain a copy
 * of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.  See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */

var zarejestrujAlgorytm = (function() {
	/** URL of the image of the head.  @const {string} */
	var HEAD_URL = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4AIJESscos3FqQAACF9JREFUWMPtmNtvXEcdxz8z5+zZ9WXXXrv1Jes0rp34ljiNmzpukpZExVGhF6IWeICXPvAAPHCREBL/AbwgQFBRVUi8UCERQUNLq0BCStrQxE3c5uKmSR3Ht9jr9e56117v7VxmeFjvQqvQOmkDeejvabVn5szn/C7f38wIrTV3sknucPsM8DPAzwA/xkyAicvvLKGhs3egAeDS6JtaSsGmrm0H3j514qjtuPgtP67S2I4NStEQDrN9cG+naVnXbiegeOWVl3RjQyNSCpbTaYrFIuH6MEop4vE43T1dtLZuwPRJpJAopSjYNvHoAql4EtuxqQ3WYgiJ5fdj+nz0bB8QnxqgUkoDCFF6pwa0VmilMQyDYtEuPRMe0pBordFa4zN8CEB5HtlslqVkAmmaRGMxkgsxOto20D0w+IlBRT6f11IKYA1QK9Cgdem3NAwMw0ApFyH+nbJaa4QAgUAaJe8iJJ7WpJIJ3n93DOG57H7kwCeCFJ7n6fKCH/DkmqeEEGit8TwPKeUarEIIgZQlYKVUaawWuIAhwTBgcuoaV9+/TGtjI/0799wSqCyDfBgOQEqJEAKlFGNjY+RyuQ+MU0qhlKr8JyRraaAo5HK0tjQzNLSLyclJThx5SX8imdFaVxYsA/7n4vF4nMXFRTzPI5PJYNs2rut+YI7SGoFASInPsjBNH6HaII8+9gTxpTS/+82vdT6bGb6lIilbGaoyQAhc1+XUqVNkMhl27drFpUuXCIfD9Pf34zgOnudhmiZCSoQw0cJDag8hQTtFwERrOH/uHc6OvMm2vh72Dj+xrpCb6XQarTVSlirUMAwsy6qE1zRNDMNASonneRw6dIjNmzdXPiQWi2HbNh0dHXiehxalCvM8hfY8TDRIA9O02Dm0hw0bWnj58IskFmP64Ne/8bGQ4tixY7oMVs5H0zTx+/0EAgEsy8Ln8zE7OwtAMplkbm6Oxx9/nC1btnD58mUymQyDg4MUi8XKfNuxkQgc1yG5vMzyyirhUA2RSDPKdXj1pcOk40me+db3PhLSFEJUKrUcUs/zWF1dZXl5eS35JaZhADAxMUFdXR3V1dWV3F1dXaVYLCKEwLZtcrkc09PTNDY2UhsMcm1iisXFBK5doC5Uw33bejlw4DFOnz7NL3/6Y/3t7/6g0/TduCNJKSUlQRPoSjVK5FqoTdPEXJMWgO7ubiYnJ5mfn0drTT6fJxqNkkgkkFLi9/sZGRnBMAzOnT+HY9ts7dlKW0uEu8N3E6wKMXb+XWamr/PQvn0MPriXH37/OxOvvfrnG1a5KTUIrVFKY0hZEmmlSrItBAIBa13F8zwikQihUIjR0VH6+vpIp9Mkk0nC4TAXL16s5GM8HmdzRyeBQICamlpSd9XhEw5usUBjfZDpiSvMXLtCqC7I/j27qKuxbhziskRopdFCl8B0yam60l9KoTSkJJ/P09nZwYULF0mlUti2TU1NDbFYjKmpKXbv3k0wGKS5uRnDMHFdB4GD5bPxBzyGHvq8WIrN/qSheeOP1lXFWqmSp6TAcZxS1UqJ0hpd1kEEHgKtFKYU+HwBbNsp5V6hiGmaJBIJmpqaaGlpoVgsEggEcF13TX5Mcjkbu+gAsF44ALMqEMBbAwn4/ZXOUa5oraHUq8FTCkMIDNPA9Vxcz8V2bLLZLCsrKwQCAZRSFckyTbMspvisKor5+M3vB6+Mj1MsFECIkv4JiRClNifXOoLPZyCR+AwD7fNhKY+AYbCykiEajRIOh6mqqqK+vp5sNlsBLXenQCBAIpHg7NkzPDz8hZsDHNzaRUNTyyEEZNPLw45jh8s7Fdf1SC+nyBcK5ApFikA+q8hmcwitWMksk8/liEQiGKZBJpOpfJht22vSJdBasbSUqmwubgqwb2jvLe0ynv/5z3Qum8cfqMLvD2BKk6mpSXr7elFaEYvFiCfiVFVVs7nzXiKRDTz5pYPiljcLN2vNLc3ks6soz8Xv96GEoqHpLq5euUpyMcnYhYvkV3MszEVxXU37vR3kVpL6rRNH9P8E0HYcOu5pYyE6SyIZw/RL+nZso1iwMYTBjvvuJxSsJ1wf5u23L1C0PayqKqxQLSePH9a3BfCd14/qfx49okdPvq5tz+Xezk48xyU6P4+JQShQxeCenQQbathwTxP1dwVZLWSYn5/hteNHSafT9HT1sLKaJTY7/od1n+rWYyeP/EVfeX+cje3tnDw9Qld3F8G6EK2trSzFk5w7e5a5qWkim9qIJxKkUikaGxux8wVamxspFoqceesMu/c8SHffdo4f//tXv/bMlk/Pg1fGx7k2NY2rNI8MH2Bo70NoUWqLTi5PdPo68etzrCxcZ2tHx6GDTzzVuX/fAdHb2T66MD1BIZchkYgzMvIWHZt76OrdyokXD31sqMV6r99+++wvdNumTQRqQww+uBe/ZTE1PcFzz/6K/u5edg7cz5a+rd80q6ufv9H8c6fe0HOxKHOxGDV19ezc1s+5f7xO77Ze7tv/3w9W6w5xtWWynE4RaW/HVTamNvjjn15maM/D+LRN7wMffcTcsfthsaMcjZFjeua98yyvpkgmFz+dHAyFanlj5CzC76cpEuGFF35PdGGBpw4+ydX3zpHPrgxX1YSOredd3UPDonvoJq4+1mN3N7fQ3r4Jv9/i+eeeY2Zmjo1tmzANA8dxWS/cLd3NrMce2P+o0IapD7/8KtsfuJ8vP/0V8gUHx3Gw/NadcbvleYqevl4cx8Wy/PT395NIJhHG7bskM29m8PjlMTZ2dFAdDGJKD0N45JaTGB86qv7fPNjX18P1mSlMAW1trZwfPcPs1DUeeexpcUd4cOfnvigKjqv/evRvJFIrzF2fZ2Bg4LZeYP4LHU0lcbIh0X4AAAAASUVORK5CYII=';
	/** URL of the image of the body.  @const {string} */
	var BODY_URL = 'data:image/png;base64,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';
	/** URL of the image of the tail. @const {string} */
	var TAIL_URL = 'data:image/png;base64,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';

	// IDs of HTML elements.
	var CONTAINER_ID = 'container';
	var SELECT_ID = 'algo';
	var NUM_ELEMENTS_ID = 'num';
	var FORM_ID = 'form';
	var STATUS_ID = 'status';

	// Property name used to store values in DOM objects.
	var SORT_FUNCTION_SYMBOL = '!$ sortFunction ' + Math.random();
	var VALUE_SYMBOL = '!$ value ' + Math.random();

	// Dimensions of the images.
	var IMG_WIDTH = 40;
	var IMG_HEIGHT = 40;
	var IMG_TOP = 5;
	var IMG_LEFT = 10;
	var CAT_HEIGHT = IMG_HEIGHT + 2 * IMG_TOP;
	var CAT_SPACING = 10;

	// Helper variables
	var doc = document;
	var cont = doc.getElementById(CONTAINER_ID);
	var status = doc.getElementById(STATUS_ID);

	/** Returns "<v>px" string with v rounded to nearest integer. */
	var px = function(v) {
		return '' + Math.round(v) + 'px';
	};

	/**
	 * Type of a compare function which takes two indexes and returns -1, 0
	 * or 1 depending on relative values of specified elements.
	 * @typedef {function(number, number): number}
	 */
	var Comparator;

	/**
	 * Type of a swap function which swaps elements at two given indexes.
	 * @typedef {function(number, number)}
	 */
	var Swapper;

	/**
	 * Type of user defined sorting algorithm.
	 * @typedef {function(number, Comparator, Swapper)}
	 */
	var Algoritm;

	/**
	 * Returns algorithm chosen by the user.
	 * @return {null|Algoritm} Algorithm chosen by the user via the drop
	 *     down or null if user chose nothing.  In the later case, the
	 *     SELECT element will get focused.
	 */
	var findAlgoritm = function() {
		var el = doc.getElementById(SELECT_ID);
		var func = el.selectedIndex >= 0 &&
		    el.options[el.selectedIndex][SORT_FUNCTION_SYMBOL];
		if (!func) {
			el.focus();
		}
		return func;
	};

	/**
	 * Updates the text content of the #status HTML element.
	 * @param {string} text Text to put in the status.
	 * @param {{cmp:number, swap:number}=} opt_cnt Counters specifying
	 *     number of comparisons and swaps performed.  If given, the status
	 *     line will include the counts.
	 */
	var setStatus = function(text, opt_cnt) {
		if (opt_cnt) {
			text = 'Liczba porównań: ' + opt_cnt['cmp'] +
				', zamian: ' + opt_cnt['swap'] +
				(text ? '. ' + text : '');
		}

		if (status.firstChild) {
			status.firstChild.nodeValue = text;
		} else {
			status.appendChild(doc.createTextNode(text));
		}
	};

	/**
	 * Returns Y position, in pixels, of a cat at given index tacking
	 * into consideration height of each cat as well as spacing.
	 * @param {number} idx Index of the cat.
	 * @param {number} Y coordinate in pixels of the top left of the cat
	 *     DIV element.
	 */
	var catYPosition = function(idx) {
		return idx * (CAT_HEIGHT + CAT_SPACING) + CAT_SPACING;
	};

	/**
	 * Constructs a cat DIV element and returns it.  Furthermore,
	 * VALUE_SYMBOL property on the DIV DOM object will be set to equal
	 * length.
	 * @param {number} length Length of the cat, i.e. number of body images
	 *     it will have.
	 * @param {number} idx Index of the cat which determines it’s
	 *     Y coordinate.
	 * @return {!HTMLDivElement} A DIV element for given cat with
	 *     VALUE_SYMBOL property set to length.
	 */
	var makeCat = function(length, idx) {
		var appendImg = function(src, x) {
			var img = doc.createElement('IMG');
			img.src = src;
			img.style.left = px(x * IMG_WIDTH + IMG_LEFT);
			img.style.top = px(IMG_TOP);
			img.style.width = px(IMG_WIDTH);
			img.style.height = px(IMG_HEIGHT);
			img.style.position = 'absolute';
			div.appendChild(img);
		};

		var div = doc.createElement('DIV');
		div.style.top = px(catYPosition(idx));
		div.style.height = px(CAT_HEIGHT);
		div[VALUE_SYMBOL] = length;

		appendImg(TAIL_URL, 0);
		for (var i = 1; i <= length; ++i) {
			appendImg(BODY_URL, i);
		}
		appendImg(HEAD_URL, i);
		return div;
	};

	/** Error indicating too many operations were executed. */
	var InfLoopError = function() {
		this.message = 'Algorytm wykonał zbyt dużo operacji. Wygląda ' +
			'to na nieskończoną pętlę.';
	};
	/** Error indicating index out of bounds was accessed. */
	var IndexError = function(idx) {
		this.message = 'Algorytm próbował operować na elemencie o ' +
			'indeksie ' + idx + ', który jest poza tablicą.';
	};

	/**
	 * Description of a single operation performed by the algorithm.  type
	 * is either 'cmp' for comparison or 'swap' for swap while i and j are
	 * indexes of elements being compared or swapped.
	 * @typedef {{type:string, i:number, j:number}}
	 */
	var Operation;

	/**
	 * Runs given algorithm on given array; returns list of operations.
	 * @param {!Array<!HTMLDivElement>} arr An array of cat DIV elements.
	 * @param {Algoritm} alg Algorithm to run on the array.
	 * @return {!Array<Operation>} A list of operations performed by the
	 *     algorithm.
	 */
	var run = function(arr, alg) {
		var ops = [];
		var addOperation = function(type, i, j) {
			ops.push({type: type, i: i, j: j});
			if (ops.length > 100000) {
				throw new InfLoopError;
			}
		};

		var get = function(i) {
			var ret = arr[i];
			if (!ret) {
				throw new IndexError(i);
			}
			return ret;
		};

		var cmp = function(i, j) {
			var a = get(i)[VALUE_SYMBOL];
			var b = get(j)[VALUE_SYMBOL];
			addOperation('cmp', i, j);
			return a >= b ? a > b ? 1 : 0 : -1;
		};

		var swap = function(i, j) {
			if (i > j) {
				var t = i;
				i = j;
				i = t;
			}
			var a = get(i);
			var b = get(j);
			addOperation('swap', i, j);
			arr[j] = a;
			arr[i] = b;
			// Useful for debugging
			arr[i].style.top = px(catYPosition(i));
			arr[j].style.top = px(catYPosition(j));
		};

		alg(arr.length, cmp, swap);
		return ops;
	};

	/**
	 * Sets disabled state of all INPUT and SELECT elements on the page.
	 * @param {boolean} disabled Whether to disable or enable the elements.
	 */
	var setDisabled = function(disabled) {
		['INPUT', 'SELECT'].forEach(function(tag) {
			var els = document.getElementsByTagName(tag);
			for (var i = 0, el; (el = els[i]); ++i) {
				el.disabled = disabled;
			}
		});
	};

	/**
	 * Renders a single step for given operation’s animation.
	 * @param {Operation|null} op Operation being animated or null which
	 *     pauses the animation for a while.
	 * @param {!Array<HTMLDivElement>} arr Array of cats being sorted.
	 * @param {number} t Time in seconds passed since animation of given
	 *     operation has started.
	 * @return {number} -1 if animation of the operation has not yet
	 *     finished, a number of seconds animation of the operation took in
	 *     total.
	 */
	var stepAnimation = function(op, arr, t) {
		if (!op) {
			// Initial delay.
			return t < 1 ? -1 : 1;
		}

		var a = arr[op.i];
		var b = arr[op.j];
		switch (op.type) {
		case 'cmp':
			if (t >= 0.5) {
				a.style.background = b.style.background = '';
				return 0.5;
			}
			// f(t) = t (½ - t) so we have roots at 0 and ½.  Also,
			// for the range [0, ½] the f(t) ≥ 0 which is what we
			// want.  It’s maximal value is: f(¼) = ¼(½-¼) = ⅛ so to
			// get the output in the [0, 1] range we need: g(t) =
			// 8f(t).
			t = 8 * t * (.5 - t);
			a.style.background = b.style.background =
				'rgba(128, 256, 200, ' + t + ')';
			break;

		case 'swap':
			var start = catYPosition(op.i);
			var end = catYPosition(op.j);

			if (t >= 1) {
				a.style.top = px(end);
				b.style.top = px(start);
				a.style.left = b.style.left = '0';
				arr[op.i] = b;
				arr[op.j] = a;
				return 1;
			}

			var x = 4 * t * (1 - t);
			a.style.left = px(x * CAT_SPACING);
			if (op.i == op.j) {
				break;
			}

			var y = (3 - 2 * t) * t * t;  // 3t² - 2t³
			y *= start - end;
			a.style.top = px(start - y);
			b.style.top = px(end + y);
			b.style.left = px(-x * CAT_SPACING);
		}

		return -1;
	};

	/**
	 * Kicks off the animation of the operations using requestAnimationFrame
	 * method.  The animation is asynchronous, i.e. it still goes one after
	 * this function finishes.  Once the animation is finished, done
	 * function is called.
	 * @param {!Array<Operation>} ops Array of operations to animate.
	 * @param {!Array<!HTMLDivElement>} arr Array of elements being sorted.
	 */
	var startAnimation = function(ops, arr) {
		var win = window;

		var start;
		var idx = -1;
		var cnt = {'swap': 0, 'cmp': 0};

		var req = win.requestAnimationFrame ||
		    win.webkitRequestAnimationFrame ||
		    win.mozRequestAnimationFrame ||
		    win.oRequestAnimationFrame ||
		    win.msRequestAnimationFrame;

		setStatus('', cnt);

		var callback = function(ts) {
			ts /= 1000;
			start = start || ts;
			while (true) {
				var op = idx < 0 ? null : ops[idx];
				var passed = stepAnimation(op, arr, ts - start);
				if (passed <= 0) {
					break;
				}
				start += passed;

				if (op) {
					++cnt[op.type];
					setStatus('', cnt);
				}

				if (++idx >= ops.length) {
					done(arr, cnt);
					return;
				}

			}
			req.call(win, callback);
		};

		req.call(win, callback);
	};

	/**
	 * Checks whether elements are sorted and updates status accordingly.
	 * Also, enables all form elements.
	 * @param {!Array<!HTMLDivElement>} arr Array of elements being sorted.
	 * @param {{cmp: number, swap: number}} cnt Object with count
	 *     statistics.
	 */
	var done = function(arr, cnt) {
		setDisabled(false);
		var i = 1;
		while (i < arr.length &&
		       arr[i - 1][VALUE_SYMBOL] <= arr[i][VALUE_SYMBOL]) {
			++i;
		}
		setStatus(i == arr.length ? 'Elementy posortowane' :
			 'Elementy NIE zostały poprawnie posortowane',
			 cnt);
	};

	doc.getElementById(FORM_ID).onsubmit = function() {
		// Clear out previous state
		while (cont.firstChild) {
			cont.removeChild(cont.firstChild);
		}

		// Parse number of elements
		var str = doc.getElementById(NUM_ELEMENTS_ID).value;
		var num = parseInt(str, 10);
		if (num != num || num < 2 || num > 20) {
			setStatus('Nieprawidłowa liczba elementów: ' + str);
			doc.getElementById(NUM_ELEMENTS_ID).focus();
			return false;
		}
		num = num | 0;

		// Get algorithm
		var alg = findAlgoritm();
		if (!alg) {
			setStatus('Należy wybrać algorytm.');
			return false;
		}

		// Prepare the array
		var arr = [];
		var maxLength = Math.min(20, Math.max(5, num));
		for (var i = 0; i < num; ++i) {
			var cat = makeCat((Math.random() * maxLength) | 0, i);
			arr.push(cat);
			cont.appendChild(cat);
		}

		// Run the demo
		try {
			setDisabled(true);
			var ops = run(arr.slice(0, arr.length), alg);
			// Reset position of cats
			arr.forEach(function(cat, i) {
				cat.style.top = px(catYPosition(i));
			});
			startAnimation(ops, arr);
		}
		catch (e) {
			setDisabled(false);
			if (e instanceof InfLoopError ||
			    e instanceof IndexError) {
				setStatus(e.message);
			} else {
				setStatus('' + e);
			}
		}
		return false;
	};

	/**
	 * Registers a new algorithm/demonstration function.
	 * @param {string} name Name of the algorithm used in OPTION element.
	 * @param {Algoritm} func Implementation of the algorithm.
	 */
	return function(name, func) {
		var opt = doc.createElement('OPTION');
		opt[SORT_FUNCTION_SYMBOL] = func;
		opt.value = name;
		opt.appendChild(doc.createTextNode(name));
		doc.getElementById(SELECT_ID).appendChild(opt);
	};
})();
