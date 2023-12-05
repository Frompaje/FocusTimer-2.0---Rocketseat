import * as variaveis from "../variaveis.js"
import * as sounds from "./sounds.js"
export let StopSoundFire = 0

export function StartButtonFire() {


    variaveis.buttonFire.addEventListener("click", () => {

        variaveis.containerApp.classList.toggle("fire")
        variaveis.containerButtonTime.classList.toggle("fire")
        variaveis.iconFire.classList.toggle("hidden")
        variaveis.iconLeaveFire.classList.toggle("hidden")
        sounds.soundFire.play()
        sounds.soundTree.pause()
        sounds.soundRain.pause()
        sounds.soundShop.pause()

        if (variaveis.containerApp.classList.contains("fire") && variaveis.containerButtonTime.classList.contains("fire")) {
            variaveis.containerApp.classList.remove("tree", "rain", "shop")
            variaveis.containerButtonTime.classList.remove("tree", "rain", "shop")
        }

        if (StopSoundFire >= 1) {
            sounds.soundFire.pause()
            variaveis.containerApp.classList.remove("fire")
            variaveis.containerButtonTime.classList.remove("fire")

        }

        StopSoundFire++
        StopSoundFire = StopSoundFire % 2


    })
}