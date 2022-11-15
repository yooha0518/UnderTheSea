$.noConflict();
jQuery(document).ready(function($){
    
    
    fish_swimming_animation();
    
    var past_fish_lift_location = 0;
    var past_fish_top_location = 0;

    function fish_swimming_animation(){
        var fish_left_location = Math.floor(Math.random()*1200);
        var fish_top_location = Math.floor(Math.random()*600);
        var fish_swimming_speed = Math.floor(Math.random()*6000+4000);
        

        if(past_fish_lift_location>fish_left_location){
            alert("hi");
        }

        $(".fish").animate({
            left:fish_left_location,
            top:fish_top_location},
            fish_swimming_speed,
            function(){
                past_fish_lift_location = fish_left_location;
                past_fish_top_location = fish_top_location;

                $("#fish_location").text(past_fish_lift_location)
                fish_swimming_animation(); 
            }
        );
    }
       
    
    
    
  });