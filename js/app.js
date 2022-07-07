
$(document).ready(function () {
    // console.log("hi");

    // Start Header 
    //  Start nav bar 

    // for buger 
    $(".navbuttons").click(function () {
        $(this).toggleClass("crossxs");
    });

    // for nav 
    $(window).scroll(function () {
        let getscrolltop = $(this).scrollTop();
        console.log(getscrolltop);

        if (getscrolltop >= 200) {
            $(".navbar").addClass("navmenus");
        } else {
            $(".navbar").removeClass("navmenus");
        }
    });

    //  End nav bar 

    // End Header


     // Start properties

     $(".propertylists").click(function(){

        // for acitve items
        // $(this).addClass("activeitems");
        // $(this).siblings().removeClass("activeitems");
        $(this).addClass("activeitems").siblings().removeClass("activeitems");


        // for filter
        let getattvalue = $(this).attr("data-filter");
        console.log(getattvalue);

        if(getattvalue === "all"){
            $(".filters").show("slide",500);
        }else{
            $(".filters").hide("slide",500)
            
            $(".filters").not("."+getattvalue).hide("slide",500);

            $(".filters").filter("."+getattvalue).show("slide",500);
        }

    });



    // img overlay or lightbox2 
    lightbox.option({
    'showImageNumberLabel': false
    });


    // End properties



    // Start Adv 
    $(window).scroll(function(){
        let getscrolltop = $(this).scrollTop();
        // console.log(getscrolltop);

        if(getscrolltop >= 1000){
            $(".advimg").addClass("fromlefts");
            $(".advtext").addClass("fromrights")
        }else{
            $(".advimg").removeClass("fromlefts");
            $(".advtext").removeClass("fromrights")
        }
    });
    // End Adv 

    
});