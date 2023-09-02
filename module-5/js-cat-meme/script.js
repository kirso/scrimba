import { catsData } from './data.js'

const radios = document.getElementById('emotion-radios')
const getImageBtn = document.getElementById('get-image-btn')
const gifsOnlyOption = document.getElementById('gifs-only-option')
const memeModal = document.getElementById('meme-modal')
const memeModalInner = document.getElementById('meme-modal-inner')
const closeBtn = document.getElementById('meme-modal-close-btn')

radios.addEventListener('change', highlightCheckedOption)
closeBtn.addEventListener('click', () => closeModal)
getImageBtn.addEventListener('click', renderCat)
function highlightCheckedOption(e) {
	const radios = document.getElementsByClassName('radio')
	for (let radio of radios) {
		radio.classList.remove('highlight')
	}
	document.getElementById(e.target.id).parentElement.classList.add('highlight')
}
function closeModal() {
	memeModal.style.display = 'none'
}
function renderCat() {
	const catObject = getSingleCatObject()
	memeModalInner.innerHTML = `
	<img class='cat-img'
	src="./img/${catObject.image}"
	alt="${catObject.alt}"
	>`
	memeModal.style.display = 'flex'
}
function getSingleCatObject() {
	const catsArray = getMatchingCatsArray()
	const randomCatIndex = Math.floor(Math.random() * catsArray.length)
	return catsArray.length === 1 ? catsArray[0] : catsArray[randomCatIndex]
}

function getMatchingCatsArray() {
	if (document.querySelector('input[type="radio"]:checked')) {
		const selectedEmotion = document.querySelector('input[type="radio"]:checked').value
		const isGif = gifsOnlyOption.checked

		const matchingCatsArray = catsData.filter((cat) => {
			if (isGif) {
				return cat.emotionTags.includes(selectedEmotion) && cat.isGif === true
			} else return cat.emotionTags.includes(selectedEmotion)
		})
		return matchingCatsArray
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
