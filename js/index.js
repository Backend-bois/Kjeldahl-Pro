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

    if (validaNumero(volAmostra) &&
        validaNumero(volDest) &&
        validaNumero(acidConc) &&
        validaNumero(fatorPadrao) &&
        validaNumero(volBase) &&
        validaNumero(concTeoricaBase) &&
        validaNumero(concRealBase)) {
            
            calcular();
        }
});

$('input').on('focus', function() {
    $(this).removeClass('is-invalid')
});