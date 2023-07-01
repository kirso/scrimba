import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";

import {
	getDatabase,
	ref,
	push,
	onValue,
	remove,
	update,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

const appSettings = {
	databaseURL:
		"https://we-are-the-champions-128ed-default-rtdb.asia-southeast1.firebasedatabase.app/",
};

// DOM
const mainInputEl = document.getElementById("main-input");
const fromInputEl = document.getElementById("from-input");
const toInputEl = document.getElementById("to-input");
const btnEl = document.getElementById("btn");
const endorsementsList = document.getElementById("endorsements-list");
// Initialze the app with DB URL
const app = initializeApp(appSettings);
// Ged app object to setup in order to create DB object
const database = getDatabase(app);
// Endorsements list reference
const endorsements = ref(database, "endorsementsList");

btnEl.addEventListener("click", () => {
	// variables for values
	let mainInputValue = mainInputEl.value;
	let fromInputValue = fromInputEl.value;
	let toInputValue = toInputEl.value;
	// combine values in one object
	let allInputValues = {
		main: mainInputValue,
		from: fromInputValue,
		to: toInputValue,
		counter: 0,
	};
	// push the objects into firebase DB with the name of endorsements
	push(endorsements, allInputValues);
	clearInputFields("");
});

// Listen to our DB and see if anything has been input based on changes
onValue(endorsements, (snapshot) => {
	if (snapshot.exists()) {
		// transform object into array
		let endorsementArr = Object.entries(snapshot.val());
		// clear previous values
		clearEndorsementList();
		if (snapshot.exists()) {
		}
		for (let i = 0; i < endorsementArr.length; i++) {
			let currentEndorsement = endorsementArr[i];
			appendEndorsement(currentEndorsement);
		}
	} else {
		clearEndorsementList();
	}
});

// Clear input field values after submission
function clearInputFields(value) {
	mainInputEl.value = fromInputEl.value = toInputEl.value = "";
}

function clearEndorsementList() {
	endorsementsList.innerHTML = "";
}

function appendEndorsement(value) {
	let itemId = value[0];
	let fromValue = value[1].from;
	let mainValue = value[1].main;
	let toValue = value[1].to;
	let counterValue = value[1].counter;
	let endorsementRef = ref(database, `endorsementsList/${itemId}`);
	let counterRef = ref(database, `endorsementsList/${itemId}`);
	let newEl = document.createElement("li");

	newEl.innerHTML = `
	<div id="front">
    <p><span>From ${fromValue}</span></p>
		<img id="delete" src="/img/delete.svg"></img>
	</div>
    <p>${mainValue}</p>
    <div id="last-line">
    <p><span> ${toValue}</span></p>
      <div id="likes">
        <img id="heart" src="/img/heart.svg"></img>
        <p id="counter">${counterValue}</p>
      </div>
    </div>
`;

	// Delete endorsement
	newEl.querySelector("#delete").addEventListener("click", () => {
		remove(endorsementRef);
	});

	// Add event listener to the heart element
	newEl.querySelector("#heart").addEventListener("click", () => {
		if (counterValue % 2 === 0) {
			counterValue++;
		} else counterValue--;
		// Update takes in an object
		const likeValue = { counter: counterValue };
		// Update the value
		update(counterRef, likeValue)
			.then(() => {
				console.log("Value updated successfully.");
			})
			.catch((error) => {
				console.error("Error updating value:", error);
			});
	});

	endorsementsList.append(newEl);
}
