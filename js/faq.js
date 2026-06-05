const perguntas =
document.querySelectorAll(
    ".faq__question"
);

perguntas.forEach(
    (pergunta) => {

        pergunta.addEventListener(
            "click",
            () => {

                const resposta =
                pergunta.nextElementSibling;

                if(
                    resposta.style.maxHeight
                ){

                    resposta.style.maxHeight =
                    null;

                }else{

                    resposta.style.maxHeight =
                    resposta.scrollHeight +
                    "px";

                }

            }
        );

    }
);