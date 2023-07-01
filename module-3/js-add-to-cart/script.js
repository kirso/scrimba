import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import {
	getDatabase,
	ref,
	push,
	onValue,
	remove,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

const appSettings = {
	databaseURL:
		"http://addtocart-67519-default-rtdb.asia-southeast1.firebasedatabase.app/",
};

// Use the DB URL to initialise the app
const app = initializeApp(appSettings);
// Fed app object to setup in order to create DB object
const database = getDatabase(app);
// List reference
const shoppingListInDB = ref(database, "shoppingList");

const inputFieldEl = document.getElementById("input-field");
const addButtonEl = document.getElementById("add-button");
const shoppingListEl = document.getElementById("shopping-list");

addButtonEl.addEventListener("click", function () {
	let inputValue = inputFieldEl.value;

	// Do not let empty values to be accepted
	if (inputFieldEl.value === "") {
		alert("Add an item. Field can't be empty");
	} else push(shoppingListInDB, inputValue);

	clearInputFieldEl();
});

// Listens for changes in DB, it takes snapshot to run the code based on changes.
onValue(shoppingListInDB, function (snapshot) {
	if (snapshot.exists()) {
		// Transform object into Array
		let itemsArray = Object.entries(snapshot.val());
		//clear previous items
		clearShoppingListEl();
		if (snapshot.exists()) {
		}
		for (let i = 0; i < itemsArray.length; i++) {
			let currentItem = itemsArray[i];
			appendItemToShoppingListEl(currentItem);
		}
	} else {
		shoppingListEl.innerHTML = "";
	}
});

function clearShoppingListEl() {
	shoppingListEl.innerHTML = "";
}

function clearInputFieldEl() {
	inputFieldEl.value = "";
}

// Using create element to add items
function appendItemToShoppingListEl(item) {
	let itemID = item[0];
	let itemValue = item[1];
	let newEl = document.createElement("li");
	newEl.textContent = itemValue;

	newEl.addEventListener("dblclick", () => {
		let itemInDB = ref(database, `shoppingList/${itemID}`);
		remove(itemInDB);
	});

	shoppingListEl.append(newEl);
}
