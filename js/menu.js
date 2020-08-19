$(document).on("click", function(e) {
 if (e.target.id == 'menu__toggle'  && $('#menu__btn').hasClass('menu__btn')) {
    $("#menu_box").toggle();
    $("#menu__toggle").prop('checked',true);
    $("#menu__btn").removeClass('menu__btn').addClass('menu__btn2');
  }
else if ((e.target.id == 'menu__toggle') && ($('#menu__btn').hasClass('menu__btn2')) || 
(e.target.id != 'menu__toggle' && e.target.id != 'menu_box' && e.target.id != 'menu__btn'))
 {
    $("#menu_box").hide();
    $("#menu__toggle").prop('checked',false);
    $("#menu__btn").removeClass('menu__btn2').addClass('menu__btn');
  }
})
