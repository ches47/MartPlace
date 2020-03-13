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
    
    
});