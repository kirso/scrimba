import { catsData } from './data.js'

const radios = document.getElementById('emotion-radios')

radios.addEventListener('change', highlightCheckedOption)

function highlightCheckedOption(e) {
	document.getElementById(e.target.id).parentElement.classList.add('highlight')
	const radios = document.getElementsByClassName('highlight')
	for (let radio in radios) {
		radio.parentElement.classList.remove('highlight')
	}
}

function getEmotionsArray(cats) {
	const emotionsArr = []
	for (let cat of cats) {
		for (let emotion of cat.emotionTags) {
			// check for duplicates
			if (!emotionsArr.includes(emotion)) {
				emotionsArr.push(emotion)
			}
		}
	}
	return emotionsArr
}

function renderEmotionsRadios(cats) {
	let radioItems = ``
	const emotions = getEmotionsArray(cats)
	for (let emotion of emotions) {
		radioItems += `
		<div class="radio">
			<label for=${emotion}>${emotion}</label>
			<input
			type="radio"
			id="${emotion}"
			value="${emotion}"
			name="emotions"
			>

		</div>`
	}
	radios.innerHTML = radioItems
}

renderEmotionsRadios(catsData)
