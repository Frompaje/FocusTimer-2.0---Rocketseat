import * as variaveis from "../variaveis.js"
import * as actions from "./actions.js"






export function registerControls() {
    variaveis.containerButtonTime.addEventListener("click", (event) => {
        const action = event.target.dataset.action
        if (typeof actions[action] != "function") {
            return
        }
        actions[action]()

    })
}
