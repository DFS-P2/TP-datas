import getDatasFromStorageOrJson from "./modules/getDatasFromStorageOrJson.js";
import handleSort from "./modules/handleSort.js";
import displayUsers from "./modules/displayUsers.js";
import handleSearch from "./modules/handleSearch.js";

const users = await getDatasFromStorageOrJson("users");

if (users) {
	handleSort(users);
	displayUsers(users);
	handleSearch(users);
}
