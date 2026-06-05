const eventos =
document.getElementById(
    "eventos"
);

const catadores =
document.getElementById(
    "catadores"
);

const empresas =
document.getElementById(
    "empresas"
);

const reciclagem =
document.getElementById(
    "reciclagem"
);

function atualizarDashboard(){

    if(
        !eventos ||
        !catadores ||
        !empresas ||
        !reciclagem
    ){

        return;
    }

    eventos.textContent =
    Math.floor(
        Math.random() * 20 + 10
    );

    catadores.textContent =
    Math.floor(
        Math.random() * 500 + 100
    );

    empresas.textContent =
    Math.floor(
        Math.random() * 100 + 20
    );

    reciclagem.textContent =
    Math.floor(
        Math.random() * 5000 + 1000
    );

}

atualizarDashboard();

setInterval(
    atualizarDashboard,
    5000
);