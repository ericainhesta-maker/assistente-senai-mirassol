const voiceButton = document.getElementById("voiceButton");
const voiceIcon = document.getElementById("voiceIcon");
const voiceStatus = document.getElementById("voiceStatus");

const questionButtons =
    document.querySelectorAll(".question-button");

const conversation =
    document.getElementById("conversation");


let listening = false;


/*
 * Botão principal de voz
 *
 * IMPORTANTE:
 * Nesta primeira etapa ele é apenas uma simulação visual.
 *
 * Na próxima etapa vamos substituir esta parte
 * pela conexão real com o Azure Voice Live.
 */

voiceButton.addEventListener("click", () => {

    listening = !listening;

    if (listening) {

        voiceButton.classList.add("listening");

        voiceIcon.className = "bi bi-stop-fill";

        voiceStatus.textContent =
            "Estou ouvindo... fale sua pergunta";

    } else {

        voiceButton.classList.remove("listening");

        voiceIcon.className = "bi bi-mic-fill";

        voiceStatus.textContent =
            "Clique para falar";
    }

});


/*
 * Perguntas sugeridas
 */

questionButtons.forEach(button => {

    button.addEventListener("click", () => {

        const question =
            button.dataset.question;

        addUserMessage(question);

        simulateAssistantResponse();

    });

});


/*
 * Adiciona mensagem do usuário
 */

function addUserMessage(text) {

    const message =
        document.createElement("div");

    message.className =
        "message";

    message.style.marginTop = "10px";

    message.innerHTML = `

        <div class="message-icon"
             style="background:#09233f">

            <i class="bi bi-person-fill"></i>

        </div>

        <div>

            <strong>Você</strong>

            <p>${text}</p>

        </div>
    `;

    conversation.appendChild(message);

    message.scrollIntoView({
        behavior: "smooth",
        block: "nearest"
    });

}


/*
 * Resposta temporária
 *
 * Será substituída pelo agente real
 * na próxima etapa.
 */

function simulateAssistantResponse() {

    setTimeout(() => {

        const message =
            document.createElement("div");

        message.className =
            "message";

        message.style.marginTop = "10px";

        message.innerHTML = `

            <div class="message-icon">

                <i class="bi bi-robot"></i>

            </div>

            <div>

                <strong>Assistente</strong>

                <p>
                    Essa pergunta será respondida
                    pelo agente de voz do SENAI Mirassol.
                </p>

            </div>
        `;

        conversation.appendChild(message);

        message.scrollIntoView({
            behavior: "smooth",
            block: "nearest"
        });

    }, 700);

}