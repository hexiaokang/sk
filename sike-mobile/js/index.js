/**
 * Created by hexiaokang on 2017/2/4.
 */
$('.header_container .back').click(function(){
    window.history.back();
});
$('.header_container .menu_img').click(function(){
    $('.modal_box').show();
    $(this).next().animate({left:'0px'},400);
    $('html').css({
        'position':'fixed',
        'left':'0px',
        'right':'0px'
    });
    $('.user_menu').animate({right:'-70%'},100);
});
$('.header_container .user').click(function(){
    $('.modal_box').show();
    $(this).next().animate({right:'0px'},400);
    $('html').css({
        'position':'fixed',
        'left':'0px',
        'right':'0px'
    });
    $('.nav_menu').animate({left:'-70%'},100);
});
$('.modal_box').click(function(){
    $('.nav_menu').animate({left:'-70%'},400);
    $('.user_menu').animate({right:'-70%'},400);
    $(this).hide();
    $('html').css('position','relative');
});
$('.nav_menu ul li div').click(function(){
    $('.nav_menu ul li ul').hide();
    var index=window.location.href.indexOf('index');
    if(index){
        $('.nav_menu ul li div .topMenu').attr('src','img/-e-arrow-Shape2x.png');
        $('.nav_menu ul li div .bomMenu').attr('src','img/-e-arrow-down2x.png');
    }else{
        $('.nav_menu ul li div .topMenu').attr('src','../img/-e-arrow-Shape2x.png');
        $('.nav_menu ul li div .bomMenu').attr('src','../img/-e-arrow-down2x.png');
    }
    var cla=$(this).parent().parent().parent().parent().attr('class');
    if(cla!='footer_container'){
        $('.nav_menu ul li div span').css('color','#888888');
        $(this).children('span').css('color','#49ACFF');
    }
    $('.nav_menu ul li ul').animate({height:'0px'},0);
    var height=$(this).next().children().length*42+'px';
    if($(this).attr('class')!='tag'){
        $(this).next().show();
        $(this).next().animate({height:height},400);
        if(index){
            $(this).children('.topMenu').attr('src','img/-e-arrow-up-click.png');
            $(this).children('.bomMenu').attr('src','img/-e-arrow-up2x.png');
        }else{
            $(this).children('.topMenu').attr('src','../img/-e-arrow-up-click.png');
            $(this).children('.bomMenu').attr('src','../img/-e-arrow-up2x.png');
        }
        $('.nav_menu ul li div').removeClass('tag');
        $(this).addClass('tag');
    }else{
        $(this).removeClass('tag');
    }
});
$('.six_server table tr td img').click(function(){
    var srcIndex=$(this).attr('src').charAt('11');
    var id=$(this).parent().attr('href').substr(1,3);
    $('.title').children('span').css('color','rgb(43,62,79)');
    $('.six_server table tr td:not(.six) img').each(function(i){
        $(this).attr('src','img/sixIcon'+(i+1)+'.svg');
    });
    $('.title img').each(function(i){
        var iconIndex=$(this).attr('src').charAt(11);
        console.info($(this).attr('src'));
        console.info(iconIndex)
        $(this).attr('src','img/-e-icon'+iconIndex+'.svg');
    });
    $(this).attr('src','img/sixIcon'+srcIndex+'-hover.svg');
    $('#'+id).children('.title').children('span').css('color','rgb(73,172,255)');
    var iconIndex=$('#'+id).children('.title').children('img').attr('src').charAt(11);
    $('#'+id).children('.title').children('img').attr('src','img/-e-icon'+iconIndex+'-click.svg');
});

window.setInterval(function(){

    var currentPic=$('.activeI');
    var id=currentPic.attr('id');
    $('.pic_box ul li img').css('opacity',0);
    console.info($('#pic_'+id));
    $('#pic_'+id).animate({opacity:1},1000);
    currentPic.removeClass('activeI');
    $('.icon_box ul li').css('background','white');
    currentPic.parent().next().children('i').addClass('activeI');
    currentPic.parent().next().css('background','#F6F5F4');

    if(id=='icon5'){
        $('.icon_box ul li #icon1').addClass('activeI');
        $('.icon_box ul li #icon1').parent().css('background','#F6F5F4');
    };

    var active_notice=$('.active_notice');
    var no=active_notice.attr('id');
    active_notice.removeClass('active_notice');
    active_notice.next().addClass('active_notice');
    if(no=='not1'){
        $('.notice span').text('思科联合创新上线');
    }else if(no=='not2'){
        $('.notice span').text('思科3D打印服务上线');
    }else if(no=='not3'){
        $('.notice span').text('思科研发协同设计piccontrol-ciurrent');
    }
    if(no=='not3'){
        $('.notice .notice_btn i:first-child').addClass('active_notice');
    }
},2000)

$('input[type=search]').focus(function(){
    $(this).css('backgroundImage','url()');
});
$('input[type=search]').blur(function(){
    $(this).css('backgroundImage','url(../img/iconSearch.png)');
});