const characters = [
	"A",
	"B",
	"C",
	"D",
	"E",
	"F",
	"G",
	"H",
	"I",
	"J",
	"K",
	"L",
	"M",
	"N",
	"O",
	"P",
	"Q",
	"R",
	"S",
	"T",
	"U",
	"V",
	"W",
	"X",
	"Y",
	"Z",
	"a",
	"b",
	"c",
	"d",
	"e",
	"f",
	"g",
	"h",
	"i",
	"j",
	"k",
	"l",
	"m",
	"n",
	"o",
	"p",
	"q",
	"r",
	"s",
	"t",
	"u",
	"v",
	"w",
	"x",
	"y",
	"z",
	"0",
	"1",
	"2",
	"3",
	"4",
	"5",
	"6",
	"7",
	"8",
	"9",
	"~",
	"`",
	"!",
	"@",
	"#",
	"$",
	"%",
	"^",
	"&",
	"*",
	"(",
	")",
	"_",
	"-",
	"+",
	"=",
	"{",
	"[",
	"}",
	"]",
	",",
	"|",
	":",
	";",
	"<",
	">",
	".",
	"?",
	"/",
];

let inputEl1 = document.getElementById("input1");
let inputEl2 = document.getElementById("input2");
let alert = document.getElementById("alert");

function generateRandomChar() {
	let randomIndex = Math.floor(Math.random() * characters.length);

	return characters[randomIndex];
}

function generatePassword() {
	const length = document.getElementById("password-length").value;
	if (length >= 8 && length <= 16) {
		let password = "";
		for (let i = 0; i < length; i++) {
			password += generateRandomChar();
		}
		return password;
	} else {
		reset();
		alert("Password can't be more than 16 or less that 8 characters");
	}
}

function renderPasswords() {
	inputEl1.textContent = generatePassword();
	inputEl2.textContent = generatePassword();
}

function reset() {
	inputEl1.textContent = "";
	inputEl2.textContent = "";
}
