document.addEventListener('DOMContentLoaded', function () {
	let darkmodeState = false;
	let toolTip = document.getElementById('tltip');

	document.getElementById('darkmode-toggle').addEventListener('click', function () {
		//console.log('dark mode activated');
		darkmodeState === false ? (this.style.backgroundColor = '#333') : (this.style.backgroundColor = '#fff');

		if (darkmodeState === false) {
			this.style.backgroundColor = '#ffedd7';
			toolTip.style.backgroundColor = '#ffedd7';
			toolTip.style.color = '#000';
			OverlayScrollbars(document.querySelectorAll('body'), {
				className: 'os-theme-round-light',
			});

			darkmodeState = true;
		} else {
			this.style.backgroundColor = '#333';
			toolTip.style.backgroundColor = '#333';
			toolTip.style.color = '#f8f8f8';
			OverlayScrollbars(document.querySelectorAll('body'), {
				className: 'os-theme-round-dark',
			});

			darkmodeState = false;
		}

		document.querySelectorAll('.dark-mode').forEach(e => {
			e.classList.toggle('darken');
		});
	});
});
