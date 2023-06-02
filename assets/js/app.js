
$(document).ready(function () {
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = process;
	xhr.open("GET", "https://www.xhhome.vn/", true);
	xhr.send();

	function process()
	{
		if (xhr.readyState == 4) {
			var resp = JSON.parse(xhr.responseText);
			resp.getElementsByClassName("xl565be x1m39q7l x1uw6ca5 x2pgyrj");
			console.log(resp);

			// resp now has the text and you can process it.
			// alert(resp);
		}
	}

	"use strict";

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

	// Hàm active tab nào đó
	function activeTab(obj) {
		// Xóa class active tất cả các tab
		$('.tab-wrapper ul li').removeClass('active');

		// Thêm class active vòa tab đang click
		$(obj).addClass('active');

		// Lấy href của tab để show content tương ứng
		var id = $(obj).find('a').attr('href');

		// Ẩn hết nội dung các tab đang hiển thị
		$('.tab-item').hide();

		// Hiển thị nội dung của tab hiện tại
		$(id).show();
	}

	// Sự kiện click đổi tab
	$('.tab li').click(function () {
		activeTab(this);
		return false;
	});

	// Active tab đầu tiên khi trang web được chạy
	activeTab($('.tab li:first-child'));
	
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
