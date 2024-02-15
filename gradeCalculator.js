require('dotenv').config(); // Load environment variables

const { GoogleSpreadsheet } = require('google-spreadsheet');
const { JWT } = require('google-auth-library');

const serviceAccountAuth = new JWT({
    email: process.env.CLIENT_EMAIL, // Use CLIENT_EMAIL from environment variables
    key: process.env.PRIVATE_KEY.replace(/\\n/g, '\n'), // Use PRIVATE_KEY from environment variables
    scopes: [
        'https://www.googleapis.com/auth/spreadsheets',
    ],
});

const doc = new GoogleSpreadsheet('1rdxiEclRRqs3RP79PJWutw3sicNI8Sle31k3_ZkBVcI', serviceAccountAuth);

doc.loadInfo().then(() => {
    console.log('Document Title:', doc.title); // Print document title
}).catch(error => {
    console.error('Error loading document info:', error); // Print error if loading fails
});

function calculateNaf(m) {
    const minNaf = 50 * 2 - m;
    return minNaf;
}

async function calculateGrades() {
    try {
        await doc.loadInfo(); // Ensure document info is loaded

        const sheet = doc.sheetsByIndex[0];
        await sheet.loadCells('A4:H27'); // Load cells from A4 to H27

        for (let row = 3; row < 27; row++) {
            let absences = sheet.getCell(row, 2).value;
            let result = "";
            let naf = 0;

            let m = 0;
            
            for (let r = 3; r < 6; r++) {
                let p = sheet.getCell(row, r).value;
                m += p;
            }
            
            m = m / 3;
            m = Math.ceil(m);
            
            if (absences > 15) {
                result = "Reprovado por Falta";
            } else {
                if (m < 50) {
                    result = "Reprovado por Nota";
                } else if (50 <= m && m < 70) {
                    result = "Exame Final"
                    naf = calculateNaf(m);
                } else if (m >= 70) {
                    result = "Aprovado"
                }
            }

            sheet.getCell(row, 6).value = result; // Set result in 6th column
            sheet.getCell(row, 7).value = naf; // Set naf in 7th column
        }
        await sheet.saveUpdatedCells(); // Save updated cells to the sheet
        console.log('Data written to the spreadsheet successfully!'); // Log success message
    } catch (error) {
        console.error('Error calculating and writing to the spreadsheet:', error); // Log error if calculation or writing fails
    }
}

calculateGrades(); // Call the function to start calculating grades
