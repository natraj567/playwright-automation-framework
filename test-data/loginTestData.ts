import type { LoginTestData } from '../types/login.types';

export const loginTestData: LoginTestData = {
    validUser: {
        username: 'Admin',
        password: 'admin123'
    },
    invalidUser: {
        username: 'wrong',
        password: 'wrong123'
    }
};