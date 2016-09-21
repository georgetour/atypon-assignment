$(document).ready(function () {

    //Hide Starting data for large screens
    $('#references,#related,#details').hide();


    //A function that will show one element and hide the others
    //for the right navbar
    function showHide(whatToShow,whatTohide){
        $(whatToShow).show();
        $(whatTohide).hide();
    }


    $('#show-references').on('click',function () {
        if($(window).width()<=1024){
            $('#references,#related,#details').hide();
            $('.main-container').animate({"right":"120%"}, "slow");
            $('#logo').replaceWith($('<h1 class="h1-back">' + '&lt;Back' + '</h1>'));

            $('#figures').show();


        }
        else{
            showHide('#references',('#figures,#related,#details'));
            $('#show-references').addClass('active');
            $('#show-figures,#show-related,#show-details').removeClass('active');
        }

        console.log('click');
    });



});




