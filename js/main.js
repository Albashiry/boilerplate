/*document.ready shortcut*/
$(function (){
    'use strict';
    $(window).scroll(function (){
        let navbar = $('.navbar');
        //console.log(navbar.height());
        //console.log($(window).scrollTop());
        if($(window).scrollTop() >= navbar.height()){
            if(!(navbar.hasClass('scrolled'))){ navbar.addClass('scrolled'); }
        }
        else{
            navbar.removeClass('scrolled');
        }
    });

    //Deal with Tabs
    $('.tab-switch li').click(function (){
        $(this).addClass('selected').siblings().removeClass('selected');
    });

    $('.tabs li').click(function (){
        //console.log($(this).data('class'));
        $('.tabs .content > div').hide();//hide all divs
        $('.'+$(this).data('class')).show();
    });
});