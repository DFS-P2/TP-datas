import { usersDatasUrl } from "./config/config.js";
import getDatasFromStorage from "./modules/getDatasFromStorage.js";
import handleSort from "./modules/handleSort.js";
import displayUsers from "./modules/displayUsers.js";
import handleSearch from "./modules/handleSearch.js";

const users = await getDatasFromStorage(usersDatasUrl);

if (users) {
	handleSort(users);
	displayUsers(users);
	handleSearch(users);
}
