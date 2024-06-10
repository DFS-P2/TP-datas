import { usersDatasUrl as datasUrl } from "../config/config.js";
import getDatasFromStorage from "./lib/getDatasFromStorage.js";

/**
 * @param {string} storageKey : la clé du local storage pour stocker les datas (par ex "users")
 * @returns datas[] : par exemple un tableau de users
 */
async function getDatasFromStorageOrJson(storageKey) {
	return getDatasFromStorage(storageKey, datasUrl);
}

export default getDatasFromStorageOrJson;
