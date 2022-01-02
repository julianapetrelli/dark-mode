export default function prefersTheme () {

    // Selecionando meu html
    const html = document.querySelector('html');

    // Selecionando o botão com a classe "button"
    const button = document.querySelector('.button');

    
    // Criando ação para o meu evento
    function selectTheme(event) {

        // Prevenindo a ação padrão do botão
        event.preventDefault();

        // Adicionando a classe "dark-mode" ao botão, quando clicado e removendo ao clicar novamente
        html.classList.toggle('dark-mode');
    }

    // Adicionando a escuta e o evento que deve ser escutado, para execultar a ação 
    button.addEventListener('click', selectTheme)
}
