const length = document.getElementById("length")
const volume = document.getElementById("volume")
const mass = document.getElementById("mass")
const btnEl = document.getElementById("btn")
const inputEl = document.getElementById("input-el")

btnEl.addEventListener("click", () => {
	transform(inputEl.value)
})

function transform(input) {
	// Formulas
	let meterToFeet = Math.round(input * 2.2046244202 * 100) / 100
	let feetToMeter = Math.round(input * 0.3048 * 100) / 100
	let literToGallon = Math.round(input * 0.264172 * 100) / 100
	let gallonToLiter = Math.round(input * 3.785411784 * 100) / 100
	let kiloToPound = Math.round(input * 2.204624420183777 * 100) / 100
	let poundToKilo = Math.round(input * 0.453592 * 100) / 100
	// Insert

	length.textContent = `${input} meter = ${meterToFeet} feet | ${input} feet = ${feetToMeter} meter`
	volume.textContent = `${input} liters = ${literToGallon} gallons | ${input} gallons = ${gallonToLiter} liters`
	mass.textContent = `${input} kilos = ${kiloToPound} pounds | ${input} pounds = ${poundToKilo} kilos`
}
