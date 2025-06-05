let metodo = 1;

function validaNumero(obj) {
    if (!(obj.val() != '' && parseFloat(obj.val()) > 0)) {
        obj.addClass('is-invalid');
        return true;
    }

    return false;
}

function calcular() {
    let pesoAmostra = $('#pesoAmostraInput').val();
    let volAcido = $('#acidoVolInput').val();
    let concAcido = $('#acidoConcInput').val();
    let fatorCorrecaoAcido = $('#fatorCorrecaoAcidoInput').val();
    let volBase = $('#volBaseInput').val();
    let concBase = $('#concBaseInput').val();
    let fatorCorrecaoBase = $('#fatorCorrecaoBaseInput').val();
    let fcn = $('#valorConversaoSelect').val();

    let result = (((volAcido * concAcido * fatorCorrecaoAcido) - (volBase * concBase * fatorCorrecaoBase))/pesoAmostra) * fcn * 1.4;
    $('#resultado').text(result.toFixed(4));
    $('#resultado').show();
    $('#resultado')[0].scrollIntoView();

}

$('#calcularBtn').on('click', function() {
    let pesoAmostra = $('#pesoAmostraInput');
    let volAcido = $('#acidoVolInput');
    let concAcido = $('#acidoConcInput');
    let fatorCorrecaoAcido = $('#fatorCorrecaoAcidoInput');
    let volBase = $('#volBaseInput');
    let concBase = $('#concBaseInput');
    let fatorCorrecaoBase = $('#fatorCorrecaoBaseInput');
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
        calcular();
        
});

$('input').on('focus', function() {
    $(this).removeClass('is-invalid')
});

$('#valorConversaoSelect').on('change', function() {
    $('#fatorConversaoDemo').text($(this).val().replace('.', ','));

    $('#resultado').hide();
})

$('#pesoAmostraInput').on('input', function() {
    if ($(this).val() != '')
        $('#pesoAmostraDemo').text($(this).val() + 'g');
    else
        $('#pesoAmostraDemo').text('P');

    $('#resultado').hide();
});

$('#acidoVolInput').on('input', function() {
    if ($(this).val() != '')
        $('#acidoVolDemo').text($(this).val() + 'ml');
    else
        $('#acidoVolDemo').text('Va');

    $('#resultado').hide();
});

$('#acidoConcInput').on('input', function() {
    if ($(this).val() != '')
        $('#acidoConcDemo').text($(this).val());
    else
        $('#acidoConcDemo').text('Na');

    $('#resultado').hide();
});

$('#fatorCorrecaoAcidoInput').on('input', function() {
    if ($(this).val() != '')
        $('#fatorPadronizacaoDemo').text($(this).val());
    else
        $('#fatorPadronizacaoDemo').text('fa');

    $('#resultado').hide();
});

$('#volBaseInput').on('input', function() {
    if ($(this).val() != '')
        $('#volBaseDemo').text($(this).val() + 'ml');
    else
        $('#volBaseDemo').text('Vb');

    $('#resultado').hide();
})

$('#concBaseInput').on('input', function() {
    if ($(this).val() != '')
        $('#concTeoricaBaseDemo').text($(this).val());
    else
        $('#concTeoricaBaseDemo').text('Nb');

    $('#resultado').hide();
})

$('#fatorCorrecaoBaseInput').on('input', function() {
    if ($(this).val() != '')
        $('#concRealBaseDemo').text($(this).val());
    else
        $('#concRealBaseDemo').text('fb');

    $('#resultado').hide();
})

$('#metodoDiretoBtn').on('click', function() {
    metodo = 1;
    $(this).parent().addClass('left');
    $(this).parent().removeClass('right');
});

$('#metodoIndiretoBtn').on('click', function() {
    metodo = 2;
    $(this).parent().addClass('right');
    $(this).parent().removeClass('left');
});