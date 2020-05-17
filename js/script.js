// для того что бы фул скрин работал в IE11
$(window).resize(function (event) {
   mainblock();
});

function mainblock() {
   var h = $(window).outerHeight();
   $('.mainblock').css('min-height', h);
   minHeight: h
}
mainblock();