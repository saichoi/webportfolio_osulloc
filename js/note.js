$(document).ready(function(){
    
    var ww = $(window).width();
    var wh = $(window).height();
    var bg = ['#c4df9b','#a3d39c','#82ca9c','#7accc8','#6dcff6'];
    
    function layout (){
        
    if(ww >= 960 && ww < 1200){
        
        
    $('#wrap').css({
        width:ww,
        height:wh*5.4,
        //backgroundColor:'lightgray',
        float:'left'
    });
    
    $('section').css({
        width:ww,
        height:wh,
        /*backgroundColor:function(index){
            return bg[index];
        },*/
        float:'left',
        position:'relative',
        overflow:'hidden'
    });
        
    $('#section_1').css({
        backgroundImage:'url(img/section_1/section_1_001.jpg)',
        backgroundSize:'cover',
        backgroundPosition:'center',
        backgroundRepeat:'no-repeat'
    });
    
    $('footer').css({
        width:ww,
        height:wh*0.4,
        backgroundColor:'#6c801a',
        float:'left'
    });
    
    $('header').css({
        width:ww,
        height:wh*0.1,
        
        position:'fixed',
        zIndex:99
    });
    
    $('#in_header').css({
        width:ww*0.95,
        height:'100%',
        //backgroundColor:'pink',
        margin:'0 auto',
        borderBottom:'1px solid #fff',
        boxSizing:'borderBox',
    });
        
    $('#in_header a').css({
        color:'#fff'
    });
    
    $('#h_logo').css({
        width:ww*0.1,
        height:'100%',
        //backgroundColor:'crimson',
        float:'left',
        position:'relative',
    });
    
    $('#h_logo img').css({
        width:'80%',
        position:'absolute',
        bottom:10
    });
    
    $('#menu_wrap').css({
        width:'50%',
        height:wh*0.1,
        //backgroundColor:'gold',
        margin:'0 auto',
        display:'none'
    });
    
    $('.top_menu').css({
        width:'20%',
        height:wh*0.1,
        //backgroundColor:'lightyellow',
        float:'left',
        textAlign:'center',
        lineHeight:'90px',
        overflow:'hidden'
    });
    
    $('.sub_menu').css({
        width:'100%',
        height:0,
        backgroundColor:'#fff',
    });
    
    $('.sub_menu>li').css({
        width:'100%',
        height:wh*0.07,
        fontSize:ww*0.008,
        lineHeight:'60px',
        zIndex:99
    });
    
    
    /*$('.top_menu').hover(function(){
        $('.sub_menu').css({
            height:'auto'
        });
    });*/
    
    $('#side_menu').css({
        width:'20%',
        height:wh*0.1,
        //backgroundColor:'olive',
        float:'right',
        position:'relative',
        top:0,
        right:0
    });
    
    $('#change_menu').css({
        width:'70%',
        height:wh*0.1,
        //backgroundColor:'lightgreen'
    });
    
    $('#login_wrap').css({
        width:'100%',
        height:wh*0.1,
        fontSize:ww*0.009,
        //display:'none'
    });
        
        
    
    $('.login_btn').css({
        width:'45%',
        height:wh*0.1,
        float:'left',
        lineHeight:'90px',
        textAlign:'center',
    });
    
    $('.login_btn').eq(1).css({
        width:'10%'
    });
    
    $('#shopping').css({
        width:'100%',
        height:wh*0.1,
        display:'none'
    });
    
    $('.shop_btn').css({
        width:'33.333%',
        height:wh*0.1,
        float:'left',
        marginTop:5
    });
    
    $('.shop_btn>img').css({
        width:'60%',
        marginTop:wh*0.02,
        marginLeft:ww*0.01
    });
    
    $('#ham').css({
        width:ww*0.048,
        height:ww*0.048, 
        //backgroundColor:'#000',
        float:'right',
        position:'relative',
        top:'-50%',
        left:0,
        marginTop:-(ww*0.048)/2
    });
        
    
    $('#hidden_menu_wrap').css({
        width:ww,
        height:wh,
        backgroundColor:'#fff',
        position:'fixed',
        top:wh*0.1,
        left:0,
        zIndex:999,
        display:'none'
    });
        
    $('#top_menu_wrap').css({
        width:'100%',
        overflow:'hidden',
        display:'block'
    });
        
    $('#m_top_menu_wrap').css({
        display:'none'
    });
        
        
    $('.h_top_menu>a').css({
        color:'cadetblue',
        fontWeight:900,
        fontSize:ww*0.02,
    });
        
    $('.h_top_menu').css({
        width:ww,
        height:'14.5%',
        //backgroundColor:'pink',
        marginTop:ww*0.015,
        float:'left',
        marginLeft:ww*0.02,
        borderBottom:'1px solid rgba(80,80,80,0.5)'
    });
        
    $('.h_sub_menu').css({
        width:ww*0.8,
        height:ww*0.08,
        //backgroundColor:'lightblue',
        float:'right'
    });
        
    $('.h_sub_menu>li').css({
        width:ww*0.2,
        height:ww*0.02,
        //backgroundColor:'greenyellow',
        float:'left',
        fontSize:ww*0.012,
        
    });
        
    $('.h_sub_menu a').css({
        color:'rgb(80,80,80)'
    });
    /*hidden_menu_wrap end*/
    /*header end*/
        
    $('#left_side_1').css({
        width:ww*0.5,
        height:wh,
//        backgroundColor:'rgba(255,255,255,0.5)',
        float:'left',
        position:'relative',
        display:'block'
    });
        
    $('#s_left_side_1').css({
        display:'none'
    });
        
    $('#sec_logo').css({
        width:ww*0.2,
        height:wh*0.3,
        position:'absolute',
        top:'50%',
        left:'50%',
        marginLeft:-(ww*0.2)/2,
        marginTop:-(wh*0.3)/2,
//        backgroundColor:'gold'
    });
        
    $('#sec_logo>img').css({
        width:'100% '
    });
        
    $('#s_right_side_1').css({
        display:'none'
    });
        
    $('#right_side_1').css({
        width:'50%',
        height:wh,
//        backgroundColor:'rgba(238,166,239,0.5)',
        float:'left',
        color:'#fff',
        display:'block'
    });
        
    $('#btn_1').css({
        width:ww*0.03,
        height:ww*0.01,
//        backgroundColor:'lightblue',
        marginTop:wh*0.45,
    });
        
    $('#btn_1>li').css({
        width:ww*0.01,
        height:ww*0.01,
        backgroundColor:'#fff',
        borderRadius:'50%',
        float:'left',
        marginRight:ww*0.003
    });
        
    
    $('#btn_1 .active').css({
        backgroundColor:'#000'
    });
        
    $('#text_wrap_1').css({
        width:ww*0.3,
        height:wh*0.2,
        marginTop:10,
//        backgroundColor:'gray',
    });
        
    $('#text_wrap_1>li').css({
        display:'block',
        float:'left'
    });
        
    $('#text_wrap_1>li').eq(1).css({
        display:'none'
    });
        
    $('#text_wrap_1 h3').css({
        fontSize:ww*0.023,
        marginBottom:30
    });
        
    $('#text_wrap_1 p').css({
        fontSize:ww*0.015
    });
        
/////////// quick_btn 영역////////////
        
    $('#quick_btn').css({
        width:ww*0.03,
        height:ww*0.15,
        position:'fixed',
        top:'50%',
        right:20,
        zIndex:99,
        marginTop:-(ww*0.15)/2,
        display:'block'
    });
    
    $('#quick_btn>li').css({
        width:ww*0.03,
        height:ww*0.03,
        float:'left',
        display:'block'
    });
    
    $('#quick_btn img').css({
        width:ww*0.03
    });
    
    /*section_1 end*/

    $('#section_2').css({
        backgroundImage:'url(img/section_2/section_2.jpg)',
        backgroundSize:'cover',
        backgroundPosition:'top',
        backgroundRepeat:'no-repeat'
    });
        
    $('#text_wrap_2').css({
        width:ww*0.5,
        height:ww*0.15,
        //backgroundColor:'rgba(0,0,0,0.5)',
        margin:'120px auto',
        color:'#fff',
        textAlign:'center'
    });
        
    $('#text_wrap_2>h1').css({
        fontSize:ww*0.017,
        marginBottom:30
    });
        
    $('#text_wrap_2>p').css({
        fontSize:ww*0.012
    });
        
    $('.more_btn').css({
        width:ww*0.1,
        height:ww*0.03,
        backgroundColor:'rgba(255,255,255,0.5)',
        margin:'0 auto',
        textAlign:'center',
        fontSize:ww*0.01,
        marginTop:30,
        lineHeight:ww*0.03+'px'
    });
        
    $('#s_item_con').css({
        display:'none'
    });
        
    $('#item_con').css({
        width:ww,
        height:wh*0.4,
        backgroundColor:'#fff',
        float:'left',
        position:'absolute',
        bottom:0,
        left:0,
        display:'block'
    });
    
    $('#item_wrap_2').css({
        width:ww,
        height:ww*0.19,
        //backgroundColor:'gold',
        margin:'0 auto',
        position:'absolute',
        bottom:0,
    });
        
    $('#item_wrap_2>li').css({
        width:'19%',
        height:'100%',
        //backgroundColor:'pink',
        float:'left',
        position:'relative',
        marginRight:'1%'
    });
    
    $('.item_img_2').css({
        width:'100%',
        height:'100%',
        //backgroundColor:'lightblue',
        margin:'0 auto',
        position:'relative'
    });
    
    $('.tea_img').css({
        width:'70%',
        height:'60%',
        //backgroundColor:'gold',
        margin:'0 auto',
        position:'relative'
    });
        
    $('.tea_img>img').css({
        width:'100%',
        //backgroundColor:'gray'
    });
    
    $('.close_text_wrap_2').css({
        width:'100%',
        height:'25%',
        backgroundColor:'rgba(0,0,0,0.5)',
        position:'absolute',
        bottom:0,
        left:0,
        textAlign:'center',
        lineHeight:'40px',
        color:'#fff ',
        display:'none'
    });
       
    $('.close_text_wrap_2>li').css({
        width:'45%',
        float:'left',
        fontSize:ww*0.01
    });
        
    $('.bar').css({
        width:'10%'
    });
        
    $('.text_2').css({
        width:'100%',
        height:'35%',
        //backgroundColor:'gray',
        position:'absolute',
        bottom:0,
    });
        
    $('.star_box').css({
        width:'100%',
        height:'30%',
        //backgroundColor:'yellowgreen',
        fontSize:ww*0.025,
        textAlign:'center',
        lineHeight:'40px'
    });
        
    $('.tea_title').css({
        width:'100%',
        height:'30%',
        //backgroundColor:'olive',
        fontSize:ww*0.013,
        textAlign:'center',
        marginTop:10
    });
        
    /*section_2 end*/
        
    $('#section_3').css({
        backgroundImage:'url(img/section_3/section_3.jpg)',
        backgroundSize:'cover',
        backgroundPosition:'center',
        backgroundRepeat:'no-repeat'
    });
        
    $('#text_wrap_3').css({
        width:ww*0.3,
        height:wh*0.3,
        //backgroundColor:'rgba(0,0,0,0.5)',
        position:'absolute',
        top:'20%',
        left:'50%'
    });
        
    $('#text_wrap_3>h1').css({
        fontSize:ww*0.025,
        marginBottom:30
    });
    
    $('#text_wrap_3>.more_btn').css({
        position:'absolute',
        left:0,
        textAlign:'center'
    });
        
    $('#btn_3').css({
        width:ww*0.01,
        height:ww*0.01,
        position:'absolute',
        top:0,
        left:0,
        display:'none'
    });
        
    $('#btn_3>li').css({
        width:ww*0.01,
        height:ww*0.01,
        backgroundColor:'gold',
        borderRadius:'50%',
        position:'absolute'
    });
    
    
    $('#btn_3>li').eq(0).css({
        top:ww*0.32,
        left:ww*0.23
    });
        
    $('#btn_3>li').eq(1).css({
        top:ww*0.47,
        left:ww*0.12
    });
    
    $('#btn_3>li').eq(2).css({
        top:ww*0.43,
        left:ww*0.46
    });
        
    $('#btn_3>li').eq(3).css({
        top:ww*0.36,
        left:ww*0.72
    });
        
    
    /*section_3 end*/
    $('#section_4').css({
        backgroundImage:'url(img/section_4/event-01.jpg)',
        backgroundSize:'cover',
        backgroundPosition:'center',
        backgroundRepeat:'no-repeat'
    });
        
    $('.text_wrap_4').css({
        width:ww*0.28,
        height:wh*0.2,
        position:'absolute',
        top:'20%',
        left:'50%',
        marginLeft:-(ww*0.28)/2,
        textAlign:'center',
        //backgroundColor:'gold'
    });
        
    $('.text_wrap_4>li').css({
        margin:'0 auto'
    });
        
    $('.text_wrap_4>li').css({
        display:'none'
    });
        
    $('.text_wrap_4>li').eq(0).css({
        display:'block'
    });
        
       
    $('#img_wrap_4>li').eq(4).css({
        color:'#fff'
    });
        
    $('.text_wrap_4 h1').css({
        fontSize:ww*0.022,
        marginBottom:ww*0.02,
        textAlign:'center'
    });
        
    $('.text_wrap_4 p').css({
        fontSize:ww*0.015,
        marginBottom:ww*0.018
    });
        
    $('.text_wrap_4 span').css({
        fontSize:ww*0.01,
        marginBottom:ww*0.008
    });
        
    $('#section_4>.more_btn').css({
        position:'absolute',
        top:'50%',
        left:'50%',
        marginLeft:-(ww*0.1)/2,
        textAlign:'center',
    });
    
    $('#btn_4').css({
        width:ww*0.07,
        height:ww*0.01,
        position:'absolute',
        bottom:'20%',
        left:'50%',
        marginLeft:-(ww*0.07)/2
    });
    
    $('#btn_4>li').css({
        width:ww*0.01,
        height:ww*0.01,
        backgroundColor:'#fff',
        borderRadius:'50%',
        float:'left',
        marginRight:ww*0.002
    });
        
    $('#btn_4 .active').css({
        backgroundColor:'#000'
    });       
        
    /*section_4 end*/
        
    $('#m_left_side_5').css({
        display:'none'
    });
        
    $('#m_right_side_5').css({
        display:'none'
    });
    
    
    $('#left_side_5').css({
        width:ww*0.4,
        height:wh*0.9,
        //backgroundColor:'pink',
        marginTop:ww*0.1,
        marginLeft:ww*0.05,
        marginRight:ww*0.05,
        float:'left',
        display:'block'
    });
        
    $('#l_title_wrap_5').css({
        width:ww*0.3,
        height:wh*0.1,
        //backgroundColor:'gray',
        position:'relative',
        marginBottom:30,
        float:'left'
    });
        
    $('#kr_title').css({
        position:'absolute',
        bottom:0
    });
    
    $('#eng_title').css({
        fontSize:ww*0.05,
        color:'rgba(178,208,167,0.3)',
        position:'absolute',
        bottom:0
    });
        
    $('#kr_title').css({
        fontSize:ww*0.03,
        color:'#075e02',
        fontWeight:900
    });
        
    $('#view_more').css({
        width:'auto',
        height:'auto',
        //backgroundColor:'gray',
        float:'right',
        marginTop:ww*0.05,
        fontSize:ww*0.016
    });
        
    $('#mgz_img_wrap').css({
        width:ww*0.4,
        height:'auto',
        //backgroundColor:'gold',
        float:'left',
    });
        
    $('#mgz_img_wrap>li').css({
        width:'100%',
        //backgroundColor:'pink',
        marginBottom:ww*0.01
    });
        
    $('#mgz_img_wrap img').css({
        width:'100%'
    });
        
    $('#right_side_5').css({
        width:ww*0.4,
        height:wh*0.9,
        //backgroundColor:'lightblue',
        float:'left',
        marginTop:ww*0.1,
        display:'block'
    });
        
    $('#right_side_5>h1').css({
        marginBottom:30
    });
        
    $('#right_side_5>p').css({
        marginBottom:10
    });
        
    $('#img_5').css({
        width:ww*0.4,
        height:'auto',
        //backgroundColor:'gray'
    });
        
    $('#img_5 img').css({
        width:'100%',
    });
        
    /*section_5 end*/
    
    $('#svc_wrap').css({
        width:ww,
        height:wh*0.1,
        backgroundColor:'#fff'
    });
        
    $('#svc_btn').css({
        width:wh*0.6,
        height:wh*0.1,
        //backgroundColor:'pink',
        float:'right',
        position:'relative'
    });
        
    $('#svc_btn>li').css({
        width:wh*0.1,
        height:wh*0.1,
        //backgroundColor:'lightblue',
        float:'left'
    });
        
    $('#svc_btn div').css({
        width:wh*0.07,
        height:wh*0.07,
        margin:'0 auto'
    });
        
    $('#svc_btn img').css({
        width:'100%'
    });
        
    $('#svc_btn p').css({
        width:wh*0.1,
        height:'30%',
        //backgroundColor:'gray',
        float:'left',
        textAlign:'center'
    });
        
    $('#in_footer').css({
        width:ww*0.95,
        height:wh*0.3,
        //backgroundColor:'pink',
        margin:'0 auto',
    });
        
    $('#f_logo').css({
        width:ww*0.08,
        height:'auto',
        //backgroundColor:'gold',
        float:'left',
        marginLeft:ww*0.01,
        marginTop:ww*0.04
    });
        
    $('#f_logo img').css({
        width:'100%'
    });
        
    $('#copyright').css({
        width:ww*0.6,
        //backgroundColor:'gray',
        float:'left',
        marginLeft:ww*0.03,
        marginTop:'4%',
        color:'#fff'
    });
        
    $('#copyright>span').css({
        fontWeight:900,
        color:'#000',
    });
        
    $('#buy_svc').css({
        width:ww*0.2,
        //backgroundColor:'blue',
        float:'right',
        marginTop:'4%',
        color:'#fff',
        fontSize:14,
        textAlign:'center',
        display:'block'
    });
        
    $('#buy_svc>li').css({
        marginBottom:10
    });
        
    $('#buy_svc img').css({
        marginLeft:'40%'
    });
     
    }//tab end
    
        
    };//layout end
    layout();
    
    
    $(window).resize(function(){
                    
        ww = $(window).width();
                    
        layout();
                    
                    
    });
    
});//end