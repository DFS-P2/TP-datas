export default function createTd(fieldValue) {
	const td = document.createElement("td");
	td.textContent = fieldValue;
	return td;
}
