const axios = require('axios');

// Dummy function to simulate data integration
async function integrateData() {
  try {
    // Simulate pulling data from an ERP system (replace with real endpoint)
    let response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
    console.log('Pulled data:', response.data);

    // Simulate pushing data back (this is just a placeholder)
    // In a real scenario, you might do:
    // await axios.post('https://erp.example.com/api/update', response.data);
    console.log('Data integration completed successfully.');
  } catch (error) {
    console.error('Integration error:', error.message);
  }
}

integrateData();
