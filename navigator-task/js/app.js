//Tabs
let tabs = document.querySelectorAll("._tabs");
for (let i = 0; i < tabs.length; i++) {
	let tab = tabs[i];
	let tabsItems = tab.querySelectorAll("._tab");
	let tabsBlocks = tab.querySelectorAll(".swiper-wrapper, .block");
	for (let i = 0; i < tabsItems.length; i++) {
		let tabsItem = tabsItems[i];
		tabsItem.addEventListener("click", function (e) {
			for (let i = 0; i < tabsItems.length; i++) {
				let tabsItem = tabsItems[i];
				tabsItem.classList.remove('_active');
				tabsBlocks[i].classList.remove('_active');
			}
			tabsItem.classList.add('_active');
			tabsBlocks[i].classList.add('_active');
			e.preventDefault();
		});
	}
}

//Sliders
let cottageSwiper = new Swiper('.cottage__slider', {
	slidesPerView: 4,
	spaceBetween: 15,
	pagination: {
	  el: '.swiper-pagination',
	  clickable: true,
	},
	navigation: {
	  nextEl: '.swiper-button-next',
	  prevEl: '.swiper-button-prev',
	},
	breakpoints: {
		760: {
			slidesPerView: 0.5,
		},
		992: {
			slidesPerView: 2,
		}
	},
  });

let excellenceSwiper = new Swiper('.excellence__slider', {
slidesPerView: 4,
spaceBetween: 15,
breakpoints: {
	320: {
		slidesPerView: 1,
	},
	480: {
		slidesPerView: 1,
	},
	992: {
		slidesPerView: 2,
	}
},
});

let aboutSwiper = new Swiper('.about__slider', {
	slidesPerView: 1,
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
});

let plotsSwiper = new Swiper('.plots__slider', {
	spaceBetween: 100,
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});

let newsSwiper = new Swiper('.news__slider', {
slidesPerView: 4,
spaceBetween: 15,
pagination: {
	el: '.swiper-pagination',
	clickable: true,
},
navigation: {
	nextEl: '.swiper-button-next',
	prevEl: '.swiper-button-prev',
},
breakpoints: {
	750: {
		slidesPerView: 1,
	},
	992: {
		slidesPerView: 2,
	}
},
});

// Modal
let headerBtn = document.querySelector('.header__btn');
let popupCall = document.querySelector('.popup-call');
let popupClose= document.querySelector('.popup-call__close');
const bodyLock = document.querySelector('body');

headerBtn.addEventListener('click', function() {
	popupCall.classList.toggle('_active');
	bodyLock.classList.toggle('_lock');
});
popupClose.addEventListener('click', function() {
	popupCall.classList.toggle('_active');
	bodyLock.classList.toggle('_lock');
});

// Burger-menu
let headerMenu = document.querySelector('.header__burger');
let headerBurger = document.querySelector('.header__burger-menu');
let headerNav = document.querySelector('.header__nav');
let headerItem = document.querySelector('.header__nav-item');

headerMenu.addEventListener('click', function() {
	headerBurger.classList.toggle('_active');
	bodyLock.classList.toggle('_lock');
});
headerMenu.addEventListener('click', function() {
	headerNav.classList.toggle('_active');
});
headerItem.addEventListener('click', function() {
	headerBurger.classList.remove('_active');
	headerNav.classList.remove('_active');
	bodyLock.classList.remove('_lock');
});

