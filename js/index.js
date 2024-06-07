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
	feedTbody(users);
	handleSearch(users);
}

// const tab = [
// 	{
// 		id: 1,
// 		nom: "Turing",
// 		prenom: "Alan",
// 	},
// 	{
// 		id: 2,
// 		nom: "Lovelace",
// 		prenom: "Ada",
// 	},
// ];
// const searchValue = "lan";
// const filteredTab = tab.filter(
// 	(element) =>
// 		element.nom.toLowerCase().includes(searchValue) ||
// 		element.prenom.toLowerCase().includes(searchValue)
// );
// console.log(filteredTab);
