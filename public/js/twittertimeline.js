	///widget de twitter
						    ! function(d, s, id) {
						        var js, fjs = d.getElementsByTagName(s)[0],
						            p = /^http:/.test(d.location) ? 'http' : 'https';
						        if (!d.getElementById(id)) {
						            js = d.createElement(s);
						            js.id = id;
						            js.src = p + "://platform.twitter.com/widgets.js";
						            fjs.parentNode.insertBefore(js, fjs);
						        }
						    }(document, "script", "twitter-wjs");
						    
						    
						    //instalar: sudo npm install socket.io@1.0
							
					        var socket = io.connect('http://proyecto-pintxopote-artzai.c9.io/');
					        socket.on('stream', function(tweet, user, avatar, media){
					        	$('#tweetd').append('<div class="image"></div><div><img src="'+avatar+'" width="48" height="48"><a href="http://twitter.com/'+user+'" target="_blank">@'+user+'</a> '+tweet+'</div>');
					        	$('#tweetd').css({ 'color': '#292f33', 'font-family': 'Arial,"Helvetica Neue",sans-serif' });
					        	$('.tweets').css({ 'color' : '#55ACEE' })
					
					        });