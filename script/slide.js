(function($) {

	var methods = {
		init: function() {
			var options = $.extend({
				showTime: 4000,
				slideAnimate: 2000,
				slideAnimTime: 1500,
				desSlideTime: 500
			}, options);

			var el = this,
			resize = 100,
			lengthSlides = $(el).find('.slider-item').length,
			widthSlides = lengthSlides * resize + '%',
			currentSlide = 1;

			var nextSlide = function() {
				if ( currentSlide == lengthSlides )
					currentSlide = 0;
				$(el).find('.sliderItemWrapper').animate({
					'left': -currentSlide * resize + '%'
				}, options.slideAnimate);
				currentSlide++;
				slideAnim();
			};

			var prevSlide = function() {
				currentSlide--;
				if ( currentSlide == 0 )
					currentSlide = lengthSlides;
				$(el).find('.sliderItemWrapper').animate({
					'left': -(currentSlide -1) * resize + '%'
				}, options.slideAnimate);
				slideAnim();
			};

			$(el).find('.sliderItemWrapper').width(widthSlides);
			var inter = setInterval(nextSlide, options.showTime);
			$(el).hover(function() {
				clearInterval(inter);
			}, function() {
				inter = setInterval(nextSlide, options.showTime);
			});
			$(el).find('.slider_left').click(prevSlide);
			$(el).find('.slider_right').click(nextSlide);
			$(el).find('.slider-item:nth-child(2) .slider-img').addClass('small-img');

			var slideAnim = function() {
				$(el).find('.slider-img').removeClass('active-img slider-img-left', options.slideAnimTime, "easeOutSine");
				$(el).find('.des-slide').removeClass('des-slide-show', options.desSlideTime, "easeOutSine");
				$(el).find('.des-slide').addClass('des-slide-hide', options.desSlideTime, "easeOutSine");
				$(el).find('.slider-img').addClass('small-img', options.slideAnimTime, "easeOutSine");
				$(el).find('.slider-item:nth-child('+currentSlide+') .slider-img').addClass('active-img slider-img-left', options.slideAnimTime, "easeOutSine");
				$(el).find('.slider-item:nth-child('+currentSlide+') .des-slide').addClass('des-slide-show', options.slideAnimTime, "easeOutSine");
			};
		}
	};

	$.fn.slide = function(method) {
		return this.each(function() {
			if ( methods[method] ) {
				return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
			} else if ( typeof method === 'object' || ! method ) {
				return methods.init.apply( this, arguments );
			} else {
				$.error( 'Method ' +  method + ' does not exist on jQuery.slide' );
			}    
		});
	};
})(jQuery);