"use strict";
const loosersDiv = document.querySelector(".loosersName");
const loosersString = localStorage.getItem("loosers");
let loosers = [];
if (loosersString) {
    loosers = JSON.parse(loosersString);
    if (loosersDiv) {
        for (let i = 0; i < loosers.length; i++) {
            var looserDiv = document.createElement("div");
            looserDiv.classList.add("looserDiv");
            var looserDataDiv = document.createElement("div");
            looserDataDiv.classList.add("looserData");
            const looserData = {
                personaId: loosers[i].personaId,
                img: loosers[i].img
            };
            var looserImg = document.createElement("img");
            looserImg.src = looserData.img;
            var looserH1 = document.createElement("h3");
            looserH1.textContent = looserData.personaId;
            var numberLooser = document.createElement("h2");
            const numberList = i + 1;
            numberLooser.textContent = numberList.toString();
            looserDataDiv.appendChild(looserImg);
            looserDataDiv.appendChild(looserH1);
            looserDiv.appendChild(numberLooser);
            looserDiv.appendChild(looserDataDiv);
            loosersDiv.appendChild(looserDiv);
        }
    }
}
