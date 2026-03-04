document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            // Rola suavemente até o elemento
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });

            // Remove o fragmento da URL sem recarregar a página
            history.pushState(null, null, window.location.pathname);
        }
    });
});