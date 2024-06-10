import displayUsers from "./displayUsers.js";

export default function handleSort(users) {
	const flechesNom = document.querySelectorAll(".fleche");
	flechesNom.forEach((fleche) => {
		fleche.addEventListener("click", () => {
			sortByField(fleche.dataset.direction, fleche.dataset.field);
			displayUsers(users);
		});
	});
	function sortByField(direction, field) {
		let sortDirection;
		if (direction == "asc") {
			sortDirection = 1;
		} else if (direction == "desc") {
			sortDirection = -1;
		}
		users.sort((a, b) => {
			const x = a[field].toLowerCase();
			const y = b[field].toLowerCase();
			if (x < y) return -1 * sortDirection;
			if (x > y) return 1 * sortDirection;
			return 0;
		});
	}
}
