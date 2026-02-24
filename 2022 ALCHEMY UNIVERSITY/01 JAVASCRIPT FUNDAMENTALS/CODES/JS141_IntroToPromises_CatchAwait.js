// handleResults.js

const { getResults } = require('./lab');
const { sendResults } = require('./messaging');
const { logResponse, logError } = require('./logs');

async function handleResults(patientId) {
    try {
        const results = await getResults(patientId);
        const response = await sendResults(patientId, results);
        const fin = await logResponse(response);
        }
    catch(ex1) {
        logError(ex1);
    }
}

module.exports = handleResults;