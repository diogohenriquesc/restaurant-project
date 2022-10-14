const menu = document.querySelector('#menu-bar');
const navBar = document.querySelector('.navbar');
const scrollBtn = document.querySelector('#scroll-top');
const loadContainer = document.querySelector('.loader-container');

menu.addEventListener('click', () => {
	menu.classList.toggle('fa-times');
	navBar.classList.toggle('active');
});

window.addEventListener('scroll', () => {
	menu.classList.remove('fa-times');
	navBar.classList.remove('active');

	showBtn();
});

window.addEventListener('load', () => {
	showBtn();
	setTimeout(loader, 2000);
});

function loader() {
	loadContainer.classList.add('fade-out');
}

function showBtn() {
	if (scrollY > 150) {
		scrollBtn.classList.add('active');
	} else {
		scrollBtn.classList.remove('active');
	}
}


