(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.nav-bar').addClass('sticky-top');
        } else {
            $('.nav-bar').removeClass('sticky-top');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Header carousel
    $(".header-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        items: 1,
        dots: true,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 24,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            992:{
                items:2
            }
        }
    });
    
})(jQuery);
// =================================================---------------------=========================================================
//  js coare for other funchons
function appoinmentfoem(){
    document.getElementById("appoinmentoder").style.display="block";
    getdate();
}
function closeform(){
    document.getElementById("appoinmentoder").style.display="none";
}

function getdate(){
    var date = new Date(); 
    document.getElementById("todate").value = date;
}

var form = document.getElementById('sheetdb-form');
  form.addEventListener("submit", e => {
    e.preventDefault();
    fetch(form.action, {
        method : "POST",
        body: new FormData(document.getElementById("sheetdb-form")),
    }).then(
        response => response.json()
    ).then((html) => {
        alertbox.render({
            alertIcon: 'success',
            title: 'Thank You!',
            message: 'Your appointment has been booked successfully.',
            btnTitle: 'Ok',
            border:true
        });
        form.reset()
        closeform();
    });
});

function generateOTP() {
    const otpLength = 6;
    let otp = '';
    for (let i = 0; i < otpLength; i++) {
        const randomDigit = Math.floor(Math.random() * 10);
        otp += randomDigit;
    }
}


function adminlogin(){
    var user = document.getElementById("loginid").value;
    var pass = document.getElementById("loginpassword").value;

    if(user == "guru@gmail.com" && pass == "1234"){
        // alert("okok")
        alertbox.render({
            alertIcon: 'success',
            title: 'Login Successfull',
            message: 'You are successfully logged in.',
            btnTitle: 'Ok',
            border:true
        });
        document.getElementById("dashboardlink").style.display="block";
        document.getElementById("vccoad").style.display="block";

        const otpLength = 6;
        let otp = '';
        for (let i = 0; i < otpLength; i++) {
            const randomDigit = Math.floor(Math.random() * 10);
            otp += randomDigit;
        }
        document.getElementById("vcotp").innerText = otp;
        
    }else{
        alertbox.render({
            alertIcon: 'error',
            title: 'Thank You!',
            message: 'Invalid User ID or Password',
            btnTitle: 'Ok',
            border:true
        });
    }
}