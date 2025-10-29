    const tile=document.getElementById('tile');
    // document.addEventListener('click',()=>{
    //   tile.classList.add('show');
    //   tile.setAttribute('aria-hidden','false');
    // },{once:true});


    // Get DOM elements
const input = document.getElementById('numberInput');
const display = document.getElementById('display');
// const hiddenBox = document.getElementById('hiddenBox');

// Function to update the display with the input value
function updateDisplay() {
    display.textContent = input.value;
}

// Function to show/hide the box based on input
function toggleHiddenBox() {

    if (input.value == 1 && input.value.trim() !== '') {
        // hiddenBox.style.display = 'block';
        // hiddenBox.textContent = 'You entered 1! This is the first number.';
        
        tile.innerHTML = 
        `<div class="icon" aria-hidden="true"><img src="https://avatars.githubusercontent.com/u/85938502?s=400&u=4950e8661ca6636188276df971989bb168e8a9c1&v=4" alt="icon"></div>
         <div class="content">Become a member and get access to benefits like <strong>free parking</strong> and <strong>exclusive discounts</strong>!<span class="cta"><a href="https://placeholder.com" rel="noopener" target="_blank"><strong>JOIN NOW!</strong></a></span></div>`;
        tile.classList.add('show');
        tile.setAttribute('aria-hidden','false');

    } else if (input.value == 2 && input.value.trim() !== '') {
        tile.style.display = 'block';
        tile.textContent = 'You entered 2! This is the second number.';
    } else if (input.value == 3 && input.value.trim() !== '') {
        tile.style.display = 'block';
        tile.textContent = 'You entered 3! This is the third number.';
    } else if (input.value > 3 && input.value.trim() !== '') {
        tile.style.display = 'block';
        tile.textContent = `You entered ${input.value}! That's a big number!`;
    } else {
        tile.style.display = 'none';
        tile.textContent = ''; // Clear content when hidden
    }
}

// Event listener that calls both functions
input.addEventListener('input', function() {
    updateDisplay();
    toggleHiddenBox();
});