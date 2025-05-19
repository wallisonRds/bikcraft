// Ativar links do menu
const links = document.querySelectorAll('.header-menu a');

function ativarLink(link) {
    const url = location.href;
    const href = link.href;
    if(url.includes(href)) {
        link.classList.add("ativo");
    }
}

links.forEach(ativarLink);

//Ativar items do Orçamento. comparar se o url da pagina antiga com o url da pagina nova é igual e marcar o checked.

const parametros = new URLSearchParams(location.search);

function ativarProduto(parametro) {
    const element = document.getElementById(parametro);
    if(element) {
        element.checked = true;
    }
}

parametros.forEach(ativarProduto)

// Perguntas frequentes colocar display none nas respostas e mostrar-las após o click.

const perguntas = document.querySelectorAll('.perguntas button');

function ativarPergunta(event) {
    const pergunta = event.currentTarget;
    const controls = pergunta.getAttribute('aria-controls');
    const resposta = document.getElementById(controls);

    resposta.classList.toggle("ativo");
    const ativo = resposta.classList.contains('ativo');
    pergunta.setAttribute('aria-expanded', ativo);
}

function eventosPerguntas(pergunta) {
    pergunta.addEventListener('click', ativarPergunta);
}

perguntas.forEach(eventosPerguntas);

//galeria de Bicicletas, trocar a foto da bicicleta principal ao clicar.

const galeria = document.querySelectorAll('.bicicleta-imagens img');
const galeriaContainer = document.querySelector('.bicicleta-imagens');

function trocarImagem(event) {
    const img = event.currentTarget;
    const media = matchMedia('(min-width: 1000px)').matches;
    if(media) {
    galeriaContainer.prepend(img);
}
}

function eventosGaleria(img) {
    img.addEventListener('click', trocarImagem);
}

galeria.forEach(eventosGaleria);
