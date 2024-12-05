import { getCelebrities } from "./database.js"

const celebrities = getCelebrities()

document.addEventListener(
    "click",
    (clickCelebrityEvent) => {
        const celebrityClicked = clickCelebrityEvent.target

        if (celebrityClicked.dataset.type === "celebrity") {
            window.alert(`${celebrityClicked.dataset.name} is a ${celebrityClicked.dataset.sport} star`)
        }
    }
)

export const Celebrities = () => {
    let html = "<ol>"

    for (const celebrity of celebrities) {
        html += `<li 
                    data-id="${celebrity.id}" 
                    data-type="celebrity"
                    data-name="${celebrity.name}"
                    data-sport="${celebrity.sport}"
                    id="star--${celebrity.id}">
                    ${celebrity.name}
                </li>`
    }

    html += "</ol>"
    return html
}
