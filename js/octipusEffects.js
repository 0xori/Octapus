			//var divs =  $('.social, .title');
			function onLoad()
			{
				parallaxScroll();
				overlay('video_overlay');
			}


			$(window).scroll(function(){
				var top = ($(window).scrollTop()%840 > 0) ? $(window).scrollTop()%840+0.5 : 0.7;
			    $('.fade').stop(true, true).fadeTo(0, 30 / top);             
			});

			$(window).bind('scroll',function(e){
   				 parallaxScroll();
			});


			function parallaxScroll(){
				var scrolled = $(window).scrollTop();
				$('#bg-parallax2').css('top',(0-(scrolled*.25))+'px');
				$('#bg-parallax1').css('top',(0-(scrolled*.5))+'px');
				$('#bg-parallax3').css('top',(0-(scrolled*1.75))+'px');
				$('#bg-parallax4').css('top',(0-(scrolled*.5))+'px');
				$('#content').css('top',(0-(scrolled*.75))+'px');
			} 
		  	$(function() {
      		  $("div#controller").jFlow({
			        slides: "#slides",
			        width: "670px",
			        height: "480px"
			    });
			});

			function overlay(elem) {
				el = document.getElementById(elem);
				el.parentNode.style.visibility = (el.parentNode.style.visibility == "visible") ? "hidden" : "visible";
				var myVideo=document.getElementById("intro_video"); 

				if (el.parentNode.style.visibility == "visible")
				{
					document.body.style.overflow = "hidden";
					if(elem == "video_overlay")
					{
						myVideo.play();	
					}

				}
				else
				{
					document.body.style.overflow = "auto";
					if(elem == "video_overlay")
					{
						myVideo.pause();	
					}
				}
			}
