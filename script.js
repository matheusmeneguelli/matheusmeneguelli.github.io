// script.js

// Adiciona evento de clique aos links de navegação
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault(); // Evita o comportamento padrão do clique

        const targetId = this.getAttribute('href').substring(1); // Obtém o ID do destino
        const targetSection = document.getElementById(targetId); // Seleciona a seção de destino

        // Calcula a posição da seção levando em consideração o cabeçalho fixo
        const offset = 70; // Altura do cabeçalho
        const elementPosition = targetSection.offsetTop - offset;

        // Realiza a rolagem suave até a posição calculada
        window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
        });
    });
});