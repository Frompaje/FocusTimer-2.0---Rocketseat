import * as variaveis from "../variaveis.js"
import * as sounds from "./sounds.js"
export let StopSoundRain = 0
export function StartButtonRain() {
    variaveis.buttonCloudRain.addEventListener("click", () => {

        variaveis.containerApp.classList.toggle("rain")
        variaveis.containerButtonTime.classList.toggle("rain")
        variaveis.iconRain.classList.toggle("hidden")
        variaveis.iconLeaveRain.classList.toggle("hidden")
        sounds.soundRain.play()
        sounds.soundShop.pause()
        sounds.soundFire.pause()
        sounds.soundTree.pause()

        if (variaveis.containerApp.classList.contains("rain") && variaveis.containerButtonTime.classList.contains("rain")) {
            variaveis.containerApp.classList.remove("tree", "fire", "shop")
            variaveis.containerButtonTime.classList.remove("tree", "fire", "shop")
        }
        if (StopSoundRain == 1) {
            sounds.soundRain.pause()
            variaveis.containerApp.classList.remove("rain")
            variaveis.containerButtonTime.classList.remove("rain")

        }
        console.log(StopSoundRain++)
        StopSoundRain = stopSoundRain % 2



    })
}