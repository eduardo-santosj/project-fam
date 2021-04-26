export const apiHelpers = {
	handleStatus,
	handleResponse
}

function handleStatus(response) {
	if (response.ok) {
		return Promise.resolve(response);
	}
	if (response.status === 401 || response.status === 400) {
		return Promise.reject(response);
	}
	return Promise.reject(response.json());
}

function handleResponse(response) {
	return response.json();
}

