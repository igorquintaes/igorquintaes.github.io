$(document).ready(function () {
    email();
});

addEvents:function email() {
    $('#btnContactUs').on("click", function () {
        
		var lang = document.documentElement.lang;
		
        var name = $("#name").val();
        var email = $("#email").val();
        var subject = $("#subject option:selected").text();
        var message = $("#message").val();
        
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
                dataType: "json",
				success: function(data) {
					if (lang == "pt-BR")
					{
						$('.alert-header h3').text('Sucesso!');
						$('.alert-message p').text('E-mail enviado com sucesso!');
					}
					else
					{
						$('.alert-header h3').text('Success!');
						$('.alert-message p').text('E-mail sent successfully!');
					}

				},
				error: function(data) {
					if (lang == "pt-BR")
					{
						$('.alert-header h3').text('Atenção!');
						$('.alert-message p').text('Ocorreu um erro ao enviar o e-mail. Tente novamente mais tarde.');
					}
					else
					{
						$('.alert-header h3').text('Warning!');
						$('.alert-message p').text('An error occurred while tried to send the email. Please, try again later');
					}
				},
				complete: function(data) {
					$('.alert-expander').fadeIn(400);
					$('.alert-fade').fadeIn();
				}
			});
        }
		
		else
		{
			if (lang == "pt-BR")
			{
				$('.alert-header h3').text('Atenção!');
				$('.alert-message p').text('Verifique os campos antes de enviar o e-mail!');
			}
			else
			{
				$('.alert-header h3').text('Warning!');
				$('.alert-message p').text('Check all fields before send the e-mail!');
			}
			$('.alert-expander').fadeIn(400);
			$('.alert-fade').fadeIn();
		}
		
		event.preventDefault();
    });	
    
    $('.alert-close').click(function(){
        $('.alert-expander').fadeOut(300);
        $('.alert-fade').fadeOut();
    });
}
