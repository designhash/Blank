//Nav Toggle
$(function () {
  $("#nav-toggle").on("click", function () {
    $(this).toggleClass("active");
  }); 
});

$(function () {
  $('.carousel').carousel({
    interval: 0
  }).on('slide.bs.carousel', function (e) {
    var nextH = $(e.relatedTarget).height();
    console.log(nextH)
    console.log( $(this).find('.active.item').parent() )
    $(this).find('.active.item').parent().animate({
        height: nextH
    }, 500);
  });
});