let metodo = 1;

function validaNumero(obj) {
    if (!(obj.val() != '' && parseFloat(obj.val()) > 0)) {
        obj.addClass('is-invalid');
        return true;
    }

    return false;
}

function validaDireto() {
    let pesoAmostra = $('#pesoAmostraInputDir');
    let volAcidoAmostra = $('#acidoVolAmostraInputDir');
    let volAcidoBranco = $('#acidoVolBrancoInputDir');
    let concAcido = $('#acidoConcInputDir');
    let fatorCorrecaoAcido = $('#fatorCorrecaoAcidoInputDir');
    let count = 0;

    if (validaNumero(pesoAmostra))
        count++;
    if (validaNumero(volAcidoAmostra))
        count++;
    if (validaNumero(volAcidoBranco))
        count++;
    if (validaNumero(concAcido))
        count++;
    if (validaNumero(fatorCorrecaoAcido))
        count++;

    if (count == 0)
        return true;

    return false;
}

function validaIndireto() {
    let pesoAmostra = $('#pesoAmostraInputInd');
    let volAcido = $('#acidoVolInputInd');
    let concAcido = $('#acidoConcInputInd');
    let fatorCorrecaoAcido = $('#fatorCorrecaoAcidoInputInd');
    let volBase = $('#volBaseInputInd');
    let concBase = $('#concBaseInputInd');
    let fatorCorrecaoBase = $('#fatorCorrecaoBaseInputInd');
    let count = 0;

    if (validaNumero(pesoAmostra))
        count++;
    if (validaNumero(volAcido))
        count++;
    if (validaNumero(concAcido))
        count++;
    if (validaNumero(fatorCorrecaoAcido))
        count++;
    if (validaNumero(volBase))
        count++;
    if (validaNumero(concBase))
        count++;
    if (validaNumero(fatorCorrecaoBase))
        count++;
    
    if (count == 0) 
        return true;

    return false;
        
}

function calcular() {
    if (metodo == 1 && validaDireto()) {
        let pesoAmostra = $('#pesoAmostraInputDir').val();
        let volAcidoAmostra = $('#acidoVolAmostraInputDir').val();
        let volAcidoBranco = $('#acidoVolBrancoInputDir').val();
        let concAcido = $('#acidoConcInputDir').val();
        let fatorCorrecaoAcido = $('#fatorCorrecaoAcidoInputDir').val();
        let fcn = $('#valorConversaoSelect').val();

        let result = ((volAcidoAmostra - volAcidoBranco) * concAcido * fatorCorrecaoAcido * 1.4 * fcn)/pesoAmostra;

        $('#resultado').text(result.toFixed(4));
        $('#resultado').show();
        $('#resultado')[0].scrollIntoView();

    } else if (validaIndireto()) {
        let pesoAmostra = $('#pesoAmostraInputInd').val();
        let volAcido = $('#acidoVolInputInd').val();
        let concAcido = $('#acidoConcInputInd').val();
        let fatorCorrecaoAcido = $('#fatorCorrecaoAcidoInputInd').val();
        let volBase = $('#volBaseInputInd').val();
        let concBase = $('#concBaseInputInd').val();
        let fatorCorrecaoBase = $('#fatorCorrecaoBaseInputInd').val();
        let fcn = $('#valorConversaoSelect').val();
    
        let result = (((volAcido * concAcido * fatorCorrecaoAcido) - (volBase * concBase * fatorCorrecaoBase))/pesoAmostra) * fcn * 1.4;
        $('#resultado').text(result.toFixed(4));
        $('#resultado').show();
        $('#resultado')[0].scrollIntoView();
    }

}


$('#calcularBtn').on('click', calcular);

$('input').on('focus', function() {
    $(this).removeClass('is-invalid');
});

$('#valorConversaoSelect').on('change', function() {
    $('.fatorConversaoDemo').text($(this).val().replace('.', ','));

    $('#resultado').hide();
});

$('#pesoAmostraInputDir').on('input', function() {
    if ($(this).val() != '') 
        $('#pesoAmostraDemoDir').text($(this).val().replace('.', ',') + 'g');
    else
        $('#pesoAmostraDemoDir').text('P')

    $('#resultado').hide();
});

$('#acidoVolAmostraInputDir').on('input', function() {
    if ($(this).val() != '')
        $('#acidoVolAmostraDemoDir').text($(this).val().replace('.', ',') + 'ml');
    else
        $('#acidoVolAmostraDemoDir').text('Va');

    $('#resultado').hide();
});

$('#acidoVolBrancoInputDir').on('input', function() {
    if ($(this).val() != '')
        $('#AcidoVolBrancoDemoDir').text($(this).val().replace('.', ',') + 'ml');
    else
        $('#AcidoVolBrancoDemoDir').text('Vb');

    $('#resultado').hide();
});

$('#acidoConcInputDir').on('input', function() {
    if ($(this).val() != '')
        $('#acidoConcDemoDir').text($(this).val().replace('.', ',') + 'N');
    else
        $('#acidoConcDemoDir').text('N');

    $('#resultado').hide();
});

$('#fatorCorrecaoAcidoInputDir').on('input', function() {
    if($(this).val() != '')
        $('#fatorCorrecaoAcidoDemoDir').text($(this).val().replace('.', ','));
    else
        $('#fatorCorrecaoAcidoDemoDir').text('f');
});








$('#pesoAmostraInputInd').on('input', function() {
    if ($(this).val() != '')
        $('#pesoAmostraDemoInd').text($(this).val() + 'g');
    else
        $('#pesoAmostraDemoInd').text('P');

    $('#resultado').hide();
});

$('#acidoVolInputInd').on('input', function() {
    if ($(this).val() != '')
        $('#acidoVolDemoInd').text($(this).val() + 'ml');
    else
        $('#acidoVolDemoInd').text('Va');

    $('#resultado').hide();
});

$('#acidoConcInputInd').on('input', function() {
    if ($(this).val() != '')
        $('#acidoConcDemoInd').text($(this).val());
    else
        $('#acidoConcDemoInd').text('Na');

    $('#resultado').hide();
});

$('#fatorCorrecaoAcidoInputInd').on('input', function() {
    if ($(this).val() != '')
        $('#fatorPadronizacaoDemoInd').text($(this).val());
    else
        $('#fatorPadronizacaoDemoInd').text('fa');

    $('#resultado').hide();
});

$('#volBaseInputInd').on('input', function() {
    if ($(this).val() != '')
        $('#volBaseDemoInd').text($(this).val() + 'ml');
    else
        $('#volBaseDemoInd').text('Vb');

    $('#resultado').hide();
})

$('#concBaseInputInd').on('input', function() {
    if ($(this).val() != '')
        $('#concTeoricaBaseDemoInd').text($(this).val());
    else
        $('#concTeoricaBaseDemoInd').text('Nb');

    $('#resultado').hide();
})

$('#fatorCorrecaoBaseInputInd').on('input', function() {
    if ($(this).val() != '')
        $('#concRealBaseDemoInd').text($(this).val());
    else
        $('#concRealBaseDemoInd').text('fb');

    $('#resultado').hide();
})

$('#metodoDiretoBtn').on('click', function() {
    metodo = 1;
    $(this).parent().addClass('left');
    $(this).parent().removeClass('right');
    $('#formDireto').show();
    $('#formIndireto').hide();
    $('#demonstracaoDir').removeClass('d-none');
    $('#demonstracaoInd').addClass('d-none');
});

$('#metodoIndiretoBtn').on('click', function() {
    metodo = 2;
    $(this).parent().addClass('right');
    $(this).parent().removeClass('left');
    $('#formDireto').hide();
    $('#formIndireto').show();
    $('#demonstracaoDir').addClass('d-none');
    $('#demonstracaoInd').removeClass('d-none');
});