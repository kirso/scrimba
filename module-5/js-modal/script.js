const modal = document.getElementById("modal");
const closeBtn = document.getElementById("modal-close-btn");

const consentForm = document.getElementById("login-form");

const text = document.getElementById("modal-text");

const declineBtn = document.getElementById("decline-btn");

const buttons = document.getElementById("modal-btns");

declineBtn.addEventListener("mouseover", () => {
	buttons.classList.toggle("reverse");
});

setTimeout(function () {
	modal.style.display = "inline";
}, 1500);

closeBtn.addEventListener("click", () => {
	modal.style.display = "none";
});

consentForm.addEventListener("submit", (event) => {
	event.preventDefault();

	const consentFormData = new FormData(consentForm);
	const name = consentFormData.get("full-name");

	text.innerHTML = `
		<div class="modal-inner-loading">
    	<img src="images/loading.svg" class="loading">
    	<p id="uploadText">
        Uploading your data to the dark web...
    </p>
</div>`;

	setTimeout(function () {
		document.getElementById("uploadText").innerText = `Making the sale`;
	}, 2000);

	setTimeout(function () {
		closeBtn.disabled = false;

		document.getElementById(
			"modal-inner"
		).innerHTML = `<h2> Thanks <span class="modal-display-name">${name}</span>, you sucker!</h2>
    <p>We just sold the rights to your eternal soul.</p>
    <div class="idiot-gif">
        <img src="images/pirate.gif">
    </div>
    `;
	}, 4000);
});
