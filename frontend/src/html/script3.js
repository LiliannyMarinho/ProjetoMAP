// script-additional-info.js
document.addEventListener("DOMContentLoaded", function() {
    const additionalInfoContainer = document.createElement('div');
    document.body.appendChild(additionalInfoContainer);

    // Carregar o conteúdo do modal de informações adicionais
    fetch('infoad.html')
        .then(response => response.text())
        .then(data => {
            additionalInfoContainer.innerHTML = data;
            const closeAdditionalInfoButton = document.getElementById("close-additional-info-modal");
            const additionalInfoModal = document.getElementById("additional-info-modal");
            const additionalInfoForm = document.getElementById("additional-info-form");
            const numPetsInput = document.getElementById("num-pets");
            const petsContainer = document.getElementById("pets-container");

            // Função para criar campos para pets
            const createPetFields = (num) => {
                petsContainer.innerHTML = ''; // Limpa o conteúdo existente
                for (let i = 1; i <= num; i++) {
                    const petDiv = document.createElement('div');
                    petDiv.classList.add('pet-fields');
                    petDiv.innerHTML = `
                        <h4>Pet ${i}</h4>
                        <label for="pet-name-${i}">Nome:</label>
                        <input type="text" id="pet-name-${i}" name="pet-name-${i}" required>
                        
                        <label for="pet-species-${i}">Espécie:</label>
                        <input type="text" id="pet-species-${i}" name="pet-species-${i}" required>
                        
                        <label for="pet-breed-${i}">Raça:</label>
                        <input type="text" id="pet-breed-${i}" name="pet-breed-${i}" required>
                        
                        <label for="pet-age-${i}">Idade:</label>
                        <input type="number" id="pet-age-${i}" name="pet-age-${i}" required>
                        
                        <label for="pet-gender-${i}">Sexo:</label>
                        <select id="pet-gender-${i}" name="pet-gender-${i}" required>
                            <option value="macho">Macho</option>
                            <option value="femea">Fêmea</option>
                        </select>
                    `;
                    petsContainer.appendChild(petDiv);
                }
            };

            // Evento para gerar campos adicionais para pets
            numPetsInput.addEventListener("input", function() {
                const numPets = parseInt(this.value);
                if (numPets > 0) {
                    createPetFields(numPets);
                } else {
                    petsContainer.innerHTML = '';
                }
            });

            // Mostrar o modal de informações adicionais após cadastro ou login
            const showAdditionalInfoModal = () => {
                additionalInfoModal.style.display = "flex";
            };

            // Simular cadastro/login e exibir modal de informações adicionais
            const simulateUserAction = () => {
                showAdditionalInfoModal();
            };

            closeAdditionalInfoButton.addEventListener("click", function() {
                additionalInfoModal.style.display = "none";
            });

            window.addEventListener("click", function(event) {
                if (event.target === additionalInfoModal) {
                    additionalInfoModal.style.display = "none";
                }
            });

            // Esta função deve ser chamada após cadastro/login
            simulateUserAction();
        })
        .catch(error => console.error('Erro ao carregar o modal de informações adicionais:', error));
});
