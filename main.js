$.noConflict();
jQuery(document).ready(function($){

    // 10마리의 물고기 애니메이션 무한루프 
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
    // //10마리의 물고기 애니메이션 무한루프 

    // -----물고기 애니메이션 함수-----
    var past_fish_left_location = 0;
    function fish_swimming_animation(fishname,difference){
        var fish_left_location= Math.floor(Math.random()*1600)+difference;
        var fish_top_location = Math.floor(Math.random()*700-100)+difference;
        var fish_swimming_speed = Math.floor(Math.random()*5000+2000)+difference;
       
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
    // -----//물고기 애니메이션 함수-----

    var fixing_btn_cheak = 0;
    var first_card_number;
    var second_card_number;
    var tirth_card_number;
    // ----- 카드 뒤집기 -----
    $(".card").click(function(){
        
        $(this).css("transform","rotateY(180deg)");
        
        if($(this).children("#first_tropical_card").hasClass("first_card"))
        {
            $(this).children("#first_tropical_card").data("card_filp_cheak",1);
            first_card_cheak = $(this).children("#first_tropical_card").data("card_filp_cheak");
            //alert("    first card cheak : "+first_card_cheak);
        }
        else if($(this).children("#second_tropical_card").hasClass("second_card")){
            $(this).children("#second_tropical_card").data("card_filp_cheak",1);
            second_card_cheak = $(this).children("#second_tropical_card").data("card_filp_cheak");
            //alert("    second card cheak : "+second_card_cheak);
        }
        else if($(this).children("#third_tropical_card").hasClass("third_card")){
            $(this).children("#third_tropical_card").data("card_filp_cheak",1);
            third_card_cheak = $(this).children("#third_tropical_card").data("card_filp_cheak");
        }
        else{
            alert("error");
        }


        tropicalcard_random_number = Math.floor(Math.random()*3+1);

        if(fixing_btn_cheak == 1){ // 조작버튼을 눌렀을때 모두 같은 카드로 나오게 한다.
            tropicalcard_random_number = 3;
        };

        $(this).children(".card_back").css({
        "background-image":"url(img/tropicalcard" + tropicalcard_random_number + ".jpg)"
        });

        

        if($(this).children("#first_tropical_card").hasClass("first_card"))
        {
            $(this).children("#first_tropical_card").data("card_number",tropicalcard_random_number);
            first_card_number = $(this).children("#first_tropical_card").data("card_number");
        }
        else if($(this).children("#second_tropical_card").hasClass("second_card")){
            $(this).children("#second_tropical_card").data("card_number",tropicalcard_random_number);
            second_card_number = $(this).children("#second_tropical_card").data("card_number");
        }
        else if($(this).children("#third_tropical_card").hasClass("third_card")){
            $(this).children("#third_tropical_card").data("card_number",tropicalcard_random_number);
            third_card_number = $(this).children("#third_tropical_card").data("card_number");
        }
        else{
            alert("error");
        }
        
        
        
        
        if((first_card_number == second_card_number)&&(second_card_number == third_card_number) ){
            if(first_card_cheak==1 && second_card_cheak == 1 && third_card_cheak == 1)
            {

                $('.congratulation').animate({
                    fontSize:'150px',
                    opacity:100
                    },
                    1500,
                    'easeInOutElastic',
                    setTimeout(function(){
                        $('.congratulation').animate({
                            fontSize:'0px',
                            opacity:0
                            },
                            1500,
                            'easeInOutElastic',
                            function(){
                                $("#card_control_reset_btn").click();
                            }
                        );
                    },4000)
                );

                
                


/* 
                $(".congratulation").fadeIn(2000,'easeInOutElastic');
                $(".congratulation").delay(2000);
                $(".congratulation").fadeOut(2000,"easeInOutElastic");
                setTimeout(function(){
                    $("#card_control_reset_btn").click();
                },5000) */
                
            }
        }
        else{
            if(first_card_cheak==1 && second_card_cheak == 1 && tirth_card_cheak == 1)
            {
                setTimeout(function(){
                    $("#card_control_reset_btn").click();
                },2000)
                
            }
        }
        


        

          
    
    });

    $("#card_control_reset_btn").click(function(){ //카드 리셋하기
        $(".card").css({
            "transform":"none"
        });
        fixing_btn_cheak = 0;
        first_card_cheak=0;
        second_card_cheak=0;
        tirth_card_cheak=0;
    });
    $("#card_control_fixing_btn").click(function(){ //카드 조작하기
        fixing_btn_cheak = 1;
    });



   // ----- //카드 뒤집기 -----


    



   
    
    
});