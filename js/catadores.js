const formCatador =
document.getElementById(
    "formCatador"
);

const mensagemCadastro =
document.getElementById(
    "mensagemCadastro"
);

formCatador.addEventListener(
    "submit",
    function(event){

        event.preventDefault();

        mensagemCadastro.textContent =
        "Cadastro realizado com sucesso!";

        formCatador.reset();

    }
);