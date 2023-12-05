import * as variaveis from "../variaveis.js"
import * as sounds from "./sounds.js"

let StopSoundTree = 0
export function StartButtonTree() {
    variaveis.buttonTree.addEventListener("click", () => {

        variaveis.containerApp.classList.toggle("tree")
        variaveis.containerButtonTime.classList.toggle("tree")
        variaveis.iconTree.classList.toggle("hidden")
        variaveis.iconLeaveTree.classList.toggle("hidden")
        sounds.soundTree.play()
        sounds.soundFire.pause()
        sounds.soundRain.pause()
        sounds.soundShop.pause()

        if (variaveis.containerApp.classList.contains("tree") && variaveis.containerButtonTime.classList.contains("tree")) {
            variaveis.containerApp.classList.remove("fire", "rain", "shop")
            variaveis.containerButtonTime.classList.remove("fire", "rain", "shop")
        }

        if (StopSoundTree >= 1) {
            sounds.soundTree.pause()
            variaveis.containerApp.classList.remove("tree")
            variaveis.containerButtonTime.classList.remove("tree")

        }
        console.log(StopSoundTree++)
        StopSoundTree = StopSoundTree % 2

    })

}