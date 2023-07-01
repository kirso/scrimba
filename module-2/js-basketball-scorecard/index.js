let homeScore = 0;
let guestScore = 0;
let home = document.getElementById("homeScore");
let guest = document.getElementById("guestScore");

// HomeScore Buttons
function score(team, points) {
	if (team === home) {
		homeScore += points;
		team.textContent = homeScore;
	} else if (team === guest) {
		guestScore += points;
		team.textContent = guestScore;
	}
}

// Restart game
function endGame() {
	homeScore = 0;
	guestScore = 0;
	home.textContent = homeScore;
	guest.textContent = guestScore;
}


