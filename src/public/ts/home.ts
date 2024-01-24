
const buttonSort: HTMLElement | null = document.querySelector(".buttonSort");

buttonSort?.addEventListener("click", async () => {
    const personasSeleccionadas: object[] = [];

    const personas: NodeListOf<HTMLInputElement> = document.querySelectorAll('.checkbox-input:checked');

    if(personas != null) {
        personas.forEach((checkbox) => {
            const personaId: string = checkbox.getAttribute('id') || '';
            const imgSrc: string = checkbox.getAttribute('value') || '';
            
            const object: object = {personaId: personaId, img: imgSrc}

            personasSeleccionadas.push(object);
        });
    }
    
    let cantidadPerdedores: string = document.querySelector('.radio-input input:checked')?.getAttribute('value') || "1";

    const numberLoosers: number = parseInt(cantidadPerdedores);

    if(personas.length < numberLoosers || personas.length == 0) {
        alert("Error, esta apretando algo incorrecto");
    }else{
        const info: object = {
            "selectPlayers": personasSeleccionadas,
            "numberLoosers": numberLoosers
        }

        const response = await fetch("/loosers",  {
            method: 'POST',
            body: JSON.stringify(info),
            headers: {
            'Content-Type': 'application/json'
        }})

        if(response.status == 200){
            const responseData = await response.json();

            await localStorage.setItem('loosers', JSON.stringify(responseData.loosers));

            window.location.href = "/results"

        }
    }

});

