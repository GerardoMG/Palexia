$( document ).ready(function() {
	
	/***************************************************************************
	 * MODAL
	***************************************************************************/
	
	var ModalEffects = (function() {	
		function init() {
			
			var overlay = document.querySelector('.md-overlay');
	
			[].slice.call(document.querySelectorAll('.md-trigger')).forEach(function(el, i) {
	
				var modal = document.querySelector('#' + el.getAttribute('data-modal')), close = modal.querySelector('.md-close');
				
				function removeModal(hasPerspective) {
					classie.remove(modal, 'md-show');
	
					if (hasPerspective) {
						classie.remove(document.documentElement, 'md-perspective');
					}
				}	
				function removeModalHandler() {
					removeModal(classie.has(el, 'md-setperspective'));
				}
				el.addEventListener('click', function(ev) {
					classie.add(modal, 'md-show');
					overlay.removeEventListener('click', removeModalHandler);
					overlay.addEventListener('click', removeModalHandler);
	
					if (classie.has(el, 'md-setperspective')) {
						setTimeout(function() {
							classie.add(document.documentElement, 'md-perspective');
						}, 25);
					}
				});
				close.addEventListener('click', function(ev) {
					ev.stopPropagation();
					removeModalHandler();
				});	
			});	
		}	
		init();	
	})(); 

	/***************************************************************************
	 * VIDEO
	***************************************************************************/
	_V_("intro",{ "controls": false, "autoplay": true, "preload": "auto" }).ready(function(){});
	
	
	/***************************************************************************
	 * SWIPE NAV
	***************************************************************************/	
	
	var swipeNav = function(){
		$(".logo").swipe({
			swipe : function(event, direction, distance, duration, fingerCount) {
				// RETROCEDE
				if( direction ==="right" ){
					//window.location.href = "";
				}
				// AVANZA
				else if(direction ==="left"){
					window.location.href = "slides/slide-01/index.html";
				}			
			},
		}); 
	};	
	
	swipeNav();
	
	
});


