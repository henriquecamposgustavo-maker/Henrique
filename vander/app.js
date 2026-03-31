let inputTexto = document.querySelector(".texto");

let idioma = document.querySelector(".idioma");

let traducaoSaida =document.querySelector(".traducao");

async function traduzir(){
let url="https://api.mymemory.translated.net/get?q=" + inputTexto.value + "&langpair=pt|" + idioma.value;

let resposta = await fetch(url);

let traducao = await resposta.json();

traducaoSaida.textContent=traducao.responseData.
translatedText;
}