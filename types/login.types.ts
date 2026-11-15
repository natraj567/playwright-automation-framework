export interface LoginData {
    username: string;
    password: string;
}

export interface LoginTestData {
    validUser: LoginData;
    invalidUser: LoginData;
}

export interface LoginData {
    keyFilter: string;
    username: string;
    password: string;
    expectedResult: string;
}