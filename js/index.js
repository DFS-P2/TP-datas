import getDatas from "./modules/getDatas.js";
import feedTbody from "./modules/feedTbody.js";

const usersDatasUrl = "./datas/users.json";

const users = await getDatas(usersDatasUrl);

if (users) {
	feedTbody(users);
}
