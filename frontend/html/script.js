document.addEventListener("DOMContentLoaded", function() {
    const openModalButton = document.getElementById("open-modal");
    const modalContainer = document.createElement('div');
    document.body.appendChild(modalContainer);

    fetch('cadastro.html')
        .then(response => response.text())
        .then(data => {
            modalContainer.innerHTML = data;
            const closeModalButton = document.getElementById("close-modal");
            const modal = document.getElementById("modal");
            const signupForm = document.querySelector("form");

            openModalButton.addEventListener("click", function(event) {
                event.preventDefault();
                modal.style.display = "flex";
            });

            closeModalButton.addEventListener("click", function() {
                modal.style.display = "none";
            });

            window.addEventListener("click", function(event) {
                if (event.target === modal) {
                    modal.style.display = "none";
                }
            });

            signupForm.addEventListener("submit", function(event) {
                event.preventDefault();
                modal.style.display = "none";
                showAdditionalInfoModal();
            });
        })
        .catch(error => console.error('Erro ao carregar o modal:', error));
});
