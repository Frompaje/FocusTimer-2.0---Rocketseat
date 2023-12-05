import * as el from "../variaveis.js"
import * as States from "./states.js";
import { iconPause } from "../variaveis.js"
import { reset } from "./actions.js"

export function updateDisplay(minutos, segundos) {
    minutos = minutos ?? States.minutos
    segundos = segundos ?? States.segundos
    el.minutos.textContent = String(minutos).padStart(2, "0")
    el.segundos.textContent = String(segundos).padStart(2, "0")


}

export function countDown() {
    if (el.iconPause.classList.contains("hidden")) {
        return
    }

    let minutos = Number(el.minutos.textContent)
    let segundos = Number(el.segundos.textContent)
    segundos--

    if (segundos < 0) {
        segundos = 59
        --minutos
    }
    if (minutos < 0) {
        reset()
        return
    }
    updateDisplay(minutos, segundos)

    setTimeout(() => countDown(), 1000)
}

