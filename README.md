In this project there are tests for checking GET, POST, PUT and DELETE methods for various Urban Grocers app APIs.
To run all tests use 'npx jest' command, to run seperate tests use 'npx jest filename' (e.g. 'npx jest getHandlers.test.js')

1) In the getHandlers.test.js file getting a list of warehouses using GET /api/v1/warehouses is tested.
    First test is to check that the status code of the response is 200 OK. 
    The three other tests are for checking the response body:
        a. Testing that the number of warehouses is more than 0.
        b. Testing that the name of first and last warehouse are correct.
        c. Testing that the opening hour is earlier than the closing hour.


2) In the postHandlers.test.js file the API for Checking the availability of goods in warehouses using POST /api/v1/warehouses/check is tested.
    First test is to check that the status code of the response is 200 OK. 
    The second test checks that the response body contains the names of all 4 warehouses, because all responses must contain information on product availability for each of the 4 warehouses.

3) In the putHandler.test.js file the API for changing the price of a grocery item using PUT /api/v1/products/:id is tested.
    First test is to check that the status code of the response is 200 OK when a valid product ID is used.
    Second test is to check that the status code of the response is 404 Not Found when an invalid product ID is used.
    Third test checks that the response body is '"ok" : true' when price changed successfully.
    And lastly we use a GET /api/v1/products/:id using the same product ID to check that the response body contains the new price.

4) In the deleteHandlers.test.js file the API to delete a kit DELETE /api/v1/kits/:id is tested.
    First test is to check that the status code of the response is 200 OK. 
    Second test checks that the response body is '"ok" : true' when a kit is deleted successfully.

To run all tests use 'npx jest' command, to run seperate tests use 'npx jest filename' (e.g. 'npx jest getHandlers.test.js')

    


