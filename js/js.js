jQuery(function($) {
    $(document).ready(function() {
        //
        if ($('#dome1').length > 0) {
            $('#dome1').stickUp({
                parts: {
                    0: 'hyperlink1',
                    1: 'hyperlink2',
                    2: 'hyperlink3',
                    3: 'hyperlink4',
                    4: 'hyperlink5',
                    5: 'hyperlink6',
                    6: 'hyperlink7',
                    7: 'hyperlink8'
                },
                itemClass: 'menuItem',
                itemHover: 'active'
            });
        }

        //
        if ($('#dome-about').length > 0) {
            $('#dome-about').stickUp();
        }
    });
});


$(function() {
    var winWidth = $(document).width();
    $('.bg-img').each(function() {
        var $this = $(this),
            //imgWidth = $this.width();
            imgWidth = 1892;
        if (winWidth < imgWidth) {
            $this.css('margin-left', -(imgWidth - winWidth) / 2);
        }


        $(window).resize(function() {

            var winWidth = $(document).width();
            $('.bg-img').each(function() {
                var $this = $(this),
                    imgWidth = 1892;
                $this.css('margin-left', -(imgWidth - winWidth) / 2);
            });
        });



    }); //end



    /*    $('.nav-wrap dd').hover(function(){
            var $this = $(this),
                $thisTop = $this.position().top;
           $this.siblings('.hover').animate({'top':$thisTop},100).show();
    //        $this.siblings('.hover').animate({'top':$thisTop},150,function(){
    //            $(this).animate({'top':$thisTop},150);
    //        }).show();
        },function(){
            var $this = $(this),
                $thisTop = $this.position().top;
            $this.siblings('.hover').hide().css('top',$thisTop);
        })*/



    /*    var banSwiper = new Swiper('.banner-wrap', {
            pagination : '.pagination-banner',
            loop : true,
            prevButton :'.banner-wrap .prev-btn',
            nextButton :'.banner-wrap .next-btn',
            autoplay : 3000,
            paginationClickable: true
        });*/
    /*    var blockSwiper = new Swiper('.block-wrap', {
            pagination : '.pagination-block',
            loop : true,
            slidesPerView : 3,
            prevButton :'.list-wrap .prev-btn',
            nextButton :'.list-wrap .next-btn',
            spaceBetween : 40,
    //        autoplay : 3000,
            paginationClickable: true
        });*/



    $proList.on('click', function() {
        i = $(this).index() - 1;
        clearTimeout(timer);
        //        console.log(i)
        autoSize(i);
    });



}); //end
var i = 0,
    num = $('.detail-info-wrap .pro-trait-list').length,
    timer = '',
    $proList = $('.detail-info-wrap .pro-trait-list');

function autoSize(num) {
    //  $proList.eq(i).addClass('open').removeClass('close').siblings('.pro-trait-list').addClass('close').removeClass('open');

    $proList.eq(i).removeClass('close').css({
        "height": "auto"
    });
    this_height = $proList.eq(i).height(); //获取auto时div的高度
    $proList.eq(i).height(0);
    $proList.eq(i).animate({
        "height": this_height
    }, 600).addClass('open'); //展开时动画效果
    $proList.eq(i).siblings('.open').animate({
        "height": 70
    }, 600).addClass('close').removeClass('open');

    if (i < num - 1) {
        i++;
    } else {
        i = 0;
    }
    // timer = setTimeout(autoSize,4000);
};
//autoSize(num);
//autoSize();



//==========================锚点跳转效果
$(".nav-list li a[href^='#']").on('click', function(e) {

    // prevent default anchor click behavior
    e.preventDefault();

    // store hash
    var hash = this.hash;

    // animate
    $('html, body').animate({
        scrollTop: $(this.hash).offset().top,

    }, 600, function() {

        // when done, add hash to url
        // (default click behaviour)
        window.location.hash = hash;
    });

});



/*=============Tab栏切换===============*/


$(function() {
    var timer = null;
    $('.about-con-top li').mouseover(function(event) {
        var T = $(this);
        clearTimeout(timer);
        timer = setTimeout(function() {
            T.addClass('current').siblings().removeClass();
            $('.about-con-main > div').eq(T.index()).addClass('current').siblings().removeClass('current');
        }, 100)
    });
    $('.about-con-top li').mouseout(function(event) {
        clearTimeout(timer);
    });
});
/*=============Tab栏切换===============*/


//============================================================水滴切换============================================

$(function() {
    var timer = null;
    $('.drop li').mouseover(function(event) {
        var T = $(this);
        clearTimeout(timer);
        timer = setTimeout(function() {
            T.addClass('current').siblings().removeClass();
            $('.recruit-bottom div').eq(T.index()).addClass('current').siblings().removeClass('current');
        }, 100)
    });
    $('.drop li').mouseout(function(event) {
        clearTimeout(timer);
    });
});


//============================================================水滴切换============================================



//=============================================================时间轴=======================================
$(function() {
    $('.math-main div').hover(function() {
        $(this).children("i").addClass('time');
        $(this).siblings().children("i").removeClass('time');

    }, function() {

        $(this).children("i").addClass('time');

    })
});
//=============================================================时间轴==================

//=========================

$(".15t li").click(function() {
    $(".15c").slideToggle(1000);
    /*$(".downmeau li").addClass("tutu")*/
});
$(".16t li").click(function() {
    $(".16c").slideToggle(1000);
    /*$(".downmeau li").addClass("tutu")*/
});
var clickNumber = 0;
$('.downmeau li').click(function() {
        if (clickNumber % 2 == 0) {
            $(".downmeau li").addClass("tutu")
        } else {
            $(".downmeau li").removeClass("tutu")

        }
        clickNumber++;
    })
    //================================================
$(document).ready(function() {
    $(".openSeach").click(function() {
        $("#headerSeach").removeClass("hide");
        $(".openSeach").addClass("hide")
    });
    $(".seach_btn").click(function() {
        $(".openSeach").removeClass("hide");
        $(".ser>div").addClass("hide");
    });
});
