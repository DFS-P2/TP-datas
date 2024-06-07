import feedTbody from "./feedTbody.js";

export default function handleSearch(users) {
	const searchInput = document.querySelector("#searchInput");
	searchInput.addEventListener("keyup", (event) => {
		const searchValue = event.target.value;
		const filteredUsers = users.filter(
			(user) =>
				user.nom.toLowerCase().includes(searchValue) ||
				user.prenom.toLowerCase().includes(searchValue) ||
				user.email.toLowerCase().includes(searchValue) ||
				user.role.toLowerCase().includes(searchValue)
		);
		feedTbody(filteredUsers);
	});
}
