async function fetchData() {
  try {
    const response = await fetch('http://api.marketstack.com/v1/eod?access_key=fddb01f7541eca12466b59cffdbe9b15&symbols=AAPL'); // Replace with your API endpoint
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json(); // Or .text() if the response is not JSON
    const symbol = data.data[0].symbol;
    const volume = data.data[0].volume;
    console.log(data);
    document.cookie = `symbol=${symbol}; path=/`;
    document.cookie = `volume=${volume}; path=/`;
    console.log(`Symbol: ${symbol}, Volume: ${volume}`);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}




fetchData();

function getCookie(name) {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i].trim();
        // Does this cookie string begin with the name we want?
        if (cookie.startsWith(name + '=')) {
            return decodeURIComponent(cookie.substring(name.length + 1));
        }
    }
    return '';
}

function fillFormFromCookies() {
    const symbol = getCookie('symbol');
    const volume = getCookie('volume');

    if (symbol) {
        document.getElementById('symbol').value = symbol;
    }
    if (volume) {
        document.getElementById('volume').value = volume;
    }
}

// Call the function when the page loads
window.onload = fillFormFromCookies;

function saveMembershipCookieOnSubmit(event) {
  const membershipInput = document.getElementById('membership');
  if (!membershipInput) return;
  const membership = membershipInput.value || '';
  // encode value, set path and optional max-age (e.g., 30 days)
  document.cookie = `membership=${encodeURIComponent(membership)}; path=/; max-age=${60 * 60 * 24 * 30}`;
}

// Attach listener to the form submit event so cookie is set before navigation
const form = document.querySelector('form');
if (form) {
  form.addEventListener('submit', saveMembershipCookieOnSubmit);
}