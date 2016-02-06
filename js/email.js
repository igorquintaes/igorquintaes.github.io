$(document).ready(function () {
    email();
});

addEvents:function email() {
    $('#btnContactUs').on("click", function () {
        
        var name = $("$name").val();
        var email = $("email").val();
        var subject = $("subject").val();
        var message = $("message").val();
        
        if (name != null && name.length > 0 &&
            email != null && email.length > 0 &&
            subject != null && subject.length > 0 &&
            message != null && message.length > 0)
        {
            var inlineMessage = "Nome: " + name + "</br>E-mail: " + email + "</br>Assunto: " + subject + "</br></br>Mensagem: " + message;
            
            $.ajax({
                url: "//formspree.io/igor.quintaes@fatec.sp.gov.br", 
                method: "POST",
                data: { message: inlineMessage },
                dataType: "json"
            });
        }
    });
}
