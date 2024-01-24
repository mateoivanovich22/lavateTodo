

const loosersDiv: HTMLElement | null = document.querySelector(".loosersName");

const loosersString: string | null = localStorage.getItem("loosers");

let loosers = [];

interface Looser {
    personaId: string;
    img: string;
}

if (loosersString) {
    loosers = JSON.parse(loosersString);

    if(loosersDiv){
        for(let i = 0; i < loosers.length; i++) {
            var looserDiv: HTMLElement = document.createElement("div");
            looserDiv.classList.add("looserDiv");
            
            var looserDataDiv: HTMLElement = document.createElement("div"); 
            looserDataDiv.classList.add("looserData");

            const looserData: Looser = {
                personaId: loosers[i].personaId,
                img: loosers[i].img
            }

            var looserImg: HTMLImageElement  = document.createElement("img"); 
            looserImg.src = looserData.img;

            var looserH1: HTMLElement = document.createElement("h3"); 
            looserH1.textContent = looserData.personaId;

            var numberLooser: HTMLElement = document.createElement("h2");
            const numberList: Number = i + 1;

            numberLooser.textContent = numberList.toString();

            looserDataDiv.appendChild(looserImg);
            looserDataDiv.appendChild(looserH1)

            looserDiv.appendChild(numberLooser);
            looserDiv.appendChild(looserDataDiv)

            loosersDiv.appendChild(looserDiv);
        }
        
    }

}

