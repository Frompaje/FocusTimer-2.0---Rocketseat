import * as variaveis from "../variaveis.js"
import * as sounds from "./sounds.js"

let StopSoundShop = 0

export function StartButtonShop() {
    variaveis.buttonShop.addEventListener("click", () => {

        document.querySelector(".container-app").classList.toggle("shop")
        document.querySelector(".container-buttonTime").classList.toggle("shop")
        variaveis.iconShop.classList.toggle("hidden")
        variaveis.iconLeaveShop.classList.toggle("hidden")
        sounds.soundShop.play()
        sounds.soundTree.pause()
        sounds.soundFire.pause()
        sounds.soundRain.pause()
        if (variaveis.containerApp.classList.contains("shop") && variaveis.containerButtonTime.classList.contains("shop")) {
            variaveis.containerApp.classList.remove("tree", "rain", "fire")
            variaveis.containerButtonTime.classList.remove("tree", "rain", "fire")

        }
        if (StopSoundShop == 1) {
            sounds.soundShop.pause()
            variaveis.containerApp.classList.remove("shop")
            variaveis.containerButtonTime.classList.remove("shop")

        }
        StopSoundShop++
        StopSoundShop = StopSoundShop % 2

    })
}