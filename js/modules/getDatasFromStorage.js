import getDatas from "./lib/getDatas.js";

async function getDatasFromStorage(url) {
	let users = [];
	if (localStorage.getItem("users")) {
		users = JSON.parse(localStorage.getItem("users"));
	} else {
		users = await getDatas(url);
		localStorage.setItem("users", JSON.stringify(users));
	}
	return users;
}
export default getDatasFromStorage;
