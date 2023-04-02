$(document).ready(function(){

    // navbar scroll

    $(window).scroll(function(){
        if(this.scrollY > 200){
            $('.navbar').addClass('sticky');
        }else{
            $('.navbar').removeClass('sticky');
        }

        // scroll buttom
        if(this.scrollY > 200){
            $('.scroll-up-btn').addClass('show');
        }else{
            $('.scroll-up-btn').removeClass('show');
        }
    });

    // slide up


    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop:0});
    });

    var typed = new Typed(".typing-1",{
        strings:[
            "Sudin.","Web Developer.","Freelancer.",
        ],
        typeSpeed: 75,
        backSpeed: 60,
        loop:true
    });

    var typed = new Typed(".typing-2",{
        strings:[
            "Developer.","Freelancer.",
        ],
        typeSpeed: 75,
        backSpeed: 60,
        loop:true
    });
});

// nav bar

var hamburger = document.querySelector(".hamb");
var navlist = document.querySelector(".nav-list");
var links = document.querySelector(".nav-list li");

hamburger.addEventListener("click", function(){
    this.classList.toggle("click");
    navlist.classList.toggle("open");
});