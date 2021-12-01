// 乐购系统首页
// 


// 当页面加载完毕
$(function(){
    $('#bannerInner').tyslide({
        boxh:460,//盒子的高度
        w:1000,//盒子的宽度
        h:390,//图片的高度
        isShow:true,//是否显示控制器
        isShowBtn:true,//是否显示左右按钮
        controltop:40,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW:20,//控制按钮宽度
        controlsH:20,//控制按钮高度
        radius:10,//控制按钮圆角度数
        controlsColor:"#d7d7d7",//普通控制按钮的颜色
        controlsCurrentColor:"#ff6600",//当前控制按钮的颜色
        isShowNum:true //是否显示数字
    });




     //图书轮播
    $('#ebooks-banner').tyslide({
        boxh:223,//盒子的高度
        w:332,//盒子的宽度
        h:223,//图片的高度
        isShow:true,//是否显示控制器
        isShowBtn:true,//是否显示左右按钮
        controltop:10,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW:20,//控制按钮宽度
        controlsH:2,//控制按钮高度
        controlsColor:"#d7d7d7",//普通控制按钮的颜色
        controlsCurrentColor:"green",//当前控制按钮的颜色
    });




     //图书轮播
     $('#clothes-banner').tyslide({
        boxh:286,//盒子的高度
        w:429,//盒子的宽度
        h:286,//图片的高度
        isShow:true,//是否显示控制器
        isShowBtn:true,//是否显示左右按钮
        controltop:10,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW:20,//控制按钮宽度
        controlsH:2,//控制按钮高度
        controlsColor:"#d7d7d7",//普通控制按钮的颜色
        controlsCurrentColor:"green",//当前控制按钮的颜色
    });




    $('#sport-banner').tyslide({
        boxh:286,//盒子的高度
        w:429,//盒子的宽度
        h:286,//图片的高度
        isShow:true,//是否显示控制器
        isShowBtn:true,//是否显示左右按钮
        controltop:10,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW:20,//控制按钮宽度
        controlsH:2,//控制按钮高度
        controlsColor:"#d7d7d7",//普通控制按钮的颜色
        controlsCurrentColor:"green",//当前控制按钮的颜色
    });




    $('#children-clothes-banner').tyslide({
        boxh:286,//盒子的高度
        w:429,//盒子的宽度
        h:286,//图片的高度
        isShow:true,//是否显示控制器
        isShowBtn:true,//是否显示左右按钮
        controltop:10,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW:20,//控制按钮宽度
        controlsH:2,//控制按钮高度
        controlsColor:"#d7d7d7",//普通控制按钮的颜色
        controlsCurrentColor:"green",//当前控制按钮的颜色
    });




    $('.promotion .promotion-title ul li').mouseenter(function () {
        //导航激活类的切换
        $(this).addClass('active').siblings().removeClass('active')
        //内容切换
        //获取对应的索引
        var index = $(this).index();
       //左右移动
       $('.promotion .promotion-content .inner-box').animate({
           'left':-index * 1170
       })
    })



    $(document).scroll(function () {
        //获取距离顶部的距离
        var topDistance = $('html,body').scrollTop();
        //判断
        if (topDistance > 400) {
            $('.backToTop').fadeIn();
        }else {
            $('.backToTop').fadeOut();
        }
    })
    //返回顶部功能
    $('.backToTop').click(function () {
        $('html,body').animate({
            scrollTop: 0
        },300)
       })


    //二维码滑出效果
       $('.qr-code .ticket').hover(function(){
        //让二维码滑出来
        $('.qr-code div').stop(true).animate({
            left:'-100px'
            })
        },function(){
            $('.qr-code div').stop(true).animate({
                left:0
            })
       })

    //顶部搜索框
       $(document).scroll(function(){
           //获取到顶部的距离
           var topDistance=$('html,body').scrollTop();
           if(topDistance > 500){
            $('.top-search-box').slideDown(300)
           }else{
            $('.top-search-box').slideUp(300)
           }
       })


       //楼层跳转
      /*楼层交互 */
    $('.floor li').click(function() {
	//获取索引
	var index = $(this).index();
	//选中每一个板块到顶部的偏移
	var topOffset = $('.floorBox').eq(index).offset().top;

	//让滚动条滚到这个位置
	$('html,body').animate({
		scrollTop: topOffset - 50
	})
})

    
    /*新书手风琴效果*/
    $('.ebooks .right-box ul > li').mouseenter(function(){
    //所有兄弟隐藏详情 显示标题
    $(this).siblings().find('.desc').hide();
    $(this).siblings().find('.ebooks-title').show();
    //当前:隐藏标题 显示详情
    $(this).find('.ebooks-title').hide();
    $(this).find('.desc').show();
    })
    })
