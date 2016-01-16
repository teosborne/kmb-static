$(document).ready(function() {

    $('#loginform').submit(function() {
        $.ajax({
            type: "POST",
            url: '/login',
            data: {
                password: $("#password").val()
            },
            success: function(data)
            {
                if (data == 'success') {
                    get_details();

                    $('html, body').animate({
                        scrollTop: $("#placeholder").offset().top
                    }, 1000);

                    $('#loginpanel').hide();
                }
                else {
                    alert(data)
                }
            }
        });
        return false;
    });

});

function get_details() {
    $.ajax({
        type: "GET",
        url: '/details',
        success: function(data)
        {
            $('#placeholder').html(data);

        }
    });
};
