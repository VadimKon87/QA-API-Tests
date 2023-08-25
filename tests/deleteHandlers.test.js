// eslint-disable-next-line no-undef
const config = require('../config');

/* Testing deleting a kit DELETE /api/v1/kits/:id */

// Testing that we get a response with 200 status code
test('status should be 200', async () => {

	const kitId = 1
	let actualStatus;

    try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/${kitId}`, {
			method: 'DELETE',
		});
		actualStatus = response.status
	} catch (error) {
		console.error(error);
	}
	expect(actualStatus).toBe(200);
});

// Testing that the response body is '"ok" : true' when succesfull
test('response body is "ok":true', async () => {

	const kitId = 2
	let actualResponseBody;

	try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/${kitId}`, {
			method: 'DELETE',
		});
		actualResponseBody = await response.json();
	} catch (error) {
		console.error(error);
	}

	const expectedResponseBody = {"ok":true};

    expect(actualResponseBody).toEqual(expectedResponseBody);
});