import createTd from "./lib/createTd.js";

export default function createTrUser(user) {
	const tr = document.createElement("tr");

	tr.appendChild(createTd(user.id));
	tr.appendChild(createTd(user.nom));
	tr.appendChild(createTd(user.prenom));
	tr.appendChild(createTd(user.email));
	tr.appendChild(createTd(user.role));

	return tr;
}
