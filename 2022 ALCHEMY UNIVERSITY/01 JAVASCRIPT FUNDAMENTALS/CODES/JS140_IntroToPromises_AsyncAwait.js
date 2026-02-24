// handleResults.js

const { getResults } = require('./lab');
const { sendResults } = require('./messaging');
const { logResponse, logError } = require('./logs');

async function handleResults(patientId) {
    const results = await getResults(patientId);
    console.log(results);

    const response = await sendResults(patientId, results);
    console.log(response);

    const fin = await logResponse(response);

    console.log(fin);
    return fin;
}

module.exports = handleResults;