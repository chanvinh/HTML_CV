// import { listClasses } from './helpers';
// const { listClasses } = require('./helpers');

//text running HOME
var typedJs_text = document.getElementById("typedJs");
if(typedJs_text) {
    let text = typedJs_text.getAttribute("data-typedJs")
    text = text.split(",")
    new Typed('#typedJs', {
        strings: text,
        loop: true,
        typeSpeed: 100,
        backSpeed: 70,
        backDelay: 2000
    });
}

//nav
function navClickMobile_PC() {
    if(isMobileWidth)
    {
        listClasses?.forEach((list) => {
            $(`.${list.name}`).click(() => {
                $("html,body").animate({scrollTop:list.scrollTop},list.delayAnimate)
            })
        })
        return;
    } 
    if(isMobileHorizationWidth)
    {
        listClasses.forEach((list) => {
            $(`.${list.name}`).click(function() {
                $("html,body").animate({scrollTop:list.scrollTop},list.delayAnimate)
            })
        })
        return;
    }
    if(isTabletWidth)
    {
        listClasses.forEach((list) => {
            $(`.${list.name}`).click(function() {
                $("html,body").animate({scrollTop:list.scrollTop},list.delayAnimate)
            })
        })
        return;
    }
    if(isIpadProWidth) {
        listClasses.forEach((list) => {
            $(`.${list.name}`).click(function() {
                $("html,body").animate({scrollTop:list.scrollTop},list.delayAnimate)
            })
        })
        return;
    }
    if(isPcWidth) {
        listClasses.forEach((list) => {
            $(`.${list.name}`).click(function() {
                $("html,body").animate({scrollTop:list.scrollTop},list.delayAnimate)
            })
        })
        return;
    }
    
}
navClickMobile_PC()


//main-nav
function scrollNavMainMobile_PC() {
    if(isMobileWidth)
    {
        $(window).scroll(function() {
            if($(this).scrollTop() > 175)
            {
                $(".a-2").addClass("active-color")
                $(".a-1").removeClass("active-color")
            }
            else {
                $(".a-2").removeClass("active-color")
                $(".a-1").addClass("active-color")
            }
        })
        $(window).scroll(function() {
            if($(this).scrollTop() > 1450)
            {
                $(".a-4").addClass("active-color")
                $(".a-2").removeClass("active-color")
            }
            else
            {
                $(".a-4").removeClass("active-color")
            }
        })
        $(window).scroll(function() {
            if($(this).scrollTop() > 2100)
            {
                $(".a-5").addClass("active-color")
                $(".a-4").removeClass("active-color")
            }
            else
            {
                $(".a-5").removeClass("active-color")
            }
        })
        return;
    }
    if(isMobileHorizationWidth) {
        $(window).scroll(function() {
            if($(this).scrollTop() > 175)
            {
                $(".a-2").addClass("active-color")
                $(".a-1").removeClass("active-color")
            }
            else {
                $(".a-2").removeClass("active-color")
                $(".a-1").addClass("active-color")
            }
        })
        $(window).scroll(function() {
            if($(this).scrollTop() > 1600)
            {
                $(".a-4").addClass("active-color")
                $(".a-2").removeClass("active-color")
            }
            else
            {
                $(".a-4").removeClass("active-color")
            }
        })
        $(window).scroll(function() {
            if($(this).scrollTop() > 2100)
            {
                $(".a-5").addClass("active-color")
                $(".a-4").removeClass("active-color")
            }
            else
            {
                $(".a-5").removeClass("active-color")
            }
        })
        return;
    }
    if(isTabletWidth) {
        $(window).scroll(function() {
            if($(this).scrollTop() > 175)
            {
                $(".a-2").addClass("active-color")
                $(".a-1").removeClass("active-color")
            }
            else {
                $(".a-2").removeClass("active-color")
                $(".a-1").addClass("active-color")
            }
        })
        $(window).scroll(function() {
            if($(this).scrollTop() > 1600)
            {
                $(".a-4").addClass("active-color")
                $(".a-2").removeClass("active-color")
            }
            else
            {
                $(".a-4").removeClass("active-color")
            }
        })
        $(window).scroll(function() {
            if($(this).scrollTop() > 2200)
            {
                $(".a-5").addClass("active-color")
                $(".a-4").removeClass("active-color")
            }
            else
            {
                $(".a-5").removeClass("active-color")
            }
        })
        return;
    }
    if(isIpadProWidth) {
        $(window).scroll(function() {
            if($(this).scrollTop() > 175)
            {
                $(".a-2").addClass("active-color")
                $(".a-1").removeClass("active-color")
            }
            else {
                $(".a-2").removeClass("active-color")
                $(".a-1").addClass("active-color")
            }
        })
        $(window).scroll(function() {
            if($(this).scrollTop() > 900)
            {
                $(".a-4").addClass("active-color")
                $(".a-2").removeClass("active-color")
            }
            else
            {
                $(".a-4").removeClass("active-color")
            }
        })
        $(window).scroll(function() {
            if($(this).scrollTop() > 1200)
            {
                $(".a-5").addClass("active-color")
                $(".a-4").removeClass("active-color")
            }
            else
            {
                $(".a-5").removeClass("active-color")
            }
        })
        return;
    }
    if(isPcWidth) {
        $(window).scroll(function() {
            if($(this).scrollTop() > 175)
            {
                $(".a-2").addClass("active-color")
                $(".a-1").removeClass("active-color")
            }
            else {
                $(".a-2").removeClass("active-color")
                $(".a-1").addClass("active-color")
            }
        })
        $(window).scroll(function() {
            if($(this).scrollTop() > 700)
            {
                $(".a-4").addClass("active-color")
                $(".a-2").removeClass("active-color")
            }
            else
            {
                $(".a-4").removeClass("active-color")
            }
        })
        $(window).scroll(function() {
            if($(this).scrollTop() > 1200)
            {
                $(".a-5").addClass("active-color")
                $(".a-4").removeClass("active-color")
            }
            else
            {
                $(".a-5").removeClass("active-color")
            }
        })
        return;
    }
}
scrollNavMainMobile_PC()

//main-1
function scrollMain1() {
    $(window).scroll(function() {
        if($(this).scrollTop() > 50)
        {
            $(".main-1-About").addClass("main-1-About-opa-tra")
        }
        else {
            $(".main-1-About").removeClass("main-1-About-opa-tra")
        }
    })
    
    $(window).scroll(function() {
        if($(this).scrollTop() > 200)
        {
            $(".main-1-AboutMe-img").addClass("main-1-AboutMe-opa-tra")
            $(".main-1-AboutMe-text").addClass("main-1-AboutMe-opa-tra")
        }
        else {
            $(".main-1-AboutMe-img").removeClass("main-1-AboutMe-opa-tra")
            $(".main-1-AboutMe-text").removeClass("main-1-AboutMe-opa-tra")
        }
    })
}
scrollMain1()


//main-3
function backgroundSkill() {
    var skill_1 = document.getElementById("skillB-1");
    if(skill_1) {
        $(window).scroll(function() {
            let number_skill = skill_1.getAttribute("data-skill");
            if($(this).scrollTop() > 800)
            {            
                skill_1.style.width = `${number_skill}`
            }
        })
    }
    var skill_2 = document.getElementById("skillB-2");
    if(skill_2) {
        $(window).scroll(function() {
            let number_skill = skill_2.getAttribute("data-skill");
            if($(this).scrollTop() > 800)
            {            
                skill_2.style.width = `${number_skill}`
            }
        })
    }
    var skill_3 = document.getElementById("skillB-3");
    if(skill_3) {
        $(window).scroll(function() {
            let number_skill = skill_3.getAttribute("data-skill");
            if($(this).scrollTop() > 800)
            {            
                skill_3.style.width = `${number_skill}`
            }
        })
    }
    var skill_4 = document.getElementById("skillB-4");
    if(skill_4) {
        $(window).scroll(function() {
            let number_skill = skill_4.getAttribute("data-skill");
            if($(this).scrollTop() > 800)
            {            
                skill_4.style.width = `${number_skill}`
            }
        })
    }
    var skill_5 = document.getElementById("skillB-5");
    if(skill_5) {
        $(window).scroll(function() {
            let number_skill = skill_5.getAttribute("data-skill");
            if($(this).scrollTop() > 800)
            {            
                skill_5.style.width = `${number_skill}`
            }
        })
    }
    var skill_6 = document.getElementById("skillB-6");
    if(skill_6) {
        $(window).scroll(function() {
            let number_skill = skill_6.getAttribute("data-skill");
            if($(this).scrollTop() > 800)
            {            
                skill_6.style.width = `${number_skill}`
            }
        })
    }
}
function scrollMain3() {
    $(window).scroll(function() {
        if($(this).scrollTop() > 600)
        {
            $(".main-3-skillsName").addClass("main-3-skillsName-opa-tra")
        }
        else {
            $(".main-3-skillsName").removeClass("main-3-skillsName-opa-tra")
        }
    })
    $(window).scroll(function() {
        if($(this).scrollTop() > 700)
        {
            $(".main-3-skills").addClass("main-3-skills-opa-tra")
        }
        else {
            $(".main-3-skills").removeClass("main-3-skills-opa-tra")
        }
    })
}
backgroundSkill();
scrollMain3();


//main-4
function scrollMain4() {
    $(window).scroll(function() {
        if($(this).scrollTop() > 1000)
        {
            $(".main-4-Education").addClass("main-4-Education-opa-tra")
        }
        else {
            $(".main-4-Education").removeClass("main-4-Education-opa-tra")
        }
    })
    $(window).scroll(function() {
        if($(this).scrollTop() > 1200)
        {
            $(".main-4-mEduca").addClass("main-4-mEduca-op-tra")
        }
        else {
            $(".main-4-mEduca").removeClass("main-4-mEduca-op-tra")
        }
    })
}
scrollMain4()

//toggle_button_click_top
$(window).scroll(function() {
    if($(this).scrollTop() > 300)
    {
        $(".toggle_button_top").addClass("toggle_button_top_tra")
    }
    else
    {
        $(".toggle_button_top").removeClass("toggle_button_top_tra")
    }
})


$('.toggle_button_click_top').click(function () {
    $('html, body').animate({scrollTop: 0}, 1000);
});

//toggle_button_nav_mobile
function clickToggleButton() {
    $(".toggle_button").click(function() {
        $(".nav").toggleClass("nav_toggle")
        $(".toggle_button_click").toggleClass("toggle_button_click_test")
        $("body").toggleClass("body_overflow")
    })
}
clickToggleButton()

// window.addEventListener('scroll',function() {
//     if($(this).scrollTop() > 100) {
//         alert("Bạn đã scrollTop > 100px")
//     }
// })