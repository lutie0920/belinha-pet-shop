/* modal */
$(document).ready(function(){
    function showModal(){
        $('#modal-container').show();
        $('html body').css('overflow', 'hidden');
    }
    function closeModal(){
        $('#modal-container').hide();
        $("html,body").css({"overflow":"auto"});
    }
    setTimeout(showModal,3000);

    $('#close').click(function(){
        closeModal();
    })
})
/* modal */
/* nav */
$(function(){  
    $(".toggle").on("click",function(){
    if($(".menu").hasClass("active")){
        $(".menu").removeClass("active");
        $(this).find("a").html("<ion-icon name='menu-outline'></ion-icon>");
    } else{
        $(".menu").addClass("active");
        $(this).find("a").html("<ion-icon name='close-outline'></ion-icon>");
    }
    });
})
/* nav */