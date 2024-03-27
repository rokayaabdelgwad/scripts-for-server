const axios = require('axios');
async function callEndpoint() {
    try {
        const endpointUrl = 'https://test.rasid.com.eg:4000/testing/Make-Server-Go-Down/';
        await axios.get(endpointUrl);
        console.log('Endpoint called successfully.');
    } catch (error) {
        console.error('Error calling endpoint:', error.message);
    }
}
console.log('Bringing the server down...');
const serverProcess = spawn('node', ['server/server.js']);

serverProcess.stdout.on('data', (data) => {
    console.log(`Server: ${data}`);
});
console.log('Calling the endpoint...');
callEndpoint();