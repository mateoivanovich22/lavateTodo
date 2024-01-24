

export const sorteo = (participantes: string[], loosersQuantity: number): string[] => {

    if (loosersQuantity > participantes.length) {
        return [];
    }else{
        const participantesCopia: string[] = [...participantes];

        const perdedores: string[] = [];
        for (let i = 0; i < loosersQuantity; i++) {
            const indiceGanador: number = Math.floor(Math.random() * participantesCopia.length);
            const perdedor: string = participantesCopia.splice(indiceGanador, 1)[0];
            perdedores.push(perdedor);
        }

        return perdedores;
    }
};
