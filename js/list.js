/**
 * Created by hexiaokang on 2017/1/5.
 */
$('.product_navb li img').hover(function(){
    var tag=$(this).attr('src').charAt(15);
    console.info(tag);
    $(this).attr('src','../img/list_nav'+tag+'_hover.png');
},function(){
    var tag=$(this).attr('src').charAt(15);
    if(tag!=2){
        $(this).attr('src','../img/list_nav'+tag+'.png');
    }
})

var recomd_pro_item=[
    {
        h5:'数字制造中心',
        starImg:'../img/list_stars.png',
        oldPrice:'&yen;222.00',
        nowPrice:'&yen;22.00',
        picImg:'../img/list_photo1.png'
    },
    {
        h5:'互联工厂',
        starImg:'../img/list_stars.png',
        oldPrice:'&yen;222.00',
        nowPrice:'&yen;22.00',
        picImg:'../img/list_photo2.png'
    },
    {
        h5:'互联机器',
        starImg:'../img/list_stars.png',
        oldPrice:'&yen;222.00',
        nowPrice:'&yen;22.00',
        picImg:'../img/list_photo3.png'
    }
];
function createArrowLi(){
    for(var r in recomd_pro_item){
        var li=document.createElement('li');
        var messageDiv=document.createElement('div');
        var picDiv=document.createElement('div');
        var h5=document.createElement('h5');
        var recomdP=document.createElement('p');
        var userNumP=document.createElement('p');
        var priceP=document.createElement('p');
        var starImg=document.createElement('img');
        var picImg=document.createElement('img');
        var span=document.createElement('span');
        var s=document.createElement('s');

        messageDiv.className='product_message';
        picDiv.className='product_pic';
        h5.innerHTML=recomd_pro_item[r].h5;
        starImg.src=recomd_pro_item[r].starImg;
        recomdP.className='recomd';
        recomdP.append(starImg);
        priceP.className='now_price';
        span.innerHTML=recomd_pro_item[r].nowPrice;
        s.innerHTML=recomd_pro_item[r].oldPrice;
        picImg.src=recomd_pro_item[r].picImg;
        picImg.className='img-responsive';
        messageDiv.append(h5);
        recomdP.append(starImg);
        messageDiv.append(recomdP);
        userNumP.innerHTML='(<span>220</span>)人已使用';
        messageDiv.append(userNumP);
        priceP.append(span);
        priceP.append(s);
        messageDiv.append(priceP);
        picDiv.append(picImg);
        li.append(messageDiv);
        li.append(picDiv);
        $('.recomd_product ul').append(li);
    }
}
createArrowLi();
$('.arrow_left').click(function(){
    recomd_pro_item.push(recomd_pro_item[0]);
    recomd_pro_item.splice(0,1);
    $('.recomd_product ul li').remove();
    createArrowLi();
})
$('.arrow_right').click(function(){
    recomd_pro_item.unshift(recomd_pro_item[recomd_pro_item.length-1]);
    recomd_pro_item.splice(recomd_pro_item.length-1,1);
    $('.recomd_product ul li').remove();
    createArrowLi();
});
$('.view_list_ul').hide();
$('.view_thumbnai').click(function(){
    $(this).attr('src','../img/list_view_thumbnail_clicked.png');
    $('.view_list').attr('src','../img/list_view_list.png');
    $('.view_thumbani_ul').show();
    $('.view_list_ul').hide();
//        $('.product_container').css('height','725px');
});
$('.view_list').click(function(){
    $(this).attr('src','../img/list_view_list_clicked.png');
    $('.view_thumbnai').attr('src','../img/list_view_thumbnai.png');
    $('.view_list_ul').show();
    $('.view_thumbani_ul').hide();
//        $('.product_container').css('height','auto');
});