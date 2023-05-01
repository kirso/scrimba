const posts = [
	{
		name: "Vincent van Gogh",
		username: "vincey1853",
		location: "Zundert, Netherlands",
		avatar: "img/van-gogh-avatar.png",
		post: "img/van-gogh-selfie.png",
		comment: "just took a few mushrooms lol",
		likes: "21,492",
	},
	{
		name: "Gustave Courbet",
		username: "gus1819",
		location: "Ornans, France",
		avatar: "img/gustave-avatar.png",
		post: "img/gustave-selfie.png",
		comment: "i'm feelin a bit stressed tbh",
		likes: "12,502",
	},
	{
		name: "Joseph Ducreux",
		username: "jd1735",
		location: "Paris, France",
		avatar: "img/ducreux-avatar.png",
		post: "img/ducreux-selfie.png",
		comment:
			"gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
		likes: "15,137",
	},
];

const mainEl = document.getElementById("main");

let html = "";

for (let i = 0; i < posts.length; i++) {
	html += `
			<section class="user">
				<img src="img/van-gogh-avatar.png" alt="" />
				<div class="user-wrapper">
					<p class="name">${posts[i].name}</p>
					<p class="location">${posts[i].location}</p>
				</div>
			</section>
			<section class="selfie">
				<img src="${posts[i].post}" alt="" />
			</section>
			<section class="bottom">
				<div class="icons">
					<img class="icon" id="like" src="/img/heart.png" alt="" />
					<img class="icon" src="/img/chat.png" alt="" />
					<img class="icon" src="/img/send.png" alt="" />
				</div>
				<p class="likes">${posts[i].likes}</p>
				<p class="username-comment">
					<span>Vincey</span>${posts[i].comment}.
				</p>
			</section>
      <div class="footer"></div>
  `;
}

mainEl.innerHTML = html;

let like = getElementById("like").addEventListener("click", () => {
	let integer = Number(posts.likes);
	return (integer += 1);
});
