$(document).ready(function() {
    $("#loginform").submit(function(event) {
        event.preventDefault();
        ajaxPost();
    });

    function ajaxPost() {

        var formData = {
            email: $("#email").val(),
            upwd: $("#upwd").val()
        }
        $.ajax({
            type: "POST",
            contentType: "application/json",
            url: window.location + "login",
            data: JSON.stringify(formData),
            dataType: 'json',
            success: function(reqJson) {
                if (reqJson.ok == true) {
                    $("#loginform").removeClass("fail");
                    $("#loginform").addClass("success");
                    $("#errormsg").addClass("hidemessage");
                    $("#errormsg").removeClass("showmessage");
                } else {
                    $("#loginform").removeClass("success");
                    $("#loginform").addClass("fail");
                    $("#errormsg").removeClass("hidemessage");
                    $("#errormsg").addClass("showmessage");
                    $("#errormsg").text(j.errors);
                    console.log("ERROR: ", j.errors);
                }

                // $("#postResultDiv").html("<p>" + "Post Successfully! <br>" + "Email Address: " +
                //     formData.email + "</br>" + "Password: " + formData.upwd + "</br></p>");
            },

            // error: function(e) {
            //     alert("Error!");
            //     console.log("ERROR: ", e);
            // }
        });
        resetData();
    }

    function resetData() {
        $("#email").val("");
        $("#upwd").val("");
    }
});