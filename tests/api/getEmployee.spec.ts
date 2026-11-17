
import { test, expect } from '../../fixtures/test-fixtures';

test('Verify Get Employee API', async ({ apiContext }) => {

    const baseURL = process.env.ORANGEHRM_API_BASE_URL;

    // Validate base URL
    expect(baseURL).toBeTruthy();

    // Send GET request
    const response = await apiContext.get(`${baseURL}/api/v2/pim/employees/113`);

    // Validate status code
    expect(response.status()).toBe(200);

    // Get response body
    const responseBody = await response.json();

    // Validate employee details
    expect(responseBody.data.empNumber).toBe(113);

    // Extract employee details
    const employeeID = responseBody.data.empNumber;
    const lastName = responseBody.data.lastName;
    const firstName = responseBody.data.firstName;

    // Print response details
    console.log('Status:', response.status());
    console.log('Employee ID:', employeeID);
    console.log('Last Name:', lastName);
    console.log('First Name:', firstName);
});
