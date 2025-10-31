async function fetchData() {
  try {
    const response = await fetch('http://api.marketstack.com/v1/eod?access_key=fddb01f7541eca12466b59cffdbe9b15&symbols=AAPL'); // Replace with your API endpoint
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json(); // Or .text() if the response is not JSON
    console.log(data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

fetchData();