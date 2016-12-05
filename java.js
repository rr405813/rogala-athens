//ROGALA FINAL--JS DOC

//image header caption animation
$(document).ready(function() {
    $('.image-frame').hover(function(){
		$('.image-caption').slideToggle('slow');
	}, function(){
		$('.image-caption').slideToggle('slow');
    });
});

//holiday hours reveal button
$(document).ready(function(){
    $(".holiday").hide();
    $("button").click(function(){
        $(".holiday").show();
    });
});

//dog of the week
$(document).ready(function(){
    $('.growimage').mouseover(function(){
      $(this).stop().animate({"width": "30%","left":"0px","top":"0px"}, 200,'swing');
    }).mouseout(function(){ 
      $(this).stop().animate({"width": "20%","left":"0px","top":"0x"}, 100,'swing');
    });;

});


//hover over doggies
$(document).ready( function() {

	$('.gallery-item').hover( function() {
		$(this).find('.img-title').fadeIn(300);
		$('.gallery-item p').hide();
	}, function() {
		$(this).find('.img-title').fadeOut(300);
		$('.gallery-item p').hide();
	});
	
});

//click on doggies for bio
$(document).ready(function(){
		$('.gallery-item').click(function(){
			$('.gallery-item h5').hide();
			$('.gallery-item p').show();
	});
});

//scroll down to doggie bios
$(document).ready(function(){
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    } 
  });
});

//scroll back up to top
$(document).ready(function(){
  $("a").on('click', function(event) {
    if (this.el !== "") {
      var el = this.el;
      $('html, body').animate({
        scrollTop: $(el).offset().top
      }, 800, function(){
        window.location.el = el;
      });
    } 
  });
});

