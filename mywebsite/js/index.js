 $(document).ready(
             function(){
              //瀵版鍩宭i閻ㄥ嫬顔旀惔锕嫲閸欏疇绐涢崐锟
             	var liwidth=$(".nav li").outerWidth(true);
             	$(".nav li").mouseenter(
                       function(){
                       	
                       var now=$(this).index();
                       $(this).addClass('cur').siblings().removeClass('cur');
                       $(".libg").stop().animate({"left":liwidth*now}, 400);
                       }
             		);
          
             //banner鏉烆喗鎸
             var nowimg=0;
             var timer=0;
             donghua();
             function donghua(){
             	window.clearInterval(timer);
             	timer=window.setInterval(function(){
                    $(".rightbtn").trigger("click");
                	
             	},4000);
             }
            
           $(".rightbtn").click(
                function(){
                		$(".pic li").eq(nowimg).fadeOut(800);
                	if(nowimg<$(".pic li").length-1){
                		nowimg++; 
                	}else{
                		nowimg=0;
                	}
                	$(".pic li").eq(nowimg).fadeIn(800);
                	$(".circle li").eq(nowimg).addClass('cur').siblings().removeClass('cur');
                
                }
           	);
            $(".leftbtn").click(
                function(){
                		$(".pic li").eq(nowimg).fadeOut(800);
                	if(nowimg>0){
                		nowimg--;
                	}else{
                		nowimg=$(".pic li").length-1;
                	}
                	$(".pic li").eq(nowimg).fadeIn(800);
                	$(".circle li").eq(nowimg).addClass('cur').siblings().removeClass('cur');
                 
                }
           	);
          $(".circle li").click(
            function(){
            	if(!$(this).is(".cur")){
            	$(".pic li").eq(nowimg).fadeOut(800);
            	nowimg=$(this).index();
            	$(".pic li").eq(nowimg).fadeIn(800);
            	$(".circle li").eq(nowimg).addClass('cur').siblings().removeClass('cur');
            
            	}          	
            }
          	);
          $("#banner").hover(
               function(){
               	$(".btn span").fadeIn();
               },
               function(){
               	$(".btn span").fadeOut();
               }
             );
          	
           //UI鏉烆喗鎸
           var nowimg1=0; 
          $(".next,.pre").hover(
             function(){
              $(this).addClass('cur');
             },
             function(){
              $(this).removeClass('cur');
             }
          	);
           $(".next").click(
               function(){
                if(!$(".banner1 .photo").is(":animated")){
                  if(nowimg1<$(".banner1 .photo li ").length-1){
                  nowimg1++;
                }
               
                $(".banner1 .photo").animate({"left":-930*nowimg1}, 400);
                $(".circle1 li").eq(nowimg1).addClass('cur').siblings().removeClass("cur");
                }
               	
              
               }
           	);
            $(".pre").click(
               function(){
                if(!$(".banner1 .photo").is(":animated")){
                    if(nowimg1>0){
                  nowimg1--;
                }
              
                $(".banner1 .photo").animate({"left":-930*nowimg1}, 400);
                $(".circle1 li").eq(nowimg1).addClass('cur').siblings().removeClass("cur");
                }
               
              
               }
           	); 
           $(".circle1 li").click(
               function(){
               	nowimg1=$(this).index();
                $(".banner1 .photo").animate({"left":-930*nowimg1}, 400);
                $(".circle1 li").eq(nowimg1).addClass('cur').siblings().removeClass("cur");
              
               }
 
           	); 
           $(".banner1 .photo li div").hover(
                   function(){
                   	$(this).stop().animate({"top":-30}).children().children(".hk").stop().fadeOut();
                   },
                  function(){
                   	$(this).stop().animate({"top":0}).children().children(".hk").stop().fadeIn();
                   }
           	);
           
            $("#case .bd li").hover(
                 function(){
                 	$(this).children('p').stop().animate({"bottom":0}, 500)
                 },function(){
                 	$(this).children('p').stop().animate({"bottom":-36}, 500)
                 }

            	);
           }
         	);