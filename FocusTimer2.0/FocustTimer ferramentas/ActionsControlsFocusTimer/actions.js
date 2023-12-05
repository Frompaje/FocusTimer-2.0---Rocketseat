import { States } from "./states.js";
import { iconPause, iconPlay } from "../variaveis.js";
import *  as timer from "./timer.js"
import * as el from "../variaveis.js"

export function toggleRunning() {
    States.isRunning = !States.isRunning
    if (States.isRunning = true) {
        iconPlay.classList.toggle("hidden")
        iconPause.classList.toggle("hidden")
    }
    timer.countDown()

}
let valorAtual = 0


export function reset() {
    States.isRunning = false
    if (iconPlay.classList.contains("hidden")) {
        iconPlay.classList.remove("hidden")
        iconPause.classList.add("hidden")
    }

    timer.updateDisplay(0, 59)
    valorAtual = 0



}


export function plus() {

    if (valorAtual > 55) {
        return
    }
    valorAtual += 5
    el.minutos.textContent = String(valorAtual).padStart(2, "0")


}




export function minus() {
    if (valorAtual < 5) {
        return
    }
    valorAtual -= 5
    el.minutos.textContent = String(valorAtual).padStart(2, "0")


}