var count = 1; 

$(document).ready(function() {
    $(document).keypress(function(e) {
        if (e.which == 13){
            console.log($("#inputAdd").val());
            if($("#inputAdd").val() != ""){
                $('#button').click();
            }
        }
    });

    $('#button').click(function() {
        var textAdd = $('#inputAdd').val();
        $('#inputAdd').val('');

        $('#div').append('<div id = "divinha' + count + '"><input id = "check" type="checkbox"> ' + textAdd + '<img id = "lixo" src="imagens/lixeira.png" alt="" height="20px">' + '</div>');
        count++; 
    });
    $(document).on("change", "#check", function() {
        $(this).parent().toggleClass('marcar');
    });
    $(document).on("click", "#incompleto",function(){
        $("#div").find('*').each(function(){
            var classe = $(this).attr("class");
            var id = $(this).attr("id"); 
            
            $("#"+id).show();
            
        });
        $("#div").find('*').each(function(){
            var classe = $(this).attr("class");
            var id = $(this).attr("id"); 
            //console.log(classe);
            if(classe == "marcar"){
                $("#"+id).hide();
            }
        });

    });
    $(document).on("click", "#completo",function(){
        $("#div").find('*').each(function(){
            var classe = $(this).attr("class");
            var id = $(this).attr("id"); 
            
            $("#"+id).show();
            
        });
        $("#div").find('*').each(function(){
            var classe = $(this).attr("class");
            var id = $(this).attr("id"); 
            console.log(classe);
            if(classe != "marcar"){
                $("#"+id).hide();
            }
        });
    });
    $(document).on("click", "#todos",function(){
        $("#div").find('*').each(function(){
            var classe = $(this).attr("class");
            var id = $(this).attr("id"); 
            
            $("#"+id).show();
            
        });
    });
    /*if ($("#check").is(":checked")==false)
        {
            console.log($("#check").parent().class());
            if($("#check").parent().getClass()=="marcar"){
                $("#check").parent().hide();
            }
            
            
        }*/
        
  

  $(document).on("click", '#lixo', function() {
    if (confirm("Voce realmente deseja excluir esse item?") == true) {
      $(this).parent().remove();
    }

  });
});