(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"./src/js/main.js":[function(require,module,exports){
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
             url: "http://www.vk-website.fr/beta",
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

    setInterval(function() {
        console.log('reload')
        var timestamp = new Date().getTime();
        $('.organize').css('background', 'url("/images/screen.gif'+'?'+timestamp+'"") 50% 50% no-repeat');
    }, 6000);
});

},{}]},{},["./src/js/main.js"])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvbWFpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcbiAgICB2YXIgdGFyZ2V0O1xuXG4gICAgJChcIiNzaWdudXBcIikuc3VibWl0KGZ1bmN0aW9uKGUpe1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgdmFyIGNoZWNrID10cnVlO1xuICAgICAgICAkKCdpbnB1dFt0eXBlPXRleHRdLGlucHV0W3R5cGU9dGVsXSxpbnB1dFt0eXBlPWVtYWlsXScpLmVhY2goZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIHZhciB0ZXh0X3ZhbHVlPSQodGhpcykudmFsKCk7XG4gICAgICAgICAgICBpZih0ZXh0X3ZhbHVlID09JycpIHtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmNzcygnYm9yZGVyJywgJzJweCBzb2xpZCAjQ0Q2QTZEJyk7XG4gICAgICAgICAgICAgICAgY2hlY2sgPSBmYWxzZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5jc3MoJ2JvcmRlcicsICcnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYoIWNoZWNrKVxuICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICAgdXJsOiBcImh0dHA6Ly93d3cudmstd2Vic2l0ZS5mci9iZXRhXCIsXG4gICAgICAgICAgICAgdHlwZTogXCJQT1NUXCIsXG4gICAgICAgICAgICAgZGF0YTogJChcIiNzaWdudXBcIikuc2VyaWFsaXplKCksXG4gICAgICAgICAgICBjcm9zc0RvbWFpbjogdHJ1ZSxcbiAgICAgICAgICAgICBkYXRhdHlwZTogJ2pzb25wJyxcbiAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAkKFwiI3NpZ251cFwiKS5oaWRlKCk7XG4gICAgICAgICAgICAgICAgJCgnLndyYXBwZXJfdGV4dCcpLmhpZGUoKTtcbiAgICAgICAgICAgICAgICAkKFwiLndyYXBwZXJfdGl0bGVcIilcbiAgICAgICAgICAgICAgICAgICAgLmNzcygncGFkZGluZy1ib3R0b20nLCAnNDBweCcpXG4gICAgICAgICAgICAgICAgICAgIC5odG1sKCdNZXJjaSAnICsgJChcIiNmaXJzdG5hbWVcIikudmFsKCkgKyAnLCBub3VzIHZvdXMgc291aGFpdG9ucyBsYSBiaWVudmVudWUgIScpO1xuICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uKCkgeyBjb25zb2xlLmxvZygnRmFpbGVkIScpOyB9XG4gICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zb2xlLmxvZygncmVsb2FkJylcbiAgICAgICAgdmFyIHRpbWVzdGFtcCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICAkKCcub3JnYW5pemUnKS5jc3MoJ2JhY2tncm91bmQnLCAndXJsKFwiL2ltYWdlcy9zY3JlZW4uZ2lmJysnPycrdGltZXN0YW1wKydcIlwiKSA1MCUgNTAlIG5vLXJlcGVhdCcpO1xuICAgIH0sIDYwMDApO1xufSk7XG4iXX0=
