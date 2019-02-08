$.fn.topAlertjs = function (arguments) {

    var $element = $(this);

    var $topalertjs = $(`<div class="top-alert-container" role="alert"></div>`);

    $(".top-alert-container").remove();

    var defaults = {
        type: "info",
        message: "Texto de prueba Top Alertjs",
        duration: 5,
        speed: 500,
        close: false,
        easing: "easeOutElastic",
        easingclose: "easeInElastic",
        callback: function () { }
    };

    var attributes = $.extend(defaults, arguments);

    function raise(runCallback, identifier) {
        $topalertjs.fadeOut(100);
        $topalertjs.slideUp(attributes.speed, function () {
            if (runCallback) {
                attributes.callback(identifier !== null ? $element.data(identifier) : "");
            }
        });
    }

    attributes.type = attributes.type.toLowerCase();

    var validTypes = ["success", "error", "warning", "info"];
    if ($.inArray(attributes.type, validTypes) === -1) {
        attributes.type = "info";
    }

    $topalertjs.addClass(attributes.type);

    var $message = $("<span class='top-alert-message'></span>");
    var icon = 'fa-info-circle';
    switch (attributes.type) {
        case 'warning':
            icon = 'fa-exclamation-triangle';
            break;
        case 'error':
            icon = 'fa-exclamation-circle';
            break;
        case 'success':
            icon = 'fa-check-circle';
            break;
    }

    $message.html(`<i class="fas ${icon}"></i> ${attributes.message}`);

    $topalertjs.append($message);

    if (attributes.close) {
        var $close = $("<span class='top-alert-close'></span>");
        
        $topalertjs.append($close);
    }

    $element.append($topalertjs);

    $topalertjs.slideDown(attributes.speed, attributes.easing);

    if (attributes.close && !arguments.duration) {

        $close.click(function () {
            $topalertjs.slideUp(attributes.speed, attributes.easingclose, function () {
                raise(true, null);
            });
        });

    } else if (attributes.close && arguments.duration) {

        var slideTimer = setTimeout(function () {
            $topalertjs.slideUp(attributes.speed, attributes.easingclose, function () {
                raise(true, null);
            });
        }, attributes.duration * 1000);

        $close.click(function () {
            clearTimeout(slideTimer);
            $topalertjs.slideUp(attributes.speed, attributes.easingclose, function () {
                raise(true, null);
            });
        });

    } else {
        $topalertjs
            .delay(attributes.duration * 1000)
            .slideUp(attributes.speed, attributes.easingclose, function () {
                raise(true, null);
            });
    }
}