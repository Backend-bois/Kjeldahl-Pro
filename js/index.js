function validaNumero(obj) {
    if (!(obj.val() != '' && obj.val() != 0 && parseFloat(obj.val()) > 0)) {
        obj.addClass('is-invalid');
        return false;
    }

    return true;
}

function calcular() {
    console.log('deu'); //Ainda falta desenvolver o cálculo
}

$('#calcularBtn').on('click', function() {
    let volAmostra = $('#pesoAmostraInput');
    let volDest = $('#acidoVolInput');
    let acidConc = $('#acidoConcDestInput');
    let fatorPadrao = $('#fatorPadronizacaoInput');
    let volBase = $('#volBaseInput');
    let concTeoricaBase = $('#concTeocricaBaseInput');
    let concRealBase = $('#concRealBaseInput');
    let count = 0;
    if (validaNumero(volAmostra))
        count++;
    if (validaNumero(volDest))
        count++;
    if (validaNumero(acidConc))
        count++;
    if (validaNumero(fatorPadrao))
        count++;
    if (validaNumero(volBase))
        count++;
    if (validaNumero(concTeoricaBase))
        count++;
    if (validaNumero(concRealBase))
        count++;
    
    if (count == 0)
        calcular();
        
});

$('input').on('focus', function() {
    $(this).removeClass('is-invalid')
});

$('#valorConversaoSelect').on('change', function() {
    $('#fatorConversaoDemo').text($(this).val().replace('.', ','));
})

$('#pesoAmostraInput').on('input', function() {
    if ($(this).val() != '')
        $('#pesoAmostraDemo').text($(this).val() + 'g');
    else
        $('#pesoAmostraDemo').text('P');
});

$('#acidoVolInput').on('input', function() {
    if ($(this).val() != '')
        $('#acidoVolDemo').text($(this).val() + 'ml');
    else
        $('#acidoVolDemo').text('Va');
});

$('#acidoConcDestInput').on('input', function() {
    if ($(this).val() != '')
        $('#acidoConcDemo').text($(this).val());
    else
        $('#acidoConcDemo').text('Na');
});

$('#fatorPadronizacaoInput').on('input', function() {
    if ($(this).val() != '')
        $('#fatorPadronizacaoDemo').text($(this).val());
    else
        $('#fatorPadronizacaoDemo').text('fa');
});

$('#volBaseInput').on('input', function() {
    if ($(this).val() != '')
        $('#volBaseDemo').text($(this).val() + 'ml');
    else
        $('#volBaseDemo').text('Vb');
})

$('#concTeocricaBaseInput').on('input', function() {
    if ($(this).val() != '')
        $('#concTeoricaBaseDemo').text($(this).val());
    else
        $('#concTeoricaBaseDemo').text('Nb');
})

$('#concRealBaseInput').on('input', function() {
    if ($(this).val() != '')
        $('#concRealBaseDemo').text($(this).val());
    else
        $('#concRealBaseDemo').text('fb');
})