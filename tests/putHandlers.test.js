// eslint-disable-next-line no-undef
const config = require('../config');

/*  Testing - Grocery item price change PUT /api/v1/products/:id */

// Testing that we get a response with 200 status code when using valid ID
test('status should be 200', async () => {

	const productId = 7
	const requestBody = {
	"price": 64
	}
	let actualStatus;

    try {
		const response = await fetch(`${config.API_URL}/api/v1/products/${productId}`, {
			method: 'PUT',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		actualStatus = response.status;
	} catch (error) {
		console.error(error);
	}
	expect(actualStatus).toBe(200);
});

// Testing that we get a response with 404 Not Found status code when using invalid ID
test('status should be 404', async () => {

	const productId = 732
	const requestBody = {
		"price": 64
	}
	let actualStatus;

    try {
		const response = await fetch(`${config.API_URL}/api/v1/products/${productId}`, {
			method: 'PUT',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		actualStatus = response.status;
	} catch (error) {
		console.error(error);
	}
	expect(actualStatus).toBe(404);
});

// Testing that the response body is '"ok" : true' when succesfull
test('response body is "ok":true', async () => {

	const productId = 7
	const requestBody = {
	"price": 64
	}
	let actualResponseBody;

    try {
		const response = await fetch(`${config.API_URL}/api/v1/products/${productId}`, {
			method: 'PUT',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		actualResponseBody = await response.json();
	} catch (error) {
		console.error(error);
	}

	const expectedResponseBody = {"ok":true};

    expect(actualResponseBody).toEqual(expectedResponseBody);
});

// Testing that the price of product was changed
test('response body is "ok":true', async () => {

	const productId = 7
	const productPrice = 64
	const requestBody = {
	"price": productPrice
	}
	let actualResponseBody;

    try {
		//making PUT request
		const request = await fetch(`${config.API_URL}/api/v1/products/${productId}`, {
			method: 'PUT',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		// making GET request to see updated product price
		/* this is what the response body looks like for the GET request
					{
				"id": 7,
				"name": "Potato Chips - Classic Salted",
				"price": 64,
				"weight": 150,
				"units": "g"
			}
		*/
		const response = await fetch(`${config.API_URL}/api/v1/products/${productId}`);
		actualResponseBody = await response.json();
	} catch (error) {
		console.error(error);
	}

    expect(actualResponseBody).toHaveProperty("price", productPrice);
});