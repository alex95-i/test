$(document).ready(function(){

var slider =  $(".owl-carousel");
slider.owlCarousel({    
   items:2,

  })
$('#customNextBtn').click(function() {
    slider.trigger('next.owl.carousel');
    $('#customNextBtn').css({'background-color':'#ff6e47'});
    $('#customPrevBtn').css({'background-color':'#ffffff'});
    $('#next_img').attr('src', '../img/images/next_w.png')
    $('#prev_img').attr('src', '../img/images/prev_b.png')
})

$('#customPrevBtn').click(function() {

    slider.trigger('prev.owl.carousel');
    $('#customNextBtn').css({'background-color':'#ffffff'});
    $('#customPrevBtn').css({'background-color':'#ff6e47'});
	$('#next_img').attr('src', '../img/images/next_b.png')
	$('#prev_img').attr('src', '../img/images/prev_w.png')

})

slider.on('changed.owl.carousel', function(event){


	var count = event.item.index;

if (count == 0 ) {
        
        $("#first").css({'background-color':'#ff6e47'});
		$("#second").css({'background-color':'#e0e0e0'});	
		$("#third").css({'background-color':'#e0e0e0'});
	}


else	if (count == 1 ) {
        
        $("#first").css({'background-color':'#e0e0e0'});
		$("#second").css({'background-color':'#ff6e47'});	
		$("#third").css({'background-color':'#e0e0e0'});
	}

else if (count == 2 ) {


        $("#first").css({'background-color':'#e0e0e0'});
        $("#second").css({'background-color':'#e0e0e0'});
		$("#third").css({'background-color':'#ff6e47'});
	}
})
})
