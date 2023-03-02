$(function(){
    var numero_um;
    var numero_dois;
    var operador;
    var visor = $('#visor');
    //Quando o usuario clicar no botao numerico, deve ser adicionado o numero clicado no visor

    //Criar um evento para o clique nno botao numerico
    $('.botao').on('click', function(){
        //O this se refere ao numero clicado
        //Pega o conteudo do botao que foi clicado e salva na variavel numero
        let numero = $(this).html();

        //Pega o valor do visor e guarda na variavel visor
        let nro_tela = visor.val();

        //Adiciona no visor o valor anterior e o numero clicado
        $("#visor").val(nro_tela + numero);
    });

    //Quando clicar num operador, salva o numero que estava digitado.
    //Apagar o visor. Slavar a operação que foi clicada. Dar erro caso não tenha um numero digitado
    $(".mais").on('click', function(){
        if(visor.val()==''){
            //Mostra um alerta
            alert("Digite um numero");
            //Sai da função
            return;
        }

        numero_um = visor.val();
        visor.val('');
        operador = '+';

    })
    $(".subtrair").on('click', function(){
        if(visor.val()==''){
            //Mostra um alerta
            alert("Digite um numero");
            //Sai da função
            return;
        }

        numero_um = visor.val();
        visor.val('');
        operador = '-';

    })
    $(".dividir").on('click', function(){
        if(visor.val()==''){
            //Mostra um alerta
            alert("Digite um numero");
            //Sai da função
            return;
        }

        numero_um = visor.val();
        visor.val('');
        operador = '/';

    })
    $(".multiplicar").on('click', function(){
        if(visor.val()==''){
            //Mostra um alerta
            alert("Digite um numero");
            //Sai da função
            return;
        }

        numero_um = visor.val();
        visor.val('');
        operador = '*';

    })
    //Quando clicar no blocos igual vai fazer o calculo de acordo com o operador salva e mostrar o resultado no visor
    $(".botao_igual").on('click', function(){
        if(visor.val() == ''){
            //Mostra um alerta
            alert("Digite um numero");
            //Sai da função
            return;
        }
        numero_dois = visor.val(); 
        if(operador == '+'){
            let resultado = parseFloat(numero_um) + parseFloat(numero_dois);
            visor.val(resultado);
        }
        if(operador == '-'){
            let resultado = parseFloat(numero_um) - parseFloat(numero_dois);
            visor.val(resultado);
        }
        if(operador == '/'){
            let resultado = parseFloat(numero_um) / parseFloat(numero_dois);
            visor.val(resultado);
        }
        if(operador == '*'){
            let resultado = parseFloat(numero_um) * parseFloat(numero_dois);
            visor.val(resultado);
        }
    })

    $('.apagar').on('click', function(){
        visor.val('');
    })
    $('.apagar_tudo').on('click', function(){
        visor.val('');
        operador = 0;
    })
});