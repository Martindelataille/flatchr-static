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

    $(".headline_bloc").hover(function(e) {
        if(target == e.target)
            return;

        target = e.target;
        $('.headline_bloc_image').hide();
        $(target).find('.headline_bloc_image').show();
        $(target).parent('.headline_bloc').find('.headline_bloc_image').show();
        $('.header').css('background', '#' + $(e.target).parent().data('header'));
    })
});

},{}]},{},["./src/js/main.js"])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvbWFpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XG4gICAgdmFyIHRhcmdldDtcblxuICAgICQoJy5oZWFkbGluZV9ibG9jX2ltYWdlJykuaGlkZSgpO1xuICAgICQoJy5oZWFkbGluZV9ibG9jX2ltYWdlLm9yZ2FuaXplJykuZmFkZUluKCk7XG5cbiAgICAkKFwiI3NpZ251cFwiKS5zdWJtaXQoZnVuY3Rpb24oZSl7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICB2YXIgY2hlY2sgPXRydWU7XG4gICAgICAgICQoJ2lucHV0W3R5cGU9dGV4dF0saW5wdXRbdHlwZT10ZWxdLGlucHV0W3R5cGU9ZW1haWxdJykuZWFjaChmdW5jdGlvbigpe1xuICAgICAgICAgICAgdmFyIHRleHRfdmFsdWU9JCh0aGlzKS52YWwoKTtcbiAgICAgICAgICAgIGlmKHRleHRfdmFsdWUgPT0nJykge1xuICAgICAgICAgICAgICAgICQodGhpcykuY3NzKCdib3JkZXInLCAnMnB4IHNvbGlkICNDRDZBNkQnKTtcbiAgICAgICAgICAgICAgICBjaGVjayA9IGZhbHNlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmNzcygnYm9yZGVyJywgJycpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBpZighY2hlY2spXG4gICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgICB1cmw6IFwiaHR0cDovL3d3dy5mbGF0Y2hyLmNvbS9iZXRhXCIsXG4gICAgICAgICAgICAgdHlwZTogXCJQT1NUXCIsXG4gICAgICAgICAgICAgZGF0YTogJChcIiNzaWdudXBcIikuc2VyaWFsaXplKCksXG4gICAgICAgICAgICBjcm9zc0RvbWFpbjogdHJ1ZSxcbiAgICAgICAgICAgICBkYXRhdHlwZTogJ2pzb25wJyxcbiAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAkKFwiI3NpZ251cFwiKS5oaWRlKCk7XG4gICAgICAgICAgICAgICAgJCgnLndyYXBwZXJfdGV4dCcpLmhpZGUoKTtcbiAgICAgICAgICAgICAgICAkKFwiLndyYXBwZXJfdGl0bGVcIilcbiAgICAgICAgICAgICAgICAgICAgLmNzcygncGFkZGluZy1ib3R0b20nLCAnNDBweCcpXG4gICAgICAgICAgICAgICAgICAgIC5odG1sKCdNZXJjaSAnICsgJChcIiNmaXJzdG5hbWVcIikudmFsKCkgKyAnLCBub3VzIHZvdXMgc291aGFpdG9ucyBsYSBiaWVudmVudWUgIScpO1xuICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uKCkgeyBjb25zb2xlLmxvZygnRmFpbGVkIScpOyB9XG4gICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgICQoXCIuaGVhZGxpbmVfYmxvY1wiKS5ob3ZlcihmdW5jdGlvbihlKSB7XG4gICAgICAgIGlmKHRhcmdldCA9PSBlLnRhcmdldClcbiAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICB0YXJnZXQgPSBlLnRhcmdldDtcbiAgICAgICAgJCgnLmhlYWRsaW5lX2Jsb2NfaW1hZ2UnKS5oaWRlKCk7XG4gICAgICAgICQodGFyZ2V0KS5maW5kKCcuaGVhZGxpbmVfYmxvY19pbWFnZScpLnNob3coKTtcbiAgICAgICAgJCh0YXJnZXQpLnBhcmVudCgnLmhlYWRsaW5lX2Jsb2MnKS5maW5kKCcuaGVhZGxpbmVfYmxvY19pbWFnZScpLnNob3coKTtcbiAgICAgICAgJCgnLmhlYWRlcicpLmNzcygnYmFja2dyb3VuZCcsICcjJyArICQoZS50YXJnZXQpLnBhcmVudCgpLmRhdGEoJ2hlYWRlcicpKTtcbiAgICB9KVxufSk7XG4iXX0=
