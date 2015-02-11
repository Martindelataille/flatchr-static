$(document).ready(function(){
    var target;

    $("#signup").submit(function(e){
        e.preventDefault();

        var check =true;
        $('input[type=text],input[type=tel],input[type=email]').each(function(){
            var text_value=$(this).val();
            if(text_value =='') {
                $(this).css('border', '2px solid #CD6A6D');
                check = false;
            } else {
                $(this).css('border', '');
            }
        });

        if(!check)
            return;

        $.ajax({
             url: "http://www.flatchr.com/beta",
             type: "POST",
             data: $("#signup").serialize(),
            crossDomain: true,
             datatype: 'jsonp',
             success: function() {
                $("#signup").hide();
                $('.wrapper_text').hide();
                $(".wrapper_title")
                    .css('padding-bottom', '40px')
                    .html('Merci ' + $("#firstname").val() + ', nous vous souhaitons la bienvenue !');
             },
             error: function() { console.log('Failed!'); }
         });
    });

    $(".headline_bloc_picto").hover(function(e) {
        if(target == e.target)
            return;

        target = e.target;
        $('.headline_bloc_image').fadeOut('fast');
        $(target).parent().find('.headline_bloc_image').fadeIn('fast');
        $('.header').css('background', '#' + $(e.target).parent().data('header'));
    })
});
