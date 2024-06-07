import getDatas from "./modules/getDatas.js";
import feedTbody from "./modules/feedTbody.js";
import handleSearch from "./modules/handleSearch.js";

const usersDatasUrl = "./datas/users.json";

let users = [];

if (localStorage.getItem("users")) {
	users = JSON.parse(localStorage.getItem("users"));
} else {
	users = await getDatas(usersDatasUrl);
	localStorage.setItem("users", JSON.stringify(users));
}

if (users) {
	const flechesNom = document.querySelectorAll(".fleche");
	flechesNom.forEach((fleche) => {
		fleche.addEventListener("click", () => {
			console.log(fleche.dataset.direction); // "asc" ou "desc"
			sortByNom(fleche.dataset.direction);
			feedTbody(users);
		});
	});
	console.log(flechesNom);
	function sortByNom(direction) {
		console.log(users);
		let sortDirection;
		if (direction == "asc") {
			sortDirection = 1;
		} else if (direction == "desc") {
			sortDirection = -1;
		}
		users.sort((a, b) => {
			const x = a.nom.toLowerCase();
			const y = b.nom.toLowerCase();
			if (x < y) return -1 * sortDirection;
			if (x > y) return 1 * sortDirection;
			return 0;
		});
	}

	feedTbody(users);
	handleSearch(users);
}
