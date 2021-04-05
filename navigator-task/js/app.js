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
	slidesPerView: 3,
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

let swiper = new Swiper('.excellence__slider', {
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

let newsSwiper = new Swiper('.news__slider', {
slidesPerView: 3,
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


