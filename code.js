const buttons = document.querySelectorAll("button")

// const buttonMap = new Map()

// const buttonObj = new Object()

// buttons.forEach(button => {
//     buttonObj.push(button.id)
// })
// console.log(buttonMap)


// buttons.forEach(button => {
//     console.log(button.id)
// })

let buttonIdArray = []

buttons.forEach(btn => {buttonIdArray.push(btn.id)})

buttonIdArray.forEach(button => {
    button.clicks = 0
})
console.log(buttonIdArray)

// const buttonMap = buttonIdArray.map(btn => ({[btn]: 0}))
// console.log(buttonMap)




buttons.forEach(btn => {

    btn.addEventListener('click', event => {
        console.log(event.target.id)
    })
})