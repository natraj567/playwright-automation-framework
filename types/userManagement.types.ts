// Employee information
export interface employeeDetails {
    firstName: string;
    lastName: string;
    middleName: string;
    employeeID: number;
}

// Employee test scenarios
export interface EmployeeTestData {
    validEmployee: employeeDetails;
    anotherEmployee: employeeDetails;
}

// Data-driven employee test
export interface EmployeeScenario {
    keyFilter: string;
    firstName: string;
    middleName: string;
    lastName: string;
    employeeId: string;
    expectedResult: string;
}