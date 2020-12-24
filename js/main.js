$(window).on("scroll",function(){
    let st = $(window).scrollTop();
    //console.log(st); 
    if(st >= 400){
        $("#section01 > p").css({
            left:"4vw",
            transform:"rotate(-15deg)",
            opacity:1,
        });
    } else if(st < 400){
        $("#section01 > p").css({
            left:"-100px",
            transform:"rotate(-90deg)",
            opacity:0,
        });
    }
    if(st >= 1000){
        $("#section01 .hashTag").css({
            left:"56%",
            opacity:1,
        });
    } else if(st < 1000){
        $("#section01 .hashTag").css({
            left:"-50%",
            opacity:0,
        });
    }
    if(st >= 1600){
        $("#section01 .sub p:nth-child(1)").css({
            left:"22.7vw",
            opacity:1,
        });
        $("#section01 .sub p:nth-child(2)").css({
            left:"0",
            opacity:1,
        });
    } else if(st < 1600){
        $("#section01 .sub p:nth-child(1)").css({
            left:"820px",
            opacity:0,
        });
        $("#section01 .sub p:nth-child(2)").css({
            left:"-400px",
            opacity:0,
        });
    } 
    if(st >= 2900){
        $("#section01 > p").fadeOut(150);
        $("#section01 .hashTag").fadeOut(150);
        $("#section01 .title").css({
            top:"25%",
        });
    } else if(st < 2900){
        $("#section01 > p").fadeIn(150);
        $("#section01 .hashTag").fadeIn(150);
        $("#section01 .title").css({
            top:"45%",
        });
    }

    // #section01 animation

    if(st >= 3000){
        $("#section01 .sub").hide(250);
        $("#logo").hide(250);
        $("#section02").css({
            opacity:1,
        });
        $("#section02 .coding").css({
            left:0,
            opacity:1,
        });
        $("#section02 .design").css({
            left:0,
            opacity:1,
        });
    } else if(st < 3000){
        $("#section01 .sub").show(250);
        $("#logo").show(250);
        $("#section02").css({
            opacity:0,
        });
        $("#section02 .coding").css({
            left:"-400px",
        });
        $("#section02 .design").css({
            left:"400px",
        });
    }


    if(st >= 3600){
        $("#section02").css({
            top:0,
        });
        $("#section01").fadeOut(250);
    } else if (st < 3600){
        $("#section02").css({
            top:"50%",
        });
        $("#section01").fadeIn(250);
    }

    // #section02 animation

    if(st >= 4200){
        $(".skip").hide();
        $("#section03").css({
            opacity:1,
        });
    } else if(st < 4200){
        $(".skip").show();
        $("#section03").css({
            opacity:0,
        });
    }
    if(st >= 4800){
        $("#section03 .about").show(250);
        $("#section03 .txt").show(250);
    } else if(st < 4800){
        $("#section03 .about").hide(250);
        $("#section03 .txt").hide(250);
    } 
    if(st >= 5400){
        $("#section02").hide(250);
        $("#cursor").css({
            borderColor:"#0e6eb8",
            backgroundColor:"#0e6eb8",
            color:"#fff"
        });
        $("#section03").css({
            top:0,
        });
        $("#section03 .txt").css({
             left:"50vw",
        });
        $("#section03 .about").css({
            left:"15vw",
        });
        $("#scroll").css({
            color:"#000",
        });
    } else if(st < 5400){
        $("#section02").show(250);
        $("#cursor").css({
            borderColor:"#fff",
        });
        $("#section03").css({
             top:"50%",
        });
        $("#section03 .txt").css({
            left:"30%",
        });
        $("#section03 .about").css({
           left:"30%",
        });
        $("#scroll").css({
            color:"#fff",
        });
    }

    // #section03 animation

    if(st >= 7200){
        $("#section03").fadeOut(300);
        $("#cursor").css({
            borderColor:"#fff",
            backgroundColor:"#fff",
            color:"#000",
        });
        $("#section04").fadeIn(300);
        $("#section04").css({
            transform:"rotate(0)",
        });
        $("#section04 .portfolioList li:nth-child(1)").css({
            left:0,
        });
        $("#section04 .portfolioList li:nth-child(2)").css({
            top:0,
        });
        $("#section04 .portfolioList li:nth-child(3)").css({
            bottom:0,
        });
        $("#section04 .portfolioList li:nth-child(4)").css({
            right:0,
        });
    } else if(st < 7200){
        $("#section03").fadeIn(300);
        $("#section04").fadeOut(300);
        $("#section04").css({
            transform:"rotate(90deg)",
        });
        $("#section04 .portfolioList li:nth-child(1)").css({
            left:"-1000px",
        });
        $("#section04 .portfolioList li:nth-child(2)").css({
            top:"-1000px",
        });
        $("#section04 .portfolioList li:nth-child(3)").css({
            bottom:"-1000px",
        });
        $("#section04 .portfolioList li:nth-child(4)").css({
            right:"-1000px",
        });
    }

    // #section04 animation

    if(st >= 8000){
        $("#main").hide(250);
        $("#footer").fadeIn(250);
        $(".background").addClass("last");
        $("#footer .contact").css({
            opacity:1,
        });
        
    } else if(st < 7800){
        $("#main").show(450);
        $("#footer").fadeOut(250);
        $(".background").removeClass("last");
        $("#footer .contact").css({
            opacity:0,
        });
    }
});

// scroll 애니메이션

setInterval(()=>{
    $("#scroll > p:nth-child(2)").html($(window).scrollTop());

},100);

// 스크롤 좌표 포인트를 나타냄


$("#skip_mainTitle").on("click",function(){
    $("html, body").animate({
        scrollTop: 1600,
    },500);
});

$("#skip_skill").on("click",function(){
    $("html, body").animate({
        scrollTop: 3000,
    },500);
});

$("#skip_about").on("click",function(){
    $("html, body").animate({
        scrollTop: 5400,
    },500);
});

$("#skip_portfolio").on("click",function(){
    $("html, body").animate({
        scrollTop: 7200,
    },500);
});

$("#skip_footer").on("click",function(){
    $("html, body").animate({
        scrollTop: 8000,
    },500);
});

// skip 버튼 // 클릭시 각섹션으로 이동


$("#section01 > .moveBtns .down").on("click",function(){
    $("html, body").animate({
        scrollTop: 4200,
    },100);
});

$("#section02 > .moveBtns .up").on("click",function(){
    $("html, body").animate({
        scrollTop: 1700,
    },100);
});
$("#section02 > .moveBtns .down").on("click",function(){
    $("html, body").animate({
        scrollTop: 5400,
    },100);
});

$("#section03 > .moveBtns .up").on("click",function(){
    $("html, body").animate({
        scrollTop: 4200,
    },100);
});
$("#section03 > .moveBtns .down").on("click",function(){
    $("html, body").animate({
        scrollTop: 7200,
    },100);
});

$("#section04 .moveBtns .up").on("click",function(){
    $("html, body").animate({
        scrollTop: 5400,
    },100);
});
$("#section04 .moveBtns .down").on("click",function(){
    $("html, body").animate({
        scrollTop: 8000,
    },100);
});

$("#footer > .moveBtns .up").on("click",function(){
    $("html, body").animate({
        scrollTop: 0,
    },100);
});

// 클릭시 한칸씩 내려가고 올라가는 버튼

$(window).on("mousemove",function(e){
    $("#cursor").css({
        top:e.pageY,
        left:e.pageX,
    });
});

$("a").on("mouseenter",function(){
    $("#cursor").css({
        opacity:1,
    });
});

$("a").on("mouseleave",function(){
    $("#cursor").css({
        opacity:0,
    });
});


$("#section04 .portfolioList > li:nth-child(2) .viewBtns > li").on("mouseenter",function(){
    $("#cursor").css({
        borderColor:"#0e6eb8",
        backgroundColor:"#0e6eb8",
        color:"#fff",
    });
});

$("#section04 .portfolioList > li:nth-child(2) .viewBtns > li").on("mouseleave",function(){
    $("#cursor").css({
        borderColor:"#fff",
        backgroundColor:"#fff",
        color:"#000",
    });
});

// 마우스 커서 이벤트

function mobile(){
    let deviceUA = navigator.userAgent.toLowerCase();

    if(deviceUA.indexOf("android") > -1){
        document.querySelector("#cursor").style.display = "none";
        return "android";
    }

    if(deviceUA.indexOf("iphone") > -1 || deviceUA.indexOf("ipad") > -1 ||deviceUA.indexOf("ipod") > -1){
        document.querySelector("#cursor").style.display = "none";
        return "ios";
    }
}

mobile();

// 모바일 접속시 
