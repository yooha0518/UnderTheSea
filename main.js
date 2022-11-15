$.noConflict();
jQuery(document).ready(function($){
    
    
    fish_swimming_animation("#first_fish",Math.floor(Math.random()*100));
    fish_swimming_animation("#second_fish",Math.floor(Math.random()*200));
    fish_swimming_animation("#third_fish",Math.floor(Math.random()*300));
    fish_swimming_animation("#fourth_fish",Math.floor(Math.random()*-100));
    fish_swimming_animation("#fifth_fish",Math.floor(Math.random()*-200));
    fish_swimming_animation("#sixth_fish",Math.floor(Math.random()*-300));
    fish_swimming_animation("#seventh_fish",Math.floor(Math.random()*250));
    fish_swimming_animation("#eighth_fish",Math.floor(Math.random()*150));
    fish_swimming_animation("#ninth_fish",Math.floor(Math.random()*150));
    fish_swimming_animation("#tenth_fish",Math.floor(Math.random()*150));
    

    
    var past_fish_left_location = 0;

    function fish_swimming_animation(fishname,difference){
        
        var fish_left_location= Math.floor(Math.random()*1500)+difference;
        var fish_top_location = Math.floor(Math.random()*300+200)+difference;
        var fish_swimming_speed = Math.floor(Math.random()*2000+5000)+difference;
       
        
        if(past_fish_left_location > fish_left_location){
            $(fishname).css("transform","rotateY(180deg)");
        }
        else{
            $(fishname).css("transform","none");
        }

        $(fishname).animate({
            left:fish_left_location,
            top:fish_top_location},
            fish_swimming_speed,
            function(){
                past_fish_left_location = fish_left_location;
                fish_swimming_animation(fishname,difference); // 무한루프
            }
        );
    };
       
    
    
    
});