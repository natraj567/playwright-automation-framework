export class TestDataGenerator {

    static generateEmployeeId(): string {
        return `EMP${Math.floor(100000 + Math.random() * 900000)}`;
    }

}