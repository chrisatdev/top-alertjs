# Top Alertjs

* * *

## Requirements

*   Bootstrap 4.2.1
*   JQuery 3.3.1
*   JQuery UI 1.12.1
*   Fontawesome 5.7.1 (Optional)

* * *

## Use mode

`$(selector).topAlertjs(options);`

* * *

## Default parameters

<pre>
var defaults = {
    type: "info",
    message: "This is a message of Top Alertjs!",
    duration: 5,
    speed: 500,
    close: false,
    easing: "easeOutElastic",
    easingclose: "easeInElastic",
    yesBtnText: "Yes",
    noBtnText: "No",
    callback: function () { }
}; 
</pre>

* * *

## Examples

*   [Default]

    <pre>
    $('body').topAlertjs(); 
    </pre>

*   [Info]

    <pre>
    $('body').topAlertjs({
        type: 'info',
        message: 'Boton Info Top Alertjs',
        close: true,
        duration: 5
    }); 
    </pre>

*   [Warning]

    <pre>
    $('body').topAlertjs({
        type: 'warning',
        message: 'Boton Warning Top Alertjs',
        close: true,
        duration: 5
    }); 
    </pre>

*   [Error]

    <pre>
    $('body').topAlertjs({
        type: 'error',
        message: 'Boton Error Top Alertjs',
        close: true,
        duration: 5
    }); 
    </pre>

*   [Success]

    <pre>
    $('body').topAlertjs({
        type: 'success',
        message: 'Boton Success Top Alertjs',
        close: true,
        duration: 5
    }); 
    </pre>

*   [Confirm]

    <pre>
    $('body').topAlertjs({
        type: 'confirm',
        message: 'Boton confirm Top Alertjs',
        callback: function ( confirm ) { if( confirm ) alert( 'Ok' ); }
    }); 
    </pre>

* * *