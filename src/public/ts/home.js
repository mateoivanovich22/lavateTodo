"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const buttonSort = document.querySelector(".buttonSort");
buttonSort === null || buttonSort === void 0 ? void 0 : buttonSort.addEventListener("click", () => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const personasSeleccionadas = [];
    const personas = document.querySelectorAll('.checkbox-input:checked');
    if (personas != null) {
        personas.forEach((checkbox) => {
            const personaId = checkbox.getAttribute('id') || '';
            const imgSrc = checkbox.getAttribute('value') || '';
            const object = { personaId: personaId, img: imgSrc };
            personasSeleccionadas.push(object);
        });
    }
    let cantidadPerdedores = ((_a = document.querySelector('.radio-input input:checked')) === null || _a === void 0 ? void 0 : _a.getAttribute('value')) || "1";
    const numberLoosers = parseInt(cantidadPerdedores);
    if (personas.length < numberLoosers || personas.length == 0) {
        alert("Error, esta apretando algo incorrecto");
    }
    else {
        const info = {
            "selectPlayers": personasSeleccionadas,
            "numberLoosers": numberLoosers
        };
        const response = yield fetch("/loosers", {
            method: 'POST',
            body: JSON.stringify(info),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (response.status == 200) {
            const responseData = yield response.json();
            yield localStorage.setItem('loosers', JSON.stringify(responseData.loosers));
            window.location.href = "/results";
        }
    }
}));
