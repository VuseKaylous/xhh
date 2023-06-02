
$(document).ready(function () {
	"use strict";

	console.log(window.location.pathname);
	var path = window.location.pathname;
	const arr = path.split("/");
	// console.log(arr);
	// console.log(arr[arr.length - 1]);
	arr[arr.length - 1] = arr[arr.length - 1].replace(/\.html/g, "");
	// console.log(arr[arr.length - 1]);
	path = arr[arr.length - 1];

		

	$('nav .dropdown').hover(function(){
		var $this = $(this);
		$this.addClass('show');
		$this.find('> a').attr('aria-expanded', true);
		$this.find('.dropdown-menu').addClass('show');
	}, function(){
		var $this = $(this);
			$this.removeClass('show');
			$this.find('> a').attr('aria-expanded', false);
			$this.find('.dropdown-menu').removeClass('show');
	});
	
	$('#switch-lang').css({'pointer-events':'none',
	 'cursor':'default'}).attr('disabled','disabled');
	
	$('[lang="vi"]').hide();

	$('#switch-lang-en').click(function (event) {
		$('[lang="vi"]').hide();
		$('[lang="en"]').show();
		$('[name="_next"]').val("https://xhhome.vn/thankyou?lang=en");
		});

	$('#switch-lang-vi').click(function (event) {
		$('[lang="vi"]').show();
		$('[lang="en"]').hide();
		$('[name="_next"]').val("https://xhhome.vn/thankyou?lang=vi");
		});

});
