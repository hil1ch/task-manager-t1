import cards from "./data"

function fetchCards() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(cards)
        }, 10)
    })
}

export default fetchCards