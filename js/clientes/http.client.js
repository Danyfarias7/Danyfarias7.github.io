const URL = "https://61d6f1eb35f71e0017c2e905.mockapi.io/api/v1/users/";

// ====================================================

//GET

async function get(url, id) {
	try {
		return await fetch(url + (id || "")).then((r) => r.json());
	} catch (error) {
		console.log("ERROR GET", error);
	}
}

// ====================================================

//POST

async function post(url, dato) {
	try {
		return await fetch(url, {
			method: "post",
			body: JSON.stringify(dato),
			headers: {
				"content-type": "application/json",
			},
		}).then((r) => r.json());
	} catch (error) {
		console.log("ERROR POST", error);
	}
}

// ====================================================

//PUT

async function put(url, id, dato) {
	try {
		return await fetch(url + id, {
			method: "put",
			body: JSON.stringify(dato),
			headers: {
				"content-type": "application/json",
			},
		}).then((r) => r.json());
	} catch (error) {
		console.log("ERROR PUT", error);
	}
}

// ====================================================

//DELETE

async function del(url, id) {
	try {
		return await fetch(url + id, { method: "delete" }).then((r) => r.json());
	} catch (error) {
		console.log("ERROR DELETE", error);
	}
}
