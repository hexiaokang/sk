/**
 * Created by hexiaokang on 2016/12/15.
 */
"use strict";
$('.sixService_container .back').hover(function(){
    $(this).attr('src','img/btn-top-hover.png');
},function(){
    $(this).attr('src','img/btn-top.png');
})
var customer_ser_item=[
    {
        img:'img/customer_ser1.png',
        h3:'现场/后台沟通',
        p:'利用先进的网络技术，实现现场与后端技术中心的联动，提升服务效率和服务品质'
    },
    {
        img:'img/customer_ser2.png',
        h3:'智能装备维护',
        p:'采集智能装备的实时运行数据，和历史数据对比，快速预测装备中可能存在的问题，提前预估检修，更换坏件，确保设备的7*24的可靠运维。'
    },
    {
        img:'img/customer_ser3.jpg',
        h3:'在线客服支持',
        p:'现场的实时画面传送及实时语音互通，实现快捷准确的远程技术支持，提高应急速度和维护效率'
    },
    {
        img:'img/customer_ser4.png',
        h3:'互动培训',
        p:'借助先进的VR及视频技术，运用互联网直播与点播，实现远程个性化一对一互动培训'
    },
    {
        img:'img/customer_ser5.png',
        h3:'实操培训',
        p:'提供理论转化为实际操作技能的培训'
    }
];
function createCustomerItem(){
    for(var c in customer_ser_item){
        var li=document.createElement('li');
        var img=document.createElement('img');
        var div=document.createElement('div');
        var h3=document.createElement('h3');
        var p=document.createElement('p');
        var button=document.createElement('button');
        img.src=customer_ser_item[c].img;
        li.appendChild(img);
        h3.innerText=customer_ser_item[c].h3;
        div.appendChild(h3);
        p.innerText=customer_ser_item[c].p;
        div.appendChild(p);
        button.innerText='了解详情';
        div.appendChild(button);
        li.appendChild(div);
        var customer_ser_pic_ul=document.getElementsByClassName('customer_ser_pic_ul')[0];
        customer_ser_pic_ul.appendChild(li);
    }
};
createCustomerItem();
$('.customer_left').click(function(){
    customer_ser_item.push(customer_ser_item[0]);
    customer_ser_item.splice(0,1);
    $('.customer_ser_pic ul li').remove();
    createCustomerItem();
});
$('.customer_right').click(function(){
    customer_ser_item.unshift(customer_ser_item[customer_ser_item.length-1]);
    customer_ser_item.splice(customer_ser_item.length-1,1);
    $('.customer_ser_pic ul li').remove();
    createCustomerItem();
});
$('.rep_btn_left').click(function(){
    var le=parseInt($('.repertory_pic_ul').css('left'));
    if(!$('.repertory_pic_ul').is(':animated')){
        if(le==-1360){
            $('.repertory_pic_ul').stop().css('left','-10px');
            $('.repertory_pic_ul').animate({left:'-280px'},400);
        }else{
            le-=270;
            $('.repertory_pic_ul').animate({left:le+'px'},400);
        }
    }
});
$('.rep_btn_right').click(function(){
    var le=parseInt($('.repertory_pic_ul').css('left'));
    if(!$('.repertory_pic_ul').is(':animated')){
        if(le==-10){
            $('.repertory_pic_ul').stop().css('left','-1360px');
            $('.repertory_pic_ul').animate({left:'-1090px'},400);
        }else{
            le+=270;
            $('.repertory_pic_ul').animate({left:le+'px'},400);
        }
    }
});
$('.modal_cont').hover(function(){
    $(this).animate({opacity:'1'},500);
    $(this).children().show();
    $(this).find('button').css('display','block');
    $(this).next().css('color','#49ACFF');
},function(){
    $(this).children().hide();
    $(this).animate({opacity:'0'},300);
    $(this).next().css('color','white');
})

jQuery('.sixicon').hover(function(){
    var tag=jQuery(this).attr('src').charAt(11);
    jQuery(this).attr('src','img/sixIcon'+tag+'-hover.png');
    var par=jQuery(this).parent().parent().find('p').css('color','#0DA4EA');
},function(){
    var tag=jQuery(this).attr('src').charAt(11);
    jQuery(this).attr('src','img/sixIcon'+tag+'.png');
    var par=jQuery(this).parent().parent().find('p').css('color','black');
});
jQuery('.dev_container ul button').click(function(){
    jQuery(this).css('background-color','white');
    jQuery(this).css('border','3px solid #49ACFF');
    jQuery(this).css('color','#49ACFF');
});

setInterval(function(){
    var arr=[1,2,3,4,5,6];
    for(var k in arr){
        if(jQuery('.cre_tagicon'+arr[k]).is(':visible')){
            jQuery('.cre_tag'+arr[k]).css('color',"#49ACFF");
            var width=jQuery('.cre_tag'+arr[k]).css('width');
            jQuery('.cre_tag'+arr[k]).next().addClass('cre_tagicon_line');
            jQuery('.cre_tag'+arr[k]).next().css('width',width);
        }else{
            jQuery('.cre_tag'+arr[k]).css('color',"black");
            jQuery('.cre_tag'+arr[k]).next().removeClass('cre_tagicon_line');
        }
    }
},0)
jQuery('.seal_pic li').hover(function(){
    jQuery(this).addClass('sale_hover');
},function(){
    jQuery(this).removeClass('sale_hover');
});

setInterval(function(){//滚动缩小导航条
    var offsetTop=$(document).scrollTop();
    if(offsetTop>0){
        $('.navigator_container_index').css('height','60px');
        $('.navigator').css({
            'height':'60px',
            'line-height':'60px'
        });
        $('.navigator .logo_text').css('font-size','25px');
        $('.navigator ul li a').css('font-size','15px');
        $('.navigator_container_index .dropdown-menu').css('margin-top','-13px');
    }else{
        $('.navigator_container_index').css('height','90px');
        $('.navigator').css({
            'height':'90px',
            'line-height':'90px'
        });
        $('.navigator .logo_text').css('font-size','30px');
        $('.navigator ul li a').css('font-size','16px');
        $('.navigator_container_index .dropdown-menu').css('margin-top','-28px');
    }
},10);
function reply(){
    $('.wx').attr('src','img/wechat.png');
    $('.wb').attr('src','img/weibo.png');
    $('.qq').attr('src','img/qq.png');
    $('.ph').attr('src','img/phone.png');
    $('.ma').attr('src','img/mail.png');
}
$('.cat').click(function(){
    var src=$(this).attr('src').slice(0,$(this).attr('src').indexOf('.png'));
    if($(this).next().css('display')=='none'){
        $('.offset_modal').slideDown(200);
        $('.concat_mesg').hide();
        reply();
        $(this).next().slideDown(200);
        $(this).attr('src',src+'_hover.png');
    }else{
        $('.offset_modal').hide();
        $(this).next().css('display','none');
        reply();
    }
});
/*
$('.cat').click(function(){
    $('.concat_mesg').hide();
    $('.offset_modal').slideDown(200);
    $(this).next().slideDown(200);
});*/
