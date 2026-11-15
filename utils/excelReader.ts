import * as XLSX from 'xlsx';
import * as path from 'path';

export function readExcelData<T>(
    fileName: string,
    sheetName: string,
    keyFilter: string
): T[] {

    // Build the Excel file path
    const filePath = path.join(
    process.cwd(),
    'test-data',
    fileName
);

    // Read the Excel workbook
    const workbook = XLSX.readFile(filePath);

    // Print the actual Excel file and worksheet names
    console.log('Excel file path:', filePath);
    console.log('Available worksheet names:', workbook.SheetNames);
    console.log('Requested worksheet name:', sheetName);

    const worksheet = workbook.Sheets[sheetName];

    if (!worksheet) {
        throw new Error(
            `Worksheet "${sheetName}" not found. ` +
            `Available worksheets: ${workbook.SheetNames.join(', ')}`
        );
    }

    // Convert Excel rows into TypeScript objects
    const allData = XLSX.utils.sheet_to_json<Record<string, unknown>>(
        worksheet
    );

    // Filter data using keyFilter
    const filteredData = allData.filter(
        row => row['keyFilter'] === keyFilter
    );

    // Check whether matching test data exists
    if (filteredData.length === 0) {
        throw new Error(
            `No test data found for keyFilter "${keyFilter}" in "${fileName}".`
        );
    }

    // Return only matching test data
    return filteredData as T[];
}