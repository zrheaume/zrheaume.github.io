$(document).ready(function(){
    // $('.parallax').parallax();
    
    changeFocus("code-page");

    $("#nav-code").on("click", function(){
        changeFocus("code-page");
    })
    $("#nav-music").on("click", function(){
        changeFocus("music-page");
    })
    $("#nav-design").on("click", function(){
        changeFocus("design-page");
    })
    $("#nav-contact").on("click", function(){
        changeFocus("contact-page");
    })
})

let changeFocus = ( focusOnID )=>{
    $(".header-nav-target").css("display","none");
    $("#"+focusOnID).css("display","block");
    
    switch (focusOnID) {
        case "code-page":
            $("#parallax-img").attr("src","assets/images/headers/all-your-base-are-belong-to-us.jpg");
            break;
        case "music-page":
            $("#parallax-img").attr("src","assets/images/headers/qtq80-OE10Wz.jpg");
            break;
        case "design-page":
            $("#parallax-img").attr("src","assets/images/headers/rationale-latitudex-0.jpg");
            break;
        case "contact-page":
            $("#contact-submit").off();
            $("#contact-submit").on("click", function(){
                $(".contactMe").val("");
            });
            $("#parallax-img").attr("src","assets/images/headers/findMe.jpeg");
            break;
    }
}