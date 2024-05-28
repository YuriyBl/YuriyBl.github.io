window.marks = [];

function back() {
	window.marks.pop();
	update();
}

function reset() {
	window.marks = [];
	update();
}

document.querySelectorAll('.btn').forEach(function (elem) {
	elem.addEventListener('click', function () {
		mark = parseInt(elem.innerHTML);
		window.marks.push(mark);
		console.log(window.marks);
		update();
	});
});

function update() {
	summ = 0;
	for (var i = 0; i < window.marks.length; i++) {
		summ += window.marks[i];
	}
	avrg = summ / window.marks.length;
	avrg = avrg.toFixed(1);

	if (avrg == NaN || avrg == 'NaN') {
		avrg = '0';
	}
	document.querySelector('.avrg').innerHTML = avrg;

	document.querySelector('.lastMarks').innerHTML = '';
	for (var i = window.marks.length - 1; i >= window.marks.length - 6; i--) {
		if (window.marks[i]) {
			mark = document.createElement('div');
			mark.innerHTML = window.marks[i];
			mark.classList.add('mark');
			document.querySelector('.lastMarks').appendChild( mark );
		}
	}
}