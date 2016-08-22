var $container 	= $( '#flip' ),
				$pages		= $container.children().hide();
			Modernizr.load({
				test: Modernizr.csstransforms3d && Modernizr.csstransitions,
				yep : ['js/jquery.tmpl.min.js','js/jquery.history.js','js/core.string.js','js/jquery.touchSwipe-1.2.5.js','js/jquery.flips.js'],
				nope: 'css/fallback.css',
				callback : function( url, result, key ) {
					if( url === 'css/fallback.css' ) {
						$pages.show();
					}
					else if( url === 'js/jquery.flips.js' ) {
						$container.flips();
					}
				}
			});