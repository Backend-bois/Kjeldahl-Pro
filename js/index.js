
function carregaDropdown(json) {
    let select = document.querySelector('#valorConversaoSelect');
    for (let i=0; i<json.size; i++) {
        let option = document.createElement('option');
        option.value = json[i].valor;
        option.innerText = json[i].nome + ` (${json[i].valor})`;
        select.appendChild(option);
    }
}

fetch('../data/conversionVal.json')
    .then((response) => response.json())
    .then(function(json) {
        carregaDropdown(json)
    });
