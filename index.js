/*const gifts = ["teddy","drone", "doll"]
function wrapGifts(gifts){
    for(let i = 0; i < gifts.length; i++){
        console.log(`Wrapped ${gifts[i]} and added a bow!`)
    }
    return gifts
}

wrapGifts(gifts)

*/

const name = []
const event = []


function writeCards(name, event){
    let greetings = []
    for(let i = 0; i<name.length ; i++){
            let currentName = name[i]
            greetings.push(`Thank you, ${currentName}, for the wonderful ${event} gift!`)
           // debugger
    }
    return greetings
}
////////////////////////////
let number = []

function countDown(number) {
    debugger

    while(number >= 0){

        console.log(number);
        number --;

    }

}