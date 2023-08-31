import { catsData } from './data.js'

const radios = document.getElementById('emotion-radios')
const getImageBtn = document.getElementById('get-image-btn')
const gifsOnlyOption = document.getElementById('gifs-only-option')

getImageBtn.addEventListener('click', getMatchingCatsArray)

radios.addEventListener('change', highlightCheckedOption)

function highlightCheckedOption(e) {
	const radios = document.getElementsByClassName('radio')
	for (let radio of radios) {
		radio.classList.remove('highlight')
	}
	document.getElementById(e.target.id).parentElement.classList.add('highlight')
}

function getMatchingCatsArray() {
	if (document.querySelector('input[type="radio"]:checked')) {
		const selectedEmotion = document.querySelector('input[type="radio"]:checked').value
		const isGif = gifsOnlyOption.checked

		const filteredCatsArray = catsData.filter((cat) => {
			return cat.emotionTags.includes(selectedEmotion)
		})
		console.log(filteredCatsArray)
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
