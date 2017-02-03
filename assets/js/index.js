
        
        
 /***************************nav effect**************** ***************************/
        $(document).on('scroll',function(){
            if($(this).scrollTop()>1){
                $('header').addClass('sticky');
            }else{
                $('header').removeClass('sticky');
            
               }
        });
   
      
        /*******************************************page1 slider effect ***************************/ 
        $(document).ready(function(){
        
         $('#slidingbar').click (function(){
             $('#slidingbar').slideUp(1400);
              
            });
            
         });  
                
    /* *************sutter 360 move**************/
    var angle = 0;
        setInterval(function(){
            $('#logo-sutter').css({
        "-webkit-transform": "rotate(" + angle  + "deg)",
        "-moz-transform": "rotate(" + angle  + "deg)",
       "-o-transform": "rotate(" + angle  + "deg)",
       "-ms-transform":"rotate(" + angle  + "deg)"
        
        });
            angle= angle + 10;
            if (angle ==360)
                angle =0;
            console.log("Angle:" + angle );
        },100);  
    
    