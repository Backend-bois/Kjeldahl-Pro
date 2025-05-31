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
    let volAmostra = $('#volAmostraInput');
    let volDest = $('#destVolInput');
    let acidConc = $('#acidConcDestInput');
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