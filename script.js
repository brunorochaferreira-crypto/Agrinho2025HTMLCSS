function mostrarMensagem() {
    alert("🌱 O agro sustentável protege o futuro do planeta!");
}

let numero = 0;

function contarArvores() {
    numero += 10;

    document.getElementById("numero").innerHTML = numero;
}

const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function(evento) {

    evento.preventDefault();

    alert("✅ Mensagem enviada com sucesso!");

    formulario.reset();

});

window.addEventListener("scroll", function() {

    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {

        const posicao = card.getBoundingClientRect().top;

        if(posicao < window.innerHeight - 100) {
            card.style.opacity = "1";
            card.style.transform = "translateY(0px)";
        }

    });

});