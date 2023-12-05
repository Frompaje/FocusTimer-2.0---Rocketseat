import { States } from "./states.js"
import { registerControls } from "./registerButtons.js"
import { updateDisplay } from "./timer.js"

export function StartFocustTimer(minutos, segundos) {
    States.minutos = minutos
    States.segundos = segundos
    registerControls()
    updateDisplay(0, 0)
}
