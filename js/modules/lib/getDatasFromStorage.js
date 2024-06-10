/**
 * @param {*} storageKey
 * @param {*} datasUrl : chemin du fichier json des données
 * @returns datas[] : par exemple un tableau de users
 */

async function getDatasFromStorage(storageKey, datasUrl) {
	let datas = [];
	if (localStorage.getItem(storageKey)) {
		datas = JSON.parse(localStorage.getItem(storageKey));
	} else {
		datas = await getDatas(datasUrl);
		localStorage.setItem(storageKey, JSON.stringify(datas));
	}
	return datas;
}
export default getDatasFromStorage;
