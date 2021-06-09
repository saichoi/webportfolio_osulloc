$(document).ready(function(){
    
    
    
    ///////////섹션1 이미지 클릭////////////
    
    $('#btn_1>li').each(function(index){
        $(this).attr('data-index',index);
    }).click(function(){
        
        var i = $(this).attr('data-index');
           /* $('#btn_1>li').removeClass('active');
            $('#btn_1>li').eq(i).addClass('active');
        */
        
        
        
        if(i==0){
            $('#section_1').css({
                backgroundImage:'url(img/section_1/section_1_001.jpg)'
            });
            
            $('#btn_1>li').eq(1).css({
                backgroundColor:'#fff'
            });
            
            $('#btn_1>li').eq(0).css({
                backgroundColor:'#000'
            });
            
             $('#text_wrap_1>li').eq(1).css({
                display:'none'
            });
            
            $('#text_wrap_1>li').eq(0).css({
                display:'block'
            });
       
            i++;
        }else if(i==1){
            $('#section_1').css({
                backgroundImage:'url(img/section_1/section_1_002.jpg)'
            });
            
            $('#btn_1>li').eq(1).css({
                backgroundColor:'#000'
            });
            
            $('#btn_1>li').eq(0).css({
                backgroundColor:'#fff'
            });
            
            $('#text_wrap_1>li').eq(0).css({
                display:'none'
            });
            
            $('#text_wrap_1>li').eq(1).css({
                display:'block'
            });
       
        }
        
    });
    
    $('#s_btn_1>li').each(function(index){
        $(this).attr('s-data-index',index);
    }).click(function(){
        
        var i = $(this).attr('s-data-index');
           /* $('#btn_1>li').removeClass('active');
            $('#btn_1>li').eq(i).addClass('active');
        */
        
        
        
        if(i==0){
            $('#section_1').css({
                backgroundImage:'url(img/section_1/section_1_001.jpg)'
            });
            
            $('#s_btn_1>li').eq(1).css({
                backgroundColor:'#fff'
            });
            
            $('#s_btn_1>li').eq(0).css({
                backgroundColor:'#000'
            });
            
             $('#s_text_wrap_1>li').eq(1).css({
                display:'none'
            });
            
            $('#s_text_wrap_1>li').eq(0).css({
                display:'block'
            });
       
            i++;
        }else if(i==1){
            $('#section_1').css({
                backgroundImage:'url(img/section_1/section_1_002.jpg)'
            });
            
            $('#s_btn_1>li').eq(1).css({
                backgroundColor:'#000'
            });
            
            $('#s_btn_1>li').eq(0).css({
                backgroundColor:'#fff'
            });
            
            $('#s_text_wrap_1>li').eq(0).css({
                display:'none'
            });
            
            $('#s_text_wrap_1>li').eq(1).css({
                display:'block'
            });
       
        }
        
    });
    
    
    /////////////히든 메뉴 이벤트/////////////
    
    var i = 0;
    
    $('.menu-trigger').click(function(){
        
        if(i==0){
            $('#hidden_menu_wrap').css({
                display:'block',
            });
        i++;
        }else if(i==1){
            $('#hidden_menu_wrap').css({
                display:'none'
            });
        i=0;
        }
        
    });
    
    var k =0;
    
    
    $('.m_h_top_menu').click(function(){
        if(k==0){
            $(this).animate({
                height:wh*0.45
            });
            $('.m_h_sub_menu',this).slideDown(500);
            k++;
        }else if(k==1){
            $(this).animate({
                height:wh*0.1,
            });
            
            $('.m_h_sub_menu').slideUp(500);
            k--;
        }
    });
    
    
    /////////////메뉴 호버/////////////////
  
    $('.top_menu').each(function(index){
        $(this).attr('menu-index',index);
    }).hover(function(){
        
        var m = $(this).attr('menu-index');
        
        $('.top_menu').eq(m).css({
            backgroundColor:'#fff',
           
        });
        
        $('.top_menu a').css({
            color:'#000',
        });
        
        $('.top_menu>a').eq(m).css({
            fontWeight:500
        });
        
        $('.sub_menu').eq(m).css({
           height:'auto'
        });
        
    },function(){
        $('.top_menu').css({
            backgroundColor:'rgba(255,255,255,0)'
        });
        
        $('.top_menu a').css({
            color:'#fff'
        });
        
        $('.sub_menu').css({
           height:0 
        });
    })
    
    $('.sub_menu a').hover(function(){
        $(this).css({
            color:'cadetblue'
        });
    },function(){
        $(this).css({
            color:'black'
        });
    })
    
       
    
    
            //        $('선택자').hover(function(){
            //            mouseenter되었을 때 식
            //        }, function(){
            //            mouseleave되었을 때 식
            //        });

    
    /////////////햄 버튼 이벤트//////////////
    
    var burger = $('.menu-trigger');

    burger.each(function(index){
        var $this = $(this);

        $this.on('click', function(e){
            e.preventDefault();
            $(this).toggleClass('active-' + (index+1));
        })
    });
    
//    ////////////서브메뉴 이벤트////////////
//    $('.arrow').each(function(index){
//        $(this).attr('arrow-index',index);
//    }).click(function(){
//        
//        var j = $(this).attr('arrow-index');
//        
//        if(i==0){
//            $('.h_sub_menu').eq(j).animate({
//                height:'70%'
//            });
//            i++;
//        }else if(i==1){
//            $('.h_sub_menu').eq(j).animate({
//                height:0
//            });
//            i=0;
//        }
//    });
//    
    
    ////////////스크롤 이벤트/////////////
    
    
    var wh = $(window).height();
    $('#quick_btn>li').each(function(index){
       $(this).attr('btn-index',index) 
    }).click(function(){
        var quick = $(this).attr('btn-index')
        
        $('html,body').animate({
            scrollTop:wh*quick
        });
        
    });
    
    $(window).scroll(function(){
        
        sct = $(window).scrollTop();
        
        var wh = $(window).height();
        
        console.log(sct);
        
        //section_1
        if(0 <= sct && sct < wh*1){
            $('#quick_btn img').eq(0).attr({
                src:'img/section_1/icon_01.png'
            });
            
            $('#quick_btn img').eq(1).attr({
                src:'img/section_1/icon-02.png'
            });
            
            $('#quick_btn img').eq(2).attr({
                src:'img/section_1/icon-03.png'
            });
            
            $('#quick_btn img').eq(3).attr({
                src:'img/section_1/icon-04.png'
            });
            
            $('#quick_btn img').eq(4).attr({
                src:'img/section_1/icon-05.png'
            });
            
            $('#quick_btn').css({
                display:'block'
            });
            
            $('#in_header').css({
                borderBottom:'1px solid #fff',
                boxSizing:'border-box',
            });
            
            
            $('#in_header a').css({
                color:'#fff'
            });
            
            $('#h_logo img').attr({
                src:'img/header/h_logo_2.png'
            });
            
            $('.menu-trigger spna').css({
                backgroundColor:'#fff'
            });
            
            $('#login_wrap').css({
                display:'block'
            });
            
            $('#shopping').css({
                display:'none'
            });
            
           
            
            
        //section_2    
        }else if(wh*1 <= sct && sct < wh*2){
            $('#quick_btn img').eq(1).attr({
                src:'img/section_1/icon_02.png'
            });
            
            $('#quick_btn img').eq(0).attr({
                src:'img/section_1/icon-01.png'
            });
            
            $('#quick_btn img').eq(2).attr({
                src:'img/section_1/icon-03.png'
            });
            
            $('#quick_btn img').eq(3).attr({
                src:'img/section_1/icon-04.png'
            });
            
            $('#quick_btn img').eq(4).attr({
                src:'img/section_1/icon-05.png'
            });
            
            $('#quick_btn').css({
                display:'block'
            });
            
            $('#in_header').css({
                borderBottom:'1px solid #fff',
                boxSizing:'border-box',
            });
            
            $('#in_header a').css({
                color:'#fff'
            });
            
            $('#h_logo img').attr({
                src:'img/header/h_logo_2.png'
            });
            
            $('.menu-trigger span').css({
                backgroundColor:'#fff'
            });
            
            $('#login_wrap').css({
                display:'none'
            });
            
            $('#shopping').css({
                display:'block'
            });
            
             $('.shop_btn>img').eq(0).attr({
                src:'img/header/icon_08.png'
            });
            
            $('.shop_btn>img').eq(1).attr({
                src:'img/header/icon_06.png'
            });
            
            $('.shop_btn>img').eq(2).attr({
                src:'img/header/icon_07.png'
            });
            
            
            
        //section_3
        }else if(wh*2 <= sct && sct < wh*3){
            $('#quick_btn img').eq(2).attr({
                src:'img/section_1/icon_03.png'
            });
            
            $('#quick_btn img').eq(1).attr({
                src:'img/section_1/icon-02.png'
            });
            
            $('#quick_btn img').eq(0).attr({
                src:'img/section_1/icon-01.png'
            });
            
            $('#quick_btn img').eq(3).attr({
                src:'img/section_1/icon-04.png'
            });
            
            $('#quick_btn img').eq(4).attr({
                src:'img/section_1/icon-05.png'
            });
            
            $('#quick_btn').css({
                display:'block'
            });
            
            $('#in_header').css({
                borderBottom:'1px solid #000',
                boxSizing:'border-box',
            });
            
            $('#in_header a').css({
                color:'#000'
            });
            
            $('#h_logo img').attr({
                src:'img/header/h_logo.png'
            });
            
            $('.menu-trigger span').css({
                backgroundColor:'#000'
            });
            
            $('#login_wrap').css({
                display:'none'
            });
            
            $('#shopping').css({
                display:'block'
            });
            
             $('.shop_btn>img').eq(0).attr({
                src:'img/header/icon-08.png'
            });
            
            $('.shop_btn>img').eq(1).attr({
                src:'img/header/icon-06.png'
            });
            
            $('.shop_btn>img').eq(2).attr({
                src:'img/header/icon-07.png'
            });
            
            
        //section_4
        }else if(wh*3 <= sct && sct < wh*4){
            
            $('#quick_btn img').eq(3).attr({
                src:'img/section_1/icon_04.png'
            });
            
            $('#quick_btn img').eq(1).attr({
                src:'img/section_1/icon-02.png'
            });
            
            $('#quick_btn img').eq(2).attr({
                src:'img/section_1/icon-03.png'
            });
            
            $('#quick_btn img').eq(0).attr({
                src:'img/section_1/icon-01.png'
            });
            
            $('#quick_btn img').eq(4).attr({
                src:'img/section_1/icon-05.png'
            });
            
            $('#quick_btn').css({
                display:'block'
            });
            $('#in_header').css({
                borderBottom:'1px solid #000',
                boxSizing:'border-box',
            });
            
            
            $('#in_header a').css({
                color:'#000'
            });
            
            $('#h_logo img').attr({
                src:'img/header/h_logo.png'
            });
            
            $('.menu-trigger span').css({
                backgroundColor:'#000'
            });
            
            $('#login_wrap').css({
                display:'block'
            });
            
            $('#shopping').css({
                display:'none'
            });
            
            
        //section_5
        }else if(wh*4 <= sct && sct < wh*5){
            
            $('#quick_btn img').eq(4).attr({
                src:'img/section_1/icon_05.png'
            });
            
            $('#quick_btn img').eq(1).attr({
                src:'img/section_1/icon-02.png'
            });
            
            $('#quick_btn img').eq(2).attr({
                src:'img/section_1/icon-03.png'
            });
            
            $('#quick_btn img').eq(3).attr({
                src:'img/section_1/icon-04.png'
            });
            
            $('#quick_btn img').eq(0).attr({
                src:'img/section_1/icon-01.png'
            });
            
            $('#quick_btn').css({
                display:'none'
            });
            
            $('#in_header').css({
                borderBottom:'1px solid #000',
                boxSizing:'border-box',
            });
            
            
            $('#in_header a').css({
                color:'#000'
            });
            
            $('#h_logo img').attr({
                src:'img/header/h_logo.png'
            });
            
            $('.menu-trigger span').css({
                backgroundColor:'#000'
            });
            
            $('#login_wrap').css({
                display:'block'
            });
            
            $('#shopping').css({
                display:'none'
            });
            
        //footer   
        }else if(sct >wh*4.4){
            
            $('#in_header').css({
                borderBottom:'1px solid #fff',
                boxSizing:'border-box',
            });
            
            
            $('#in_header a').css({
                color:'#fff'
            });
            
            $('#h_logo img').attr({
                src:'img/header/h_logo_2.png'
            });
            
            $('.menu-trigger span').css({
                backgroundColor:'#fff'
            });
            
            $('#login_wrap').css({
                display:'block'
            });
            
            $('#shopping').css({
                display:'none'
            });
        }
        
    });
    
    ////////////상품 호버//////////////
    
    $('.item_img_2').each(function(index){
        
        $(this).attr('item-index',index);
        
    }).hover(function(){
        
        var k = $(this).attr('item-index');
        
        $('.close_text_wrap_2').eq(k).css({
            display:'block'
        });
        
    },function(){
        $('.close_text_wrap_2').css({
            display:'none'
        });
    })
    /////////섹션2 이벤트//////////////////
    
    
    
    var img_move = $('.item_2').width();

    $('#right_btn_2').click(function () {

        $('#s_item_wrap_2').animate({
            left: -img_move,
        },1000, function () {
            $('#s_item_wrap_2').css({
                left: 0,
            }).find('.item_2').first().appendTo('#s_item_wrap_2');
        });
    });


    $('#left_btn_2').click(function () {
        $('#s_item_wrap_2').animate({

            left: 0,
        }, 1000,function () {

 
            $('#s_item_wrap_2').css({
                left: -img_move,
            }).find('.item_2').last().prependTo('#s_item_wrap_2');
        });
    });

    
    ////////섹션4 이벤트 소개////////////////
    
    $('#btn_4>li').eq(0).css({
        backgroundColor:'#000'
    });
    
    $('#text_wrap_4>li').each(function(index){
        $(this).attr('event-index',index);
    });
    
    $('#btn_4>li').each(function(index){
        $(this).attr('event-index',index);
    }).click(function(){
        
        var e = $(this).attr('event-index');
        
        if(e==0){
            $('#section_4').css({
                backgroundImage:'url(img/section_4/event-01.jpg)'
            });
            
            $('#btn_4>li').css({
                backgroundColor:'#fff'
            });
            
            $('#btn_4>li').eq(0).css({
                backgroundColor:'#000'
            });
            
            $('#in_header').css({
                borderBottom:'1px solid #000',
                boxSizing:'border-box',
            });
            
            
            $('#in_header a').css({
                color:'#000'
            });
            
            $('#h_logo img').attr({
                src:'img/header/h_logo.png'
            });
            
            $('.menu-trigger span').css({
                backgroundColor:'#000'
            });
            
            $('.text_wrap_4>li').css({
                display:'none'
            });
            
            $('.text_wrap_4>li').eq(0).css({
                display:'block'
            });
            
            i++;
        }else if(e==1){
            $('#section_4').css({
                backgroundImage:'url(img/section_4/event-02.jpg)'
            });
            
            $('#btn_4>li').css({
                backgroundColor:'#fff'
            });
            
            $('#btn_4>li').eq(1).css({
                backgroundColor:'#000'
            });
            
            $('#in_header').css({
                borderBottom:'1px solid #fff',
                boxSizing:'border-box'
            });
            
            
            $('#in_header a').css({
                color:'#fff'
            });
            
            $('#h_logo img').attr({
                src:'img/header/h_logo_2.png'
            });
            
            $('.menu-trigger span').css({
                backgroundColor:'#fff'
            });
            
            $('.text_wrap_4>li').css({
                display:'none'
            });
            
            $('.text_wrap_4>li').eq(1).css({
                display:'block',
                color:'#fff'
            });
            
            i++;
       
        }else if(e==2){
            $('#section_4').css({
                backgroundImage:'url(img/section_4/event-03.jpg)'
            });
            
            $('#btn_4>li').css({
                backgroundColor:'#fff'
            });
            
            $('#btn_4>li').eq(2).css({
                backgroundColor:'#000'
            });
            
            $('#in_header').css({
                borderBottom:'1px solid #fff',
                boxSizing:'border-box',
            });
            
            
            $('#in_header a').css({
                color:'#fff'
            });
            
            $('#h_logo img').attr({
                src:'img/header/h_logo_2.png'
            });
            
            $('.menu-trigger span').css({
                backgroundColor:'#fff'
            });
            
            $('.text_wrap_4>li').css({
                display:'none'
            });
            
            $('.text_wrap_4>li').eq(2).css({
                display:'block',
                color:'#fff'
            });
            
            i++;
       
        }else if(e==3){
            $('#section_4').css({
                backgroundImage:'url(img/section_4/event-04.jpg)'
            });
            
            $('#btn_4>li').css({
                backgroundColor:'#fff'
            });
            
            $('#btn_4>li').eq(3).css({
                backgroundColor:'#000'
            });
            
            $('#in_header').css({
                borderBottom:'1px solid #000',
                boxSizing:'border-box',
            });
            
            
            $('#in_header a').css({
                color:'#000'
            });
            
            $('#h_logo img').attr({
                src:'img/header/h_logo.png'
            });
            
            $('.menu-trigger span').css({
                backgroundColor:'#000'
            });
            
            $('.text_wrap_4>li').css({
                display:'none'
            });
            
            $('.text_wrap_4>li').eq(3).css({
                display:'block'
            });
            
            i++;
       
        }else if(e==4){
            $('#section_4').css({
                backgroundImage:'url(img/section_4/event-05.jpg)'
            });
            
            $('#btn_4>li').css({
                backgroundColor:'#fff'
            });
            
            $('#btn_4>li').eq(4).css({
                backgroundColor:'#000'
            });
            
            $('#in_header').css({
                borderBottom:'1px solid #fff',
                boxSizing:'border-box',
            });
            
            
            $('#in_header a').css({
                color:'#fff'
            });
            
            $('#h_logo img').attr({
                src:'img/header/h_logo_2.png'
            });
            
            $('.menu-trigger span').css({
                backgroundColor:'#fff'
            });
            
            $('.text_wrap_4>li').css({
                display:'none'
            });
            
            $('.text_wrap_4>li').eq(4).css({
                display:'block',
                color:'#fff'
            });
            
            i=0;
       
        }
        
    });
    
    ///한 페이지씩 이동하기////////
    var scrollEvent = false;
    var count = 0;
    
    $("html,body").on('mousewheel',function(c){
        c.preventDefault();
        var m = c.originalEvent.wheelDelta;
        var sb = $("#section_1").height();
        
        if(m>1 && scrollEvent == false && count>=1){
           console.log(count);
        scrollEvent = true;
        count--;
        
        $("html,body").stop().animate({scrollTop:sb*count},{duration:300,complete :function(){
            scrollEvent = false;}
           });
        
        
    }else if(m<1 && scrollEvent == false && count<6){
        console.log(count);
        scrollEvent = true;
        count++;
        
        $("html,body").stop().animate({scrollTop:sb*count},{duration:300,complete:function(){
            scrollEvent = false;}    
        });
    }
    });
    
    
    
    
    
    
    
    
    
    
});//end