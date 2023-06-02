$(document).ready(function() {
    // const urlParams = new URLSearchParams(window.location.search);
    // const param_x = urlParams.get('lang');
    // if (param_x == "vi") {
    //     $('[lang="vi"]').show();
	// 	$('[lang="en"]').hide();
    // } else {
    //     $('[lang="vi"]').hide();
	// 	$('[lang="en"]').show();
    // }
    function getUrlParameter(name) {
        // name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        // var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        // results = regex.exec(location.search);
        // return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
        var url = window.location.search;
        var pos = url.indexOf(name);
        pos += name.length + 1;
        var ans = "";
        while (pos < url.length && url[pos] != '&') {
            ans += url[pos];
            pos++;
        }
        console.log(ans);
        return ans;
    }
    var qsp = 'lang',
        para = getUrlParameter(qsp);
    if (para == "vi") {
        $('[lang="vi"]').show();
		$('[lang="en"]').hide();
    } else {
        $('[lang="vi"]').hide();
		$('[lang="en"]').show();
    }
});