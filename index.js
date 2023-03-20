/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const inputBtnConvertEl = document.getElementById("btnConvert")
const inputInputEl = document.querySelector("#input-input")
const lengthEl = document.getElementById("length")
const volumeEl = document.querySelector("#volume")
const weightEl = document.querySelector("#weight")

inputBtnConvertEl.addEventListener("click", () => {
    const val = inputInputEl.value
    const results = [
        {meters : 0},
        {feets : 0},
        {liters : 0},
        {gallons : 0},
        {kilograms : 0},
        {pounds : 0}
    ]

    results[0].meters = +(3.281 * val).toFixed(3)
    results[1].feets = +(val / 3.281).toFixed(3)
    results[2].liters = +(0.264 * val).toFixed(3) 
    results[3].gallons = +(val / 0.264).toFixed(3)
    results[4].kilograms = +(2.204 * val).toFixed(3)
    results[5].pounds = +(val / 2.204).toFixed(3)

    lengthEl.textContent = `${val} meters = ${results[1].feets} feets | ${val} feets = ${results[0].meters} meters`
    volumeEl.textContent = `${val} liters = ${results[3].gallons} gallons | ${val} gallons = ${results[2].liters} liters`
    weightEl.textContent = `${val} kilos = ${results[5].pounds} pounds | ${val} pounds = ${results[4].kilograms} kilos`

})

