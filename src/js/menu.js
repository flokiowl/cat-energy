'use strict';

var navMenu = document.querySelector(".page-header__nav");
var navToggle = document.querySelector(".page-header__toggle");

navMenu.classList.remove("page-header__nav--nojs");

navToggle.addEventListener('click', function() {
	if (navMenu.classList.contains("page-header__nav--closed")) {
		navMenu.classList.remove("page-header__nav--closed");
		navMenu.classList.add("page-header__nav--opened");
	} else {
		navMenu.classList.remove("page-header__nav--opened");
		navMenu.classList.add("page-header__nav--closed");
	}
});


-34.397   150.644