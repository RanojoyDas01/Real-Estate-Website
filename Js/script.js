$(document).ready(function(){
    $("#myform").validate({
        rules:{

            email:{
                required:true,
                email: true
            }
        },

        messages:{

            email: {
                required:"Please Enter your email Id here",
                email:"Please enter a valid email id"
            }

        }
    })
})