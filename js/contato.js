const formulario =
document.getElementById(
    "formContato"
);

const mensagem =
document.getElementById(
    "mensagemSucesso"
);

formulario.addEventListener(
    "submit",
    function(event){

        event.preventDefault();

        const nome =
        document.getElementById(
            "nome"
        ).value.trim();

        const email =
        document.getElementById(
            "email"
        ).value.trim();

        const texto =
        document.getElementById(
            "mensagem"
        ).value.trim();

        if(
            nome.length < 3
        ){

            alert(
                "Digite um nome válido."
            );

            return;
        }

        if(
            !email.includes("@")
            ||
            !email.includes(".")
        ){

            alert(
                "Digite um e-mail válido."
            );

            return;
        }

        if(
            texto.length < 10
        ){

            alert(
                "A mensagem deve possuir pelo menos 10 caracteres."
            );

            return;
        }

        mensagem.textContent =
        "Mensagem enviada com sucesso!";

        formulario.reset();

    }
);