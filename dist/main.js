(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"./src/js/main.js":[function(require,module,exports){
$(document).ready(function(){
    var target;

    $('.headline_bloc_image').hide();
    $('.headline_bloc_image.organize').fadeIn();

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
        $('.headline_bloc_image').hide();
        $(target).parent().find('.headline_bloc_image').show();
        $('.header').css('background', '#' + $(e.target).parent().data('header'));
    })
});

},{}]},{},["./src/js/main.js"])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvbWFpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xuICAgIHZhciB0YXJnZXQ7XG5cbiAgICAkKCcuaGVhZGxpbmVfYmxvY19pbWFnZScpLmhpZGUoKTtcbiAgICAkKCcuaGVhZGxpbmVfYmxvY19pbWFnZS5vcmdhbml6ZScpLmZhZGVJbigpO1xuXG4gICAgJChcIiNzaWdudXBcIikuc3VibWl0KGZ1bmN0aW9uKGUpe1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgdmFyIGNoZWNrID10cnVlO1xuICAgICAgICAkKCdpbnB1dFt0eXBlPXRleHRdLGlucHV0W3R5cGU9dGVsXSxpbnB1dFt0eXBlPWVtYWlsXScpLmVhY2goZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIHZhciB0ZXh0X3ZhbHVlPSQodGhpcykudmFsKCk7XG4gICAgICAgICAgICBpZih0ZXh0X3ZhbHVlID09JycpIHtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmNzcygnYm9yZGVyJywgJzJweCBzb2xpZCAjQ0Q2QTZEJyk7XG4gICAgICAgICAgICAgICAgY2hlY2sgPSBmYWxzZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5jc3MoJ2JvcmRlcicsICcnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYoIWNoZWNrKVxuICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICAgdXJsOiBcImh0dHA6Ly93d3cuZmxhdGNoci5jb20vYmV0YVwiLFxuICAgICAgICAgICAgIHR5cGU6IFwiUE9TVFwiLFxuICAgICAgICAgICAgIGRhdGE6ICQoXCIjc2lnbnVwXCIpLnNlcmlhbGl6ZSgpLFxuICAgICAgICAgICAgY3Jvc3NEb21haW46IHRydWUsXG4gICAgICAgICAgICAgZGF0YXR5cGU6ICdqc29ucCcsXG4gICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgJChcIiNzaWdudXBcIikuaGlkZSgpO1xuICAgICAgICAgICAgICAgICQoJy53cmFwcGVyX3RleHQnKS5oaWRlKCk7XG4gICAgICAgICAgICAgICAgJChcIi53cmFwcGVyX3RpdGxlXCIpXG4gICAgICAgICAgICAgICAgICAgIC5jc3MoJ3BhZGRpbmctYm90dG9tJywgJzQwcHgnKVxuICAgICAgICAgICAgICAgICAgICAuaHRtbCgnTWVyY2kgJyArICQoXCIjZmlyc3RuYW1lXCIpLnZhbCgpICsgJywgbm91cyB2b3VzIHNvdWhhaXRvbnMgbGEgYmllbnZlbnVlICEnKTtcbiAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbigpIHsgY29uc29sZS5sb2coJ0ZhaWxlZCEnKTsgfVxuICAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICAkKFwiLmhlYWRsaW5lX2Jsb2NfcGljdG9cIikuaG92ZXIoZnVuY3Rpb24oZSkge1xuICAgICAgICBpZih0YXJnZXQgPT0gZS50YXJnZXQpXG4gICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgdGFyZ2V0ID0gZS50YXJnZXQ7XG4gICAgICAgICQoJy5oZWFkbGluZV9ibG9jX2ltYWdlJykuaGlkZSgpO1xuICAgICAgICAkKHRhcmdldCkucGFyZW50KCkuZmluZCgnLmhlYWRsaW5lX2Jsb2NfaW1hZ2UnKS5zaG93KCk7XG4gICAgICAgICQoJy5oZWFkZXInKS5jc3MoJ2JhY2tncm91bmQnLCAnIycgKyAkKGUudGFyZ2V0KS5wYXJlbnQoKS5kYXRhKCdoZWFkZXInKSk7XG4gICAgfSlcbn0pO1xuIl19
