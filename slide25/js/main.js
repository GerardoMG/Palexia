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
	 * GRAPHS
	***************************************************************************/

	Array.prototype.AllValuesSame = function(){
	    if(this.length > 0) {
	        for(var i = 1; i < this.length; i++)
	        {
	            if(this[i] !== this[0])
	                return false;
	        }
	    } 
	    return true;
	}
	
	var graphAnim = (function(){
		
		function init(){

			var flag = [false,false,false,false];

			var checkMenu = function(flagArray){
				if(flagArray.AllValuesSame()){
					return flagArray[0];
				}
				return null;
			};

			var checkTodos = function(flagArray){
				if( checkMenu(flagArray) != null ){
					if(checkMenu(flagArray)){						
						$('#todos-sw').prop('checked', true);						
					}
				}
				else{
					$('#todos-sw').prop('checked', false);						
				}
			}
			
			/**************** TRIGEREO ********************/
		
			$('.onoffswitch-checkbox').change(function(){
				
				if( $(this).is(':checked') ){

					console.log($(this).parent().parent().attr('class'));

					var	$element = $(this).parent(),
						$elementClass = $(this).parent().parent().attr('class'),
						$thisOff = $(this).parent().find('.off');
	
				    switch( $elementClass ){
				   		case 'losartan':
				   			flag[0] = true;
				   			checkTodos(flag);					
				   			TweenMax.to($('#one'),0.5,{ css:{'opacity':1} });
				   			break;
				   		
				   		case 'irbesartan':
				   			flag[1] = true;
							checkTodos(flag);	
				   			TweenMax.to($('#two'),0.5,{ css:{'opacity':1} });
				   			break;
				   		
				   		case 'valsartan':
				   			flag[2] = true;		
				   			checkTodos(flag);	
				   			TweenMax.to($('#three'),0.5,{ css:{'opacity':1} });
				   			break;
				   		
				   		case 'atacand':   	
				   			flag[3] = true;	   		
				   			checkTodos(flag);	
				   			TweenMax.to($('#four'),0.5,{ css:{'opacity':1} });
				   			break;	 
			
				   		case 'todos':
				   			flag = [true,true,true,true];
				   			
				   			$('.onoffswitch-checkbox').prop('checked', true);
				   			
				   			TweenMax.to($('#one'),0.5,{ css:{'opacity':1} });
				   			TweenMax.to($('#two'),0.5,{ css:{'opacity':1} });
				   			TweenMax.to($('#three'),0.5,{ css:{'opacity':1} });
				   			TweenMax.to($('#four'),0.5,{ css:{'opacity':1} });
				   			break;	  	   		  			   			   		
				    }
				}
				else{

					var	$element = $(this).parent(),
							$elementClass = $(this).parent().parent().attr('class'),
							$thisOn = $(this).parent().find('.on');
						
					TweenMax.to($(this),0.5,{ x: '-150px', opacity: 0});		
					TweenMax.to($thisOn, 0.5, { x: '0px', opacity: 1});
					
				    switch( $elementClass ){
				   		case 'losartan':
				   			flag[0] = false;	
				   			checkTodos(flag);	
				   			TweenMax.to($('#one'),0.5,{ css:{'opacity':0} });
				   			break;
				   		
				   		case 'irbesartan':
				   			flag[1] = false;	
				   			checkTodos(flag);	
				   			TweenMax.to($('#two'),0.5,{ css:{'opacity':0} });
				   			break;
				   		
				   		case 'valsartan':
				   			flag[2] = false;	
				   			checkTodos(flag);	
				   			TweenMax.to($('#three'),0.5,{ css:{'opacity':0} });
				   			break;
				   		
				   		case 'atacand':
				   			flag[3] = false;	   		
				   			checkTodos(flag);	
				   			TweenMax.to($('#four'),0.5,{ css:{'opacity':0} });
				   			break;	 
			
				   		case 'todos':		
				   			flag = [false,false,false,false];
				   		  
							$('.onoffswitch-checkbox').prop('checked', false);
				   		 		
				   			TweenMax.to($('#one'),0.5,{ css:{'opacity':0} });
				   			TweenMax.to($('#two'),0.5,{ css:{'opacity':0} });
				   			TweenMax.to($('#three'),0.5,{ css:{'opacity':0} });
				   			TweenMax.to($('#four'),0.5,{ css:{'opacity':0} });
				   			break;	  	   		  			   			   		
				    }
				}
			});	
		}
		init();
		
	})();	
});


