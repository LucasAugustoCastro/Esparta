var count = 1; 

$(document).ready(function() {
    $(document).keypress(function(e) {//clicar no botao de inserir pressionando enter
        if (e.which == 13){
            console.log($("#inputAdd").val());
            if($("#inputAdd").val() != ""){
                $('#button').click();
            }
        }
    });

    $('#button').click(function() {//botao de insersao de valores na div
        var textAdd = $('#inputAdd').val();//Pega o valor no input e salva em uma variavel
        $('#inputAdd').val(''); //esvasia o input
        //Adiciona uma nova tarefa na div de tarefas
        $('#div').append('<div id = "divinha' + count + '"><input id = "check" type="checkbox"> ' + textAdd + '<img id = "lixo" src="imagens/lixeira.png" alt="" height="20px">' + '</div>');
        count++; 
    });
    $(document).on("change", "#check", function() {// ao marcar o checkbox sera adionado a classe marcar na div
        $(this).parent().toggleClass('marcar');
    });
    $(document).on("click", "#incompleto",function(){//ao clicar no botao 'Em progresso' mostrara todas as tarefas que nao estiverem com o checkbox marcado
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
    $(document).on("click", "#completo",function(){//ao clicar no botao 'Finalizadas' mostrara todas as tarefas que estiverem com o checkbox marcado
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
    $(document).on("click", "#todos",function(){//mostrara toda as tarefas novamente
        $("#div").find('*').each(function(){
            var classe = $(this).attr("class");
            var id = $(this).attr("id"); 
            
            $("#"+id).show();
            
        });
    });

  $(document).on("click", '#lixo', function() {//Ao clicar na imagem de lixo, mostrar um span perguntando se realmente deseja excluir aquela tarefa, caso queira sera excluido
    if (confirm("Voce realmente deseja excluir esse item?") == true) {
      $(this).parent().remove();
    }

  });
});