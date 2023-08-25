// eslint-disable-next-line no-undef
const config = require('../config');

// Testing - Get a list of warehouses GET /api/v1/warehouses

// Testing that we get 200 status code in response
test('status should be 200', async () => {
	let actualStatus;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/warehouses`);
		actualStatus = response.status;
	} catch (error) {
		console.error(error);
	}
	expect(actualStatus).toBe(200);
});

// Testing that the number of warehouses is more than 0
test('number of warehouses should be greater than 0', async () => {
    let actualResponseBody;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/warehouses`);
		actualResponseBody = await response.json();
    } catch (error) {
        console.error(error);
    }
    const countStores = actualResponseBody.length;
    expect(countStores).toBeGreaterThan(0);
	console.log('Amount of warehouses is ' + countStores)
}); 

// Testing that the name of first and last warehouse are correct
test('First Warehouse is "Everything You Need" and last is "Fresh Food"', async () => {
	let actualResponseBody
	try {
		const response = await fetch(`${config.API_URL}/api/v1/warehouses`);
		actualResponseBody = await response.json();
	} catch (error) {
		console.error(error);
	}
	expect(actualResponseBody[0].name).toBe("Everything You Need");
	expect(actualResponseBody[actualResponseBody.length - 1].name).toBe("Big World");
});


// Testing that the opening hour is earlier than the closing hour
test('the opening hour is earlier than the closing hour', async () => {
	let actualResponseBody
    try {
		const response = await fetch(`${config.API_URL}/api/v1/warehouses`);
		actualResponseBody = await response.json();
    } catch (error) {
        console.error(error);
    }
    // Create a variable to store the result of comparison
    const result = []
    // Iterate through each warehouse
    for (let i = 0; i < actualResponseBody.length; i++) {
        const startWorkingHours = actualResponseBody[i]["workingHours"]["start"];
        const endWorkingHours = actualResponseBody[i]["workingHours"]["end"];
        // Store result of comparison into the 'result' variable
        result.push(startWorkingHours < endWorkingHours)
    }
    expect(result).not.toContain(false)
})