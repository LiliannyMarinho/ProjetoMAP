document.addEventListener("DOMContentLoaded", function() {
    const openLoginButton = document.getElementById("open-login");
    const loginContainer = document.createElement('div');
    document.body.appendChild(loginContainer);

    // Carregar o conteúdo do modal de login
    fetch('login.html')
        .then(response => response.text())
        .then(data => {
            loginContainer.innerHTML = data;
            const closeLoginButton = document.getElementById("close-login-modal");
            const loginModal = document.getElementById("login-modal");

            openLoginButton.addEventListener("click", function(event) {
                event.preventDefault();
                loginModal.style.display = "flex";
            });

            closeLoginButton.addEventListener("click", function() {
                loginModal.style.display = "none";
            });

            window.addEventListener("click", function(event) {
                if (event.target === loginModal) {
                    loginModal.style.display = "none";
                }
            });
        })
        .catch(error => console.error('Erro ao carregar o modal de login:', error));
});
