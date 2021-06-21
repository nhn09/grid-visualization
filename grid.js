
const container = document.querySelector(".container")
const just = document.querySelector(".click-me")
const align = document.querySelector(".click-align")
const spaceBetween = document.querySelector(".space-between")
const spaceAround = document.querySelector(".space-around")
const spaceevenly = document.querySelector (".space-evenly")

const justcontS = document.querySelector (".justify-items-start")
const justcontE = document.querySelector (".justify-items-end")
const justcontC = document.querySelector (".justify-items-center")

const aligncontS = document.querySelector (".align-items-start")
const aligncontE = document.querySelector (".align-items-end")
const aligncontC = document.querySelector (".align-items-center")

const reset = document.querySelector(".reset")
let containerStyle = window.getComputedStyle(container)


function eventCreate ( buttonName,style,stylenot, styleyes, styleName)
{
    buttonName.addEventListener("click", e =>
{
    
    if( containerStyle.getPropertyValue(style)==stylenot)
    {
        container.style[styleName]=styleyes 
    
    }

    else container.style[styleName]=stylenot

})
}

function eventCreateTwo ( buttonName, styleyes,style,styleName)
{
    buttonName.addEventListener("click", e =>
{
    
    let previous = containerStyle.getPropertyValue(style)
    //console.log("Here is previous condition "+previous)

    if(previous!=styleyes)
    {
        container.style[styleName]=styleyes
    }

    else 
    {
        alert("already justify content value set as "+ styleyes)
    }
})
}


eventCreate( just,"justify-content","end", "start","justifyContent")
eventCreate( align,"align-content","end", "start","alignContent")
eventCreateTwo(spaceBetween,"space-between","justify-content","justifyContent")
eventCreateTwo(spaceAround,"space-around","justify-content","justifyContent")
eventCreateTwo(spaceevenly,"space-evenly","justify-content","justifyContent")

eventCreateTwo (justcontS,"start","justify-items","justifyItems")
eventCreateTwo (justcontE,"end","justify-items","justifyItems")
eventCreateTwo (justcontC,"center","justify-items","justifyItems")

eventCreateTwo (aligncontS,"start","align-items","alignItems")
eventCreateTwo (aligncontE,"end","align-items","alignItems")
eventCreateTwo (aligncontC,"center","align-items","alignItems")


    reset.addEventListener("click", e =>
        {

    container.style.justifyContent = "start"
    container.style.alignContent = "start"
    container.style.justifyItems = "normal"
    container.style.alignItems = "normal"
        })
    
