// eslint-disable-next-line no-undef
const config = require('../config');


/* Testing - Check the availability of goods in warehouses POST /api/v1/warehouses/check */

const requestBody = 
{
    "products": [
        {
            "id": 5,
            "quantity": 1
        },
        {
            "id": 4,
            "quantity": 5
        }
    ]
}

// Testing that we get a response with 200 status code 
test('status should be 200', async () => {
	let actualStatus;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/warehouses/check`, {
			method: 'POST',
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

// Testing that the response body contains the names of all 4 warehouses
test('response body contains the names of all 4 warehouses', async () => {
	let actualResponseBody;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/warehouses/check`, {
			method: 'POST',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		actualResponseBody = await response.json();
	} catch (error) {
		console.error(error);
	}

	const expectedWarehouseNames = ['Food City', 'Big World', 'Fresh Food', 'Everything You Need'];

	for (let i = 0; i < expectedWarehouseNames.length; i++) {
        const warehouseName = expectedWarehouseNames[i];
        expect(actualResponseBody).toHaveProperty(warehouseName);
    }

});