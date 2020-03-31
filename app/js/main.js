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
    
$('.product-one__tabs .tab, settings__tabs .tab').on('click', function(event) {
    var id = $(this).attr('data-id');
        $('.product-one__tabs, .settings__tabs').find('.tab-item').removeClass('active-tab').hide();
        $('.product-one__tabs .tabs, .settings__tabs').find('.tab').removeClass('active');
        $(this).addClass('active');
        $('#'+id).addClass('active-tab').fadeIn();
        return false;
    });   
    
    
    
});

 const mixer = mixitup('.content-blocks');

$('.weekly__inner').slick({
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: '<a href="#" class="weekly__title-chevron  weekly__title-right"><i class="fas fa-chevron-left"></i></a>', 
    nextArrow: '<a href="#" class="weekly__title-chevron  weekly__title-left"><i class="fas fa-chevron-right"></i></a>', 
});




