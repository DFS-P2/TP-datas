import createTrUser from "./createTrUser.js";

export default function displayUsers(users) {
	const tbody = document.querySelector("tbody");
	tbody.innerHTML = "";
	users.forEach((user) => {
		const tr = createTrUser(user);
		tbody.appendChild(tr);
	});
}
