$(function() {

	var width = 720;
	var animationSpeed = 3000;
	var pause = 1000;
	var currentslide = 1;

	var $slider = $('#slider');
	var $slideContainer = $slider.find('.slides');
	var $slides = $slideContainer.find('.slide')

	var interval;

	function startSlider(){
		interval = setInterval(function() {
		$slideContainer.animate({'margin-left': '-=' + width}, animationSpeed, function(){
			currentslide++;
			if(currentslide === $slides.length) {
				currentslide = 1;
				$slideContainer.css('margin-left', 0);
			}
				});
	}, pause);

	}

	function stopSlider() {
		clearInterval(interval);
	}


	

	$slider.on('mouseenter', stopSlider).on('mouseleave', startSlider);

	startSlider();
});