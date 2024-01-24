export const sorteo = (participantes, loosersQuantity) => {
    if (loosersQuantity > participantes.length) {
        return [];
    }
    else {
        const participantesCopia = [...participantes];
        const perdedores = [];
        for (let i = 0; i < loosersQuantity; i++) {
            const indiceGanador = Math.floor(Math.random() * participantesCopia.length);
            const perdedor = participantesCopia.splice(indiceGanador, 1)[0];
            perdedores.push(perdedor);
        }
        return perdedores;
    }
};
