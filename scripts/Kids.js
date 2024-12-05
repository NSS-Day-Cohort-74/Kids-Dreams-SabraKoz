import { getChildren } from "./database.js"

const children = getChildren()

document.addEventListener(
    "click",
    (clickKidEvent) => {
        const kidClicked = clickKidEvent.target

        if (kidClicked.dataset.type === "child") {
            window.alert(`${kidClicked.dataset.name}'s wish is ${kidClicked.dataset.wish}`)
        }
    }
)

export const Kids = () => {
    let html = "<ol>"

    for (const child of children) {
        html += `<li data-id="${child.id}" data-type="child" data-wish="${child.wish}" data-name="${child.name}">${child.name}</li>`
    }

    html += "</ol>"
    return html
}

