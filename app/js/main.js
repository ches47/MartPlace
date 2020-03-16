$(function() {
 
  $(".rate-star").rateYo({
    rating: 5,
    starWidth: "15px"
  }); 

 $(".js-range-slider").ionRangeSlider({
        type: "double",
        min: 0,
        max: 350,
        from: 30,
        to: 300,
        prefix: "$"
});
    
$('.icon-list2').on('click', function() {
    $('.product__block').addClass('list');
    $('.icon-list2').addClass('active');
    $('i.fas.fa-th-large').removeClass('active');
});
    
$('i.fas.fa-th-large').on('click', function() {
    $('.product__block').removeClass('list');
    $('i.fas.fa-th-large').addClass('active');
    $('.icon-list2').removeClass('active');
});
    
    
    
});