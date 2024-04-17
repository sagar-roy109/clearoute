jQuery(document).ready(function($) {
	"use strict";

	// Your jQuery code here
	$('.tabs').tabslet();

	// enable mobile menu
	$('header nav').meanmenu({
		meanMenuContainer: '.mobile-menu',
		meanScreenWidth: "991",
	});


});

// enable wow js
new WOW().init();
