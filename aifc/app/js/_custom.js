document.addEventListener("DOMContentLoaded", function () {
	$(document).scroll(function () {
		let $nav = $(".fixed-top_black");
		$nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
	});
	$(document).scroll(function () {
		let $nav = $(".fixed-top_white");
		$nav.toggleClass('scrolled_white', $(this).scrollTop() > $nav.height());
	});

	$(".main-slider").slick({
		autoplay: false,
		fade: true,
		dots: true,
		arrows: true,
		nextArrow: '<button id="next" type="button" class="btn-juliet"><img src="img/icon arrow.svg" alt=""></button>',

	});
	$(document)
		.on('click.bs.dropdown.data-api', '.dropdown', function (e) { e.stopPropagation() })

	$(function () {
		$('.service-item-block').equalHeights();
	});
	$(function () {
		$('.service-item__title').equalHeights();
	});
	$(function () {
		$('.service-item__text').equalHeights();
	});
	$(".news-block").slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		autoplay: true,
		responsive: [
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 2,
					prevArrow: '<button class = "prev arrow"></button>',
					nextArrow: '<button class = "next arrow"></button>',
					slidesToScroll: 2
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					prevArrow: '<button class = "prev arrow"></button>',
					nextArrow: '<button class = "next arrow"></button>',
				}
			}
		]
	});

	$('.management-blocks__btn a').click(function () {
		console.log('Hello');
		var get_id = this.id;
		var get_current = $('.management-item .' + get_id);
		$('.management-item')
	});


	$(".team-block").slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		centerMode: true,
		autoplay: true,
		dots: false,
		arrows: false,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
					prevArrow: '<button class = "prev arrow"></button>',
					nextArrow: '<button class = "next arrow"></button>',
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 2,
					prevArrow: '<button class = "prev arrow"></button>',
					nextArrow: '<button class = "next arrow"></button>',
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					prevArrow: '<button class = "prev arrow"></button>',
					nextArrow: '<button class = "next arrow"></button>',
				}
			}
		]
	});
	var time = 2, cc = 1;
	$(window).scroll(function () {
		$('#counter').each(function () {
			var cPos = $(this).offset().top,
				topWindow = $(window).scrollTop();
			if (cPos < topWindow + 600) {
				if (cc < 2) {
					$('div').each(function () {
						var
							i = 1,
							num = $(this).data('num'),
							step = 1000 * time / num,
							that = $(this),
							int = setInterval(function () {
								if (i <= num) {
									that.html(i);
								}
								else {
									cc = cc + 2;
									clearInterval(int);
								}
								i++;
							}, step);
					});
				}

			}
		});
	});



	$('.dropdown-toggle').click(function () {
	
			let $nav = $(".fixed-top_black");
			$nav.addClass('scrolled');
		
	});


	$('#mobile-menu__btn').click(function () {
		$('.hamburger--collapse').toggleClass('is-active');
	});
	$('.lang-choose').niceSelect();
	$('.grid-layout').masonry({
		itemSelector: '.item',
		columnWidth: 10,
		gutter: 16

	});
	$(document).mouseup(function (e){ // событие клика по веб-документу
		let $nav = $(".fixed-top_black");
		$nav.removeClass('scrolled');
	});

});
