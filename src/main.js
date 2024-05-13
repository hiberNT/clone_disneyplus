document.addEventListener('DOMContentLoaded', function(){ //add uma funçao q vai ativar quando le todo o documento DOM
    const buttons = document.querySelectorAll('[data-tab-button]') //resgatando tdos os botoes q colocamos la no index temos q colocar entre [] pra indicar o seletor
    const questions = document.querySelectorAll('[data-faq-question]');

    const heroSection = document.querySelector('.hero');//resgatando o hero pois vamos usar ele 
    const alturaHero = heroSection.clientHeight;//estamos pegando a altura q o hero com essa clienhigth

    window.addEventListener('scroll', function(){//estou pegando com o scroll do mouse a altura para podermos trabalhar ou seja o scroll é uma altura numerica quanto mais pra baixo eu vou mais ela aumenta,
        const posicaoAtual = window.scrollY;//o valor dai quando essa função daqui for menor const alturaHero significa que ja passou por ela ficou pa tras dai os o logo e botao da header vao sumir quandoestiver na altura do header quando sair da altura do header eles aparecem

        if (posicaoAtual < alturaHero) { //imagina assim quanto mais o scroll do mouse desse maior fica ,mas quando o scrll estiver no hero vai ocultar os elementos por isso posiçao < hero pq tem ser tipo ai saio do hero vai aumentar dai passar a posição vai ser maior q o hero
            ocultarElementosDoHeader();
        } else {
            exibirElementosDoHeader();
        }
    })


    //seção de atrações, progamação da abas
    for (let i = 0; i < buttons.length; i++) { //enquanto i for menor q a quantidade de butoes sera incrementado e vai ativer funcao click
        buttons[i].addEventListener('click', function(botao){
            const abaAlvo = botao.target.dataset.tabButton //aqui estamos colocando o alvo q vai ser atingido com o click ,esse dataset faz com q aponte pro tabButton e o tab ja localiza qual aba vai estar quando clicar. Este valor indica a ID da aba que deve ser exibida. ex se for a aba populares o data aponta pra tabbutton e ele identifica onde esta q no caso é populares e indica a id q tbm é populares 
            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`)//o querry vai pesquisar pela data-tab-id(fizmeos a funcao ali emabaixo de remove os data...-id pra garantir apenas uma aba ativa) onde o valor seja igual o abaAlvo e tem q ser igual abaAlvo pois nela q ta o target do click reposnsvel de mudar de aba 
            escondeTodasAbas();//em resumo quando eu clicar o tabButton de abaAlvo por ex se eu tiver na aba populares ele identifica e isso vai ser = data-tab-id da aba de populares q tbm iria ter o is active
            aba.classList.add('shows__list--is-active');
            removeBotaoAtivo();
            botao.target.classList.add('shows__tabs__button--is-active');
        })
    }


    
    for (let i = 0; i < questions.length; i++){
        questions[i].addEventListener('click',abreOuFechaResposta)
    }
})

function ocultarElementosDoHeader() {
    const header = document.querySelector('header');
    header.classList.add('header--is-hiden');
}

function exibirElementosDoHeader() {
    const header = document.querySelector('header');
    header.classList.remove('header--is-hiden');
}

function abreOuFechaResposta(elemento) {
    const classe = 'faq__questions__item--is--open';//classe q fala q o elemnto esta aberto ou fechada
    const elementoPai = elemento.target.parentNode;//quand clicamos temos a parte da pergunta a question so q essa classe tem q ser removida do elemento pai q ta acima dele(olha no html) q é faq__questions__item tem q ser removida pq dai quando clicamos a parte da pergunta some e so sobra a parte da resposta e pra acessar o elemento acima é p parentnode

    elementoPai.classList.toggle(classe);//e o toggle faz com q essa açao de o elemnto filho saia e fique so elemento pai
}

function removeBotaoAtivo() {
    const buttons = document.querySelectorAll('[data-tab-button]')

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('shows__tabs__button--is-active')
    }
}

function escondeTodasAbas() {
    const tabsContainer = document.querySelectorAll('[data-tab-id]')//nessa const estamos pegando as ul vamo remover aquela classe is-active do index q esta nas ul e dps add a abaAlvo as classes onde era o is-active garante q so tenha uma aba ativa e q troque pra outra com o clique

    for (let i = 0; i < tabsContainer.length;i++) {
        tabsContainer[i].classList.remove('shows__list--is-active');
    }
}//Isso garante que todas as outras abas sejam ocultas antes que a nova aba se torne visível.