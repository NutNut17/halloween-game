function startTimer(duration, display) {
    let timer = duration, seconds;

    const interval = setInterval(() => {
        seconds = parseInt(timer, 10);

        display.textContent = `Time left: ${seconds}s`;

        if (--timer < 0) {
            clearInterval(interval);
            toggleGrid(false);
        }
    }, 1000);
}

function generateGrid() {
    const gridSize = document.getElementById('gridSize').value;
    const gridContainer = document.getElementById('gridContainer');
    gridContainer.innerHTML = ''; // Clear previous grid

    const container = document.createElement('div');
    container.className = `row row-cols-${gridSize}`;

    const images = [
        'img/bat.png',
        'img/candle.png',
        'img/ghost.png',
        'img/halloween-candy.png',
        'img/haunted-house.png',
        'img/pumpkin.png',
        'img/skull.png',
        'img/spider-web.png',
        'img/spider.png',
        'img/tomb.png',
        'img/witch.png',
    ];

    for (let i = 0; i < gridSize * gridSize; i++) {
        
        const randomIndex = Math.floor(Math.random() * images.length);
        const selectedImage = images[randomIndex];

        // Create a div with Bootstrap column class
        const gridItem = document.createElement('div');
        gridItem.className = 'col';
        
        // Create an image element
        const imgElement = document.createElement('img');
        imgElement.src = selectedImage;
        imgElement.className = 'square-img'; // Use square image styling

        gridItem.appendChild(imgElement)
        container.appendChild(gridItem);
    }

    gridContainer.appendChild(container);

    // Display grid and show/hide button after 10 seconds
    document.getElementById('toggleButton').style.display = 'block';
    toggleGrid(true);  // Show grid initially
    
    const display = document.getElementById('timer');
    startTimer(10, display);  // Start the 10-second timer
}

let gridVisible = true;

function toggleGrid() {

    const gridContainer = document.getElementById('gridContainer');

    if (gridVisible) {
        gridContainer.classList.remove('hidden');
        gridContainer.classList.add('visible');
        gridVisible = false;
    } else {
        gridContainer.classList.remove('visible');
        gridContainer.classList.add('hidden');
        gridVisible = true;
    }
    
    document.getElementById('toggleButton').textContent = gridVisible ? 'Show Grid' : 'Hide Grid';
}

toggleGrid(true);  // Show grid initially