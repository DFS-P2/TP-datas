async function getDatas(url) {
	try {
		const response = await fetch(url);
		if (response.ok) {
			return response.json();
		}
		return false;
	} catch (err) {
		return false;
	}
}
export default getDatas;
