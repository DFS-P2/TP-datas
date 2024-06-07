import getDatas from "./modules/getDatas.js";
import feedTbody from "./modules/feedTbody.js";

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
}
