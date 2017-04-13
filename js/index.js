$(function () {
    var lis = $('.banner>.img>ul>li');//获取图片
    var arrows = $('.banner>.arrow');//获取箭头
    var nums = $('.banner>.num>li');//获取数字
    var timeId = null; //开始定时器时先设置空
    var img = 0; //图片先设置为0
    //鼠标移入左右箭头出线
    //鼠标移入动画暂停,离开动画继续
    $('.banner').hover(function () {
        arrows.fadeIn();//淡入鼠标
        clearInterval(timeId); //清理动画
    }, function () {
        arrows.fadeOut();//淡出鼠标
        timeId = setInterval(time, 2000);//开启动画
    })
    //图片的索引对应数字
    nums.each(function (index, element) {
        $(element).mouseover(function () {
            img = index;//图片等于索引号
            lis.eq(index).fadeIn().siblings().fadeOut();
            nums.eq(index).addClass('num-one').siblings().removeClass('num-one');
        })
    })
    //代码冗余,使用函数
    function abc() {
        lis.eq(img).fadeIn().siblings().fadeOut();
        nums.eq(img).addClass('num-one').siblings().removeClass('num-one');
    }
    //左右按钮点击事件,图片下一张
    $('.arrow-left').on('click', function () {
        img > 0 ? img-- : img = lis.length - 1; //三元表达式
        abc();//调用函数

        // lis.eq(img).fadeIn().siblings().fadeOut();
        // nums.eq(img).addClass('num-one').siblings().removeClass('num-one');
    })
    $('.arrow-right').on('click', function () {
        img < lis.length - 1 ? img++ : img = 0;
        abc();//调用函数

        // lis.eq(img).fadeIn().siblings().fadeOut();
        // nums.eq(img).addClass('num-one').siblings().removeClass('num-one');
    })
    // 开启动画效果
    timeId = setInterval(time, 1000);
    function time() {
        img++; //先自增,一直自增到4然后等于0重新开始自增.
        if (img == 4) {
            img = 0;
        }
        // lis.eq(img).fadeIn().siblings().fadeOut();
        // nums.eq(img).addClass('num-one').siblings().removeClass('num-one');
        abc(); //调用函数
    }

})