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
    let content = '';

    function makeInner(contentText){
    return `<div class="icon" aria-hidden="true">
            <img src="https://avatars.githubusercontent.com/u/85938502?s=400&u=4950e8661ca6636188276df971989bb168e8a9c1&v=4" alt="icon">
        </div>
         <div class="content">${contentText}<span class="cta">
         <a href="https://placeholder.com" rel="noopener" target="_blank"><strong>JOIN NOW!</strong></a></span></div>`;
    }

    if (input.value == 1 && input.value.trim() !== '') {
        tile.style.display = 'block';
        content = 'Become a member and get access to benefits like <strong>free parking</strong> and <strong>exclusive discounts</strong>!';    
        tile.innerHTML = makeInner(content);
        tile.classList.add('show');
        tile.setAttribute('aria-hidden','false');

    } else if (input.value == 2 && input.value.trim() !== '') {
        tile.style.display = 'block';
        content = '2 times the benefits! Join now to unlock exclusive perks and offers tailored just for you.';
        tile.innerHTML = makeInner(content);
        tile.classList.add('show');
        tile.setAttribute('aria-hidden','false');
 
    } else if (input.value == 3 && input.value.trim() !== '') {
        tile.style.display = 'block';
        content = 'Triple Rainbow all the way across the sky! Join now to unlock exclusive perks and offers tailored just for you.';
        tile.innerHTML = makeInner(content);
        tile.classList.add('show');
        tile.setAttribute('aria-hidden','false');

    } else if (input.value > 3 && input.value.trim() !== '') {
        tile.style.display = 'block';
        content = `${input.value} is a lot! That's monkey business.`;
        tile.innerHTML = makeInner(content);
        tile.setAttribute('aria-hidden','false');

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