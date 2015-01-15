$("document").ready(function(){
	$('button').click(function(){
		var search = $('h3');
		var searchStatus = search.css('display');
		if (searchStatus == 'none') {
		search.animate({
		}, 400);
		setTimeout(function() {
			search.css( 'background','red');
		}, 100);
	} else if (searchStatus == 'block'){
		search.animate({
		}, 400);
	};
	});


	$('.divsearch').click(function(){
		var search = $('.search');
		var searchStatus = search.css('display');
		if (searchStatus == 'none') {
		search.animate({
			opacity:1,
			marginLeft: 0
		}, 400);
		setTimeout(function() {
			search.css( 'display','block');
		}, 100);
	} else if (searchStatus == 'block'){
		search.animate({
			opacity:0,
			marginLeft: -600
		}, 400);
		setTimeout(function() {
			search.css( 'display','none');
    	}, 401);
	};



	});

	$('.dropmenu').click(function(){
		var menu = $('.menu');
		//var
		if ($('body').css('margin-left') == '0px') {
			menu.animate({
				left: 0
			}, 400);
			$('body').animate({
				marginLeft: 300
			}, 400);
		} else if($('body').css('margin-left') == '300px'){
			menu.animate({
				left: -300
			}, 400);
			$('body').animate({
				marginLeft: 0
			}, 400);
		};

	});

});
