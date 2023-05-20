!(function () {
	var style =
		'<style>.text-popup { animation: textPopup 1s;color: red; user-select: none; white-space: nowrap; position: absolute;z-index: 99;} @keyframes textPopup {0%, 100% {opacity:0;}5% {opacity: 1;}100% {transform: translateY(-100px);}}</style>';
	var styleElem = document.createElement('div');
	styleElem.innerHTML = style;
	document.getElementsByTagName('head')[0].appendChild(styleElem.firstElementChild);

	var textArr = [
		'富强',
		'民主',
		'文明',
		'和谐',
		'自由',
		'平等',
		'公正',
		'法治',
		'爱国',
		'敬业',
		'诚信',
		'友善',
	];
	document.documentElement.addEventListener('click', function (event) {
		var x = event.pageX;
		var y = event.pageY;
		var eleText = document.createElement('span');
		eleText.className = 'text-popup';
		eleText.innerHTML = textArr[Math.floor(Math.random() * textArr.length)];
		this.appendChild(eleText);
		// 动画结束后删除自己
		eleText.addEventListener('animationend', function () {
			eleText.parentNode.removeChild(eleText);
		});
		// 位置
		eleText.style.left = x - eleText.clientWidth / 2 + 'px';
		eleText.style.top = y - eleText.clientHeight + 'px';
	});
})();
