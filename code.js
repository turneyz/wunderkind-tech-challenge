const buttons = document.querySelectorAll("button")

let buttonIdArray = []
const clicksObj = {}

buttons.forEach(btn => {buttonIdArray.push(btn.id)})

buttonIdArray.forEach(button => {
    clicksObj[button] = 0
})
// console.log(buttonIdArray)
// console.log(clicksObj)

buttons.forEach(btn => {

    btn.addEventListener('click', event => {
        let clicked = event.target.id

        for (let key in clicksObj) {
            if (clicked === key) {
                clicksObj[key] ++
                console.log(clicksObj)
            }
        }
    })
})

console.log('I appreciate you taking the time to review my submission. For clicks/opens metrics I have created an Object, clicksObj, that will log the update object on to the console after each click (easily changed to log after any event desired). The format of the object is {NameOfTheButton : AmountOfTimesClicked}')