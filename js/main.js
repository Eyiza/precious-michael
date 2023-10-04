$(document).ready(function(){
    // typing animation
    var typed = new Typed(".typing", {
    strings: ["Developer", "Software Engineer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
    });

    // projects popup
    $('.image-popup').magnificPopup
    ({
        type: 'image',
        gallery: { enabled: true}
    });
})

$('#contactForm').submit(function (e) {
    e.preventDefault();
    var data = {
        name: $('#name').val(),
        email: $('#email').val(),
        subject: $('#subject').val(),
        feedback: $('#feedback').val(),
    }
    if (data.name != "" && data.email != "" && data.feedback != "") {
        feedback_message();
    }
    else {
        return false;
    }
});

function feedback_message() {
    $("#btnSubmitForm").html("<i class = 'fa fa-spinner fa-spin'></i> Sending...").css('margin', '10px');
    $("#btnSubmitForm").attr("disabled", "disabled");
    window.setTimeout(function () {
        swal("Message has been sent", "", "success");
        $("#btnSubmitForm").removeAttr("disabled");
        $("#btnSubmitForm").html("Leave Message");
        $("#name").val("");
        $("#email").val("");
        $("#subject").val("");
        $("#feedback").val("");
    }, 3000);
};

