$(document).ready(function () {



    //Hide Starting data for large screens
    $('#references,#related,#details').hide();


    //A function that will show one element and hide the others
    //for the right navbar for large screens
    function showHide(whatToShow,whatTohide){
        $(whatToShow).show();
        $(whatTohide).hide();
    }

    /*<--------We are clicking the icon at right nav--->*/

    //if we have small screens then the main page will leave
    //and it will be replaced by the one clicked
    $('#show-figures').on('click',function () {
        if($(window).width()<=1024){
            $('#references,#related,#details').hide();
            $('.main-container').animate({"right":"120%"}, "slow");
           $('.top-bar').css('display','none');
            $('#figures').show();
        }
    //For large screens we just change the right column content
        else{
            showHide('#figures',('#references,#related,#details'));
            $('#show-figures').addClass('active');
            $('#show-references,#show-related,#show-details').removeClass('active');
        }
    });

    $('#show-references').on('click',function () {
        if($(window).width()<=1024){
            $('#figures,#related,#details').hide();
            $('.main-container').animate({"right":"120%"}, "slow");
            $('#references').show();
        }
        else{
            showHide('#references',('#figures,#related,#details'));
            $('#show-references').addClass('active');
            $('#show-figures,#show-related,#show-details').removeClass('active');
        }
    });

    $('#show-related').on('click',function () {
        if($(window).width()<=1024){
            $('#references,#related,#details').hide();
            $('.main-container').animate({"right":"120%"}, "slow");
            $('#related').show();
        }
        else{
            showHide('#related',('#figures,#references,#details'));
            $('#show-related').addClass('active');
            $('#show-figures,#show-references,#show-details').removeClass('active');
        }
    });

    $('#show-details').on('click',function () {
        if($(window).width()<=1024){
            $('#figures,#related,#references').hide();
            $('.main-container').hide(500);
            $('#details').show(500);
        }
        else{
            showHide('#details',('#figures,#related,#references'));
            $('#show-details').addClass('active');
            $('#show-figures,#show-related,#show-references').removeClass('active');
        }
    });
    /*<--------End clicking the icons at right nav--->*/


    $('#backToMain').on('click',function () {
        /*
            $('#figures,#references,#related,#details').hide();
            $('.main-container').animate({"left": "120%"}, "slow");
            $('#logo').replaceWith($(replaceLogo));
            $('#figures').show();
            */
            console.log('yahoo');
        alert('Red');

    });
});




