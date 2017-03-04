/**
 * Created by hexiaokang on 2017/1/3.
 */
function reply(){
    $('.wx').attr('src','../img/wechat.png');
    $('.wb').attr('src','../img/weibo.png');
    $('.qq').attr('src','../img/qq.png');
    $('.ph').attr('src','../img/phone.png');
    $('.ma').attr('src','../img/mail.png');
}
$('.cat').click(function(){
    var src=$(this).attr('src').slice(0,$(this).attr('src').indexOf('.png'));
    console.info(src);
    if($(this).next().css('display')=='none'){
        $('.offset_modal').show();
        $('.concat_mesg').hide();
        reply();
        $(this).next().css('display','block');
        $(this).attr('src',src+'_hover.png');
    }else{
        $('.offset_modal').hide();
        $(this).next().css('display','none');
        reply();
    }
});