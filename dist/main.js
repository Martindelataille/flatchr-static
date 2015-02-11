(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"./src/js/main.js":[function(require,module,exports){
$(document).ready(function(){
    var target;

    $("#signup").submit(function(e){
        e.preventDefault();

        $.ajax({
             url: "http://www.flatchr.com/beta",
             type: "POST",
             data: $("#signup").serialize(),
            crossDomain: true,
             datatype: 'jsonp',
             success: function() { console.log("Success"); },
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

},{}]},{},["./src/js/main.js"])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvbWFpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XG4gICAgdmFyIHRhcmdldDtcblxuICAgICQoXCIjc2lnbnVwXCIpLnN1Ym1pdChmdW5jdGlvbihlKXtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICAgdXJsOiBcImh0dHA6Ly93d3cuZmxhdGNoci5jb20vYmV0YVwiLFxuICAgICAgICAgICAgIHR5cGU6IFwiUE9TVFwiLFxuICAgICAgICAgICAgIGRhdGE6ICQoXCIjc2lnbnVwXCIpLnNlcmlhbGl6ZSgpLFxuICAgICAgICAgICAgY3Jvc3NEb21haW46IHRydWUsXG4gICAgICAgICAgICAgZGF0YXR5cGU6ICdqc29ucCcsXG4gICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24oKSB7IGNvbnNvbGUubG9nKFwiU3VjY2Vzc1wiKTsgfSxcbiAgICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24oKSB7IGNvbnNvbGUubG9nKCdGYWlsZWQhJyk7IH1cbiAgICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgJChcIi5oZWFkbGluZV9ibG9jX3BpY3RvXCIpLmhvdmVyKGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgaWYodGFyZ2V0ID09IGUudGFyZ2V0KVxuICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgIHRhcmdldCA9IGUudGFyZ2V0O1xuICAgICAgICAkKCcuaGVhZGxpbmVfYmxvY19pbWFnZScpLmZhZGVPdXQoJ2Zhc3QnKTtcbiAgICAgICAgJCh0YXJnZXQpLnBhcmVudCgpLmZpbmQoJy5oZWFkbGluZV9ibG9jX2ltYWdlJykuZmFkZUluKCdmYXN0Jyk7XG4gICAgICAgICQoJy5oZWFkZXInKS5jc3MoJ2JhY2tncm91bmQnLCAnIycgKyAkKGUudGFyZ2V0KS5wYXJlbnQoKS5kYXRhKCdoZWFkZXInKSk7XG4gICAgfSlcbn0pO1xuIl19
